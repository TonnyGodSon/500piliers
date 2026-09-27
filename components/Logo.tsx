
import Image from 'next/image';
import { LOGO } from '@/lib/content';

/** Logo officiel des 500 Piliers du Royaume (public/logo-500-piliers.png). */
export default function Logo({ width, className, priority }: { width: number; className?: string; priority?: boolean }) {
  return (
    <Image
      src={LOGO.src}
      alt="Logo Les 500 Piliers du Royaume"
      width={width}
      height={Math.round(width * LOGO.ratio)}
      className={className}
      priority={priority}
    />
  );
}
