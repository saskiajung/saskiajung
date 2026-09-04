import { execFile } from "node:child_process";
import { mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);

const SOURCE = "assets";
const OUTPUT = path.join("public", "videos");
const MANIFEST = path.join("lib", "videos.ts");

const CRF = 25;
const MAX_RATE = "5M";
const BUF_SIZE = "10M";
const AUDIO_RATE = "128k";
const POSTER_QUALITY = 82;
const SIZE_LIMIT = 24 * 1024 * 1024;

const POSTER_AT = {
  "yoox-leave-your-mark-film-1x1": 42,
  "yoox-leave-your-mark-film-9x16": 42,
};

function slugify(file) {
  return path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function probe(file) {
  const { stdout } = await run("ffprobe", [
    "-v",
    "error",
    "-select_streams",
    "v:0",
    "-show_entries",
    "stream=width,height",
    "-show_entries",
    "format=duration",
    "-of",
    "json",
    file,
  ]);
  const data = JSON.parse(stdout);
  return {
    width: data.streams[0].width,
    height: data.streams[0].height,
    duration: Number(data.format.duration),
  };
}

async function encode(from, to) {
  await run("ffmpeg", [
    "-v",
    "error",
    "-i",
    from,
    "-c:v",
    "libx264",
    "-crf",
    String(CRF),
    "-preset",
    "slow",
    "-profile:v",
    "high",
    "-pix_fmt",
    "yuv420p",
    "-maxrate",
    MAX_RATE,
    "-bufsize",
    BUF_SIZE,
    "-c:a",
    "aac",
    "-b:a",
    AUDIO_RATE,
    "-ac",
    "2",
    "-movflags",
    "+faststart",
    to,
    "-y",
  ]);
}

async function poster(from, to, at) {
  const { stdout } = await run("ffmpeg", [
    "-v",
    "error",
    "-ss",
    String(at),
    "-i",
    from,
    "-frames:v",
    "1",
    "-f",
    "image2pipe",
    "-vcodec",
    "png",
    "-",
  ], { encoding: "buffer", maxBuffer: 64 * 1024 * 1024 });

  await sharp(stdout).webp({ quality: POSTER_QUALITY }).toFile(to);
}

async function main() {
  await rm(OUTPUT, { recursive: true, force: true });

  const groups = await readdir(SOURCE, { withFileTypes: true });
  const manifest = {};
  let bytes = 0;
  const oversized = [];

  for (const group of groups) {
    if (!group.isDirectory()) continue;

    const from = path.join(SOURCE, group.name);
    const files = (await readdir(from)).filter((file) =>
      /\.(mp4|mov|m4v)$/i.test(file),
    );
    if (files.length === 0) continue;

    const to = path.join(OUTPUT, group.name);
    await mkdir(to, { recursive: true });

    for (const file of files) {
      const slug = slugify(file);
      const source = path.join(from, file);
      const { width, height, duration } = await probe(source);

      const video = path.join(to, `${slug}.mp4`);
      const still = path.join(to, `${slug}-poster.webp`);

      await encode(source, video);
      await poster(source, still, POSTER_AT[slug] ?? duration / 3);

      const { size } = await stat(video);
      bytes += size;
      if (size > SIZE_LIMIT) oversized.push({ video, size });

      manifest[`/videos/${group.name}/${slug}`] = {
        width,
        height,
        duration: Number(duration.toFixed(2)),
        poster: `/videos/${group.name}/${slug}-poster.webp`,
      };

      console.log(
        `${video} ${(size / 1024 / 1024).toFixed(1)} MB (${width}x${height}, ${duration.toFixed(0)}s)`,
      );
    }
  }

  const entries = Object.keys(manifest)
    .sort()
    .map((key) => {
      const { width, height, duration, poster } = manifest[key];
      return `  "${key}": { width: ${width}, height: ${height}, duration: ${duration}, poster: "${poster}" },`;
    })
    .join("\n");

  await writeFile(
    MANIFEST,
    `export type VideoMeta = {\n` +
      `  width: number;\n` +
      `  height: number;\n` +
      `  duration: number;\n` +
      `  poster: string;\n` +
      `};\n\n` +
      `export const videos: Record<string, VideoMeta> = {\n${entries}\n};\n`,
  );

  console.log(
    `${Object.keys(manifest).length} videos, ${(bytes / 1024 / 1024).toFixed(1)} MB in ${OUTPUT}`,
  );

  if (oversized.length > 0) {
    for (const { video, size } of oversized) {
      console.error(
        `${video} is ${(size / 1024 / 1024).toFixed(1)} MB, over the 25 MiB Cloudflare Pages asset limit. Raise CRF.`,
      );
    }
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
