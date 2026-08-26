import { Photo } from "@/components/Photo";
import { showPending, type Slot as SlotType } from "@/lib/content";

type Props = {
  slot: SlotType;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function Slot({ slot, sizes, className, priority }: Props) {
  if (slot.src) {
    return (
      <div className={className}>
        <Photo
          alt={slot.alt ?? ""}
          priority={priority}
          sizes={sizes}
          src={slot.src}
        />
      </div>
    );
  }

  if (!showPending) return null;

  return (
    <div className={className}>
      <div className="c-slot" role="presentation">
        <span className="c-slot__label">{slot.pending}</span>
      </div>
    </div>
  );
}
