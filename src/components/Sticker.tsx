export type StickerKind =
  | "heart"
  | "star"
  | "flower"
  | "cloud"
  | "cherry"
  | "sparkle"
  | "pencil"
  | "cat"
  | "smile"
  | "book"
  | "graduate"
  | "clip";

type StickerProps = {
  kind: StickerKind;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  floating?: boolean;
  label?: string;
};

export type StickerFieldVariant =
  | "hero"
  | "home-summary"
  | "journey"
  | "assignments"
  | "skills"
  | "reflection"
  | "thanks";

const fieldStickers: Record<StickerFieldVariant, StickerKind[]> = {
  hero: ["heart", "cloud", "cat", "sparkle", "book", "smile", "pencil", "flower", "cherry", "star"],
  "home-summary": ["heart", "cloud", "book", "star", "cat", "pencil", "flower", "smile"],
  journey: ["sparkle", "cloud", "heart", "star", "cat", "flower", "smile", "pencil"],
  assignments: ["book", "heart", "clip", "cloud", "star", "cat", "pencil", "flower", "smile", "cherry"],
  skills: ["flower", "star", "heart", "cloud", "book", "sparkle", "cat"],
  reflection: ["pencil", "heart", "clip", "cloud", "flower", "smile"],
  thanks: ["heart", "flower", "sparkle", "cloud", "cherry", "smile"],
};

const fieldSizes: StickerProps["size"][] = ["xl", "md", "lg", "lg", "md", "sm", "lg", "md", "sm", "md"];

export function Sticker({ kind, className = "", size = "md", floating = false, label }: StickerProps) {
  return (
    <span
      className={`sticker sticker-${kind} sticker-${size} ${floating ? "sticker-float" : ""} ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <span className="sticker-art" />
    </span>
  );
}

export function StickerField({ variant }: { variant: StickerFieldVariant }) {
  return (
    <div className={`sticker-field sticker-field-${variant}`} aria-hidden="true">
      {fieldStickers[variant].map((kind, index) => (
        <Sticker
          key={`${variant}-${kind}-${index}`}
          kind={kind}
          size={fieldSizes[index % fieldSizes.length]}
          floating={index % 3 === 0}
          className={`scatter-sticker scatter-${index + 1}`}
        />
      ))}
    </div>
  );
}
