import Verse from './Verse';
import { VERSES } from '@/lib/content';

export default function Project() {
  return (
    <section className="section section-dark" id="projet">
      <div className="container">
        <h2 className="section-title reveal">Les 500 Piliers du Royaume, qu&apos;est-ce que c&apos;est ?</h2>
        <div className="two-cols">
          <div>
            <p>
              Le projet des <strong>« 500 piliers du Royaume »</strong> vise à mobiliser des contributeurs pour
              l&apos;acquisition du <strong>campus central de Normandie</strong>, dans l&apos;agglomération rouennaise.
            </p>
            <p>
              Depuis 2018, nous recherchons un site capable d&apos;accueillir notre église principale. Face à la
              croissance de nos activités, un espace plus vaste est devenu indispensable pour réunir davantage de
              personnes et proposer des activités adaptées à tous les âges dans des conditions optimales.
            </p>
          </div>
          <div>
            <div className="highlight-card reveal">
              <p>
                Les « 500 piliers du Royaume », c&apos;est fédérer <strong>au moins 500 personnes</strong> de la Normandie
                et d&apos;ailleurs qui donneraient volontairement{' '}
                <strong>un multiple de deux mille (2&nbsp;000)&nbsp;euros</strong> et deviendraient ainsi un des 500
                piliers de ce projet.
              </p>
            </div>
            <p>
              Nous croyons que nous sommes dans la saison convenable, la saison durant laquelle Dieu accomplit cette
              promesse à notre égard :
            </p>
            <Verse text={VERSES.samuel.text} cite={VERSES.samuel.ref} variant="inline" />
            <p className="signature">Ensemble au service du Roi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

