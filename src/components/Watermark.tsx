type WatermarkProps = {
  word: string;
  className: string;
};

export function Watermark({ word, className }: WatermarkProps) {
  return (
    <span className={`bg-word ${className}`} aria-hidden="true">
      {word}
    </span>
  );
}
