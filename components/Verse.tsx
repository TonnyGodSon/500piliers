export default function Verse({
  text,
  cite,
  variant,
  className = '',
}: {
  text: string;
  cite: string;
  variant?: 'inline' | 'dark';
  className?: string;
}) {
  return (
    <blockquote className={`verse ${variant ? `verse-${variant}` : ''} ${className}`}>
      « {text} »<cite>{cite}</cite>
    </blockquote>
  );
}

