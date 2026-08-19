import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE = "assets";
const OUTPUT = path.join("public", "images");
const WIDTHS = [480, 640, 960, 1440];
const QUALITY = 80;

async function main() {
  await rm(OUTPUT, { recursive: true, force: true });

  const groups = await readdir(SOURCE, { withFileTypes: true });
  let written = 0;
  let bytes = 0;

  for (const group of groups) {
    if (!group.isDirectory()) continue;

    const from = path.join(SOURCE, group.name);
    const to = path.join(OUTPUT, group.name);
    await mkdir(to, { recursive: true });

    const files = (await readdir(from)).filter((file) =>
      /\.(jpe?g|png|webp)$/i.test(file),
    );

    for (const file of files) {
      const slug = path
        .basename(file, path.extname(file))
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      for (const width of WIDTHS) {
        const target = path.join(to, `${slug}-${width}.webp`);
        const info = await sharp(path.join(from, file))
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(target);
        written += 1;
        bytes += info.size;
      }
    }
  }

  console.log(
    `${written} files, ${(bytes / 1024 / 1024).toFixed(1)} MB in ${OUTPUT}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
