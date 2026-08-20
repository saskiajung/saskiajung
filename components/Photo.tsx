import { images } from "@/lib/images";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function Photo({ src, alt, sizes, priority, className }: Props) {
  const meta = images[src];

  if (!meta) {
    throw new Error(`Unknown image "${src}". Run npm run images:optimize.`);
  }

  const widest = meta.widths[meta.widths.length - 1];

  return (
    <img
      alt={alt}
      className={className}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      height={meta.height}
      loading={priority ? "eager" : "lazy"}
      sizes={sizes}
      src={`${src}-${widest}.webp`}
      srcSet={meta.widths
        .map((width) => `${src}-${width}.webp ${width}w`)
        .join(", ")}
      width={meta.width}
    />
  );
}
