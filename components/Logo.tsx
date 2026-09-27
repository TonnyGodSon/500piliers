import Image from 'next/image';
import { LOGO } from '@/lib/content';

/** Logo officiel des 500 Piliers du Royaume (déclinaisons WebP générées depuis le PNG original). */
export default function Logo({ width, className, priority }: { width: number; className?: string; priority?: boolean }) {
  // 400 px suffit jusqu'à 200 px affichés (écrans Retina), au-delà on charge la version 800 px
  const src = width <= 200 ? LOGO.small : LOGO.large;
  return (
    <Image
      src={src}
      alt="Logo Les 500 Piliers du Royaume"
      width={width}
      height={Math.round(width * LOGO.ratio)}
      className={className}
      priority={priority}
    />
  );
}
