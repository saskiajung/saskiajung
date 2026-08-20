import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE = "assets";
const OUTPUT = path.join("public", "images");
const MANIFEST = path.join("lib", "images.ts");
const WIDTHS = [480, 640, 960, 1440, 1920];
const MAX_WIDTH = 1920;
const QUALITY = 80;

function slugify(file) {
  return path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function widthsFor(sourceWidth) {
  const cap = Math.min(sourceWidth, MAX_WIDTH);
  const usable = WIDTHS.filter((width) => width < cap);
  return [...usable, cap];
}

async function main() {
  await rm(OUTPUT, { recursive: true, force: true });

  const groups = await readdir(SOURCE, { withFileTypes: true });
  const manifest = {};
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
      const slug = slugify(file);
      const source = sharp(path.join(from, file));
      const { width: sourceWidth, height: sourceHeight } =
        await source.metadata();
      const widths = widthsFor(sourceWidth);

      for (const width of widths) {
        const target = path.join(to, `${slug}-${width}.webp`);
        const info = await sharp(path.join(from, file))
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(target);
        written += 1;
        bytes += info.size;
      }

      manifest[`/images/${group.name}/${slug}`] = {
        width: sourceWidth,
        height: sourceHeight,
        widths,
      };
    }
  }

  const entries = Object.keys(manifest)
    .sort()
    .map((key) => {
      const { width, height, widths } = manifest[key];
      return `  "${key}": { width: ${width}, height: ${height}, widths: [${widths.join(", ")}] },`;
    })
    .join("\n");

  await writeFile(
    MANIFEST,
    `export type ImageMeta = {\n` +
      `  width: number;\n` +
      `  height: number;\n` +
      `  widths: number[];\n` +
      `};\n\n` +
      `export const images: Record<string, ImageMeta> = {\n${entries}\n};\n`,
  );

  console.log(
    `${written} files, ${(bytes / 1024 / 1024).toFixed(1)} MB in ${OUTPUT}`,
  );
  console.log(`${Object.keys(manifest).length} entries in ${MANIFEST}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
