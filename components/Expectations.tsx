import Verse from './Verse';
import { VERSES } from '@/lib/content';

export default function Expectations() {
  return (
    <section className="section section-light" id="attentes">
      <div className="container narrow">
        <h2 className="section-title dark reveal">À quoi devons-nous nous attendre ?</h2>
        <Verse text={VERSES.deut.text} cite={VERSES.deut.ref} variant="dark" />
        <p className="lead dark-text">À travers ce projet, nous nous attendons à :</p>
        <div className="expect-grid">
          <div className="expect-card reveal">
            <span className="expect-num">×1000</span>
            <p>
              Devenir une famille <strong>1000 fois plus grande</strong> à travers les églises locales.
            </p>
          </div>
          <div className="expect-card reveal">
            <span className="expect-num">×1000</span>
            <p>
              Pour chaque membre des 500 piliers du Royaume : connaître une augmentation 1000 fois plus importante dans
              tous les aspects de nos vies : grâce, distinction, impact, transformation…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

