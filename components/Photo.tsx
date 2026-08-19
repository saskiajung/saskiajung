const WIDTHS = [480, 640, 960, 1440];
const RATIO = 4 / 5;

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function Photo({ src, alt, sizes, priority, className }: Props) {
  const widest = WIDTHS[WIDTHS.length - 1];

  return (
    <img
      alt={alt}
      className={className}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      height={Math.round(widest / RATIO)}
      loading={priority ? "eager" : "lazy"}
      sizes={sizes}
      src={`${src}-${widest}.webp`}
      srcSet={WIDTHS.map((width) => `${src}-${width}.webp ${width}w`).join(", ")}
      width={widest}
    />
  );
}
