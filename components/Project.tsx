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
              Le projet des <strong>« 500 piliers du Royaume »</strong> a pour objet de mobiliser les contributeurs pour
              l&apos;acquisition du <strong>campus central de Normandie</strong> dans l&apos;agglomération rouennaise.
            </p>
            <p>
              Depuis 2018, nous sommes à la recherche d&apos;un site capable d&apos;accueillir l&apos;église principale de
              Normandie dont le site était devenu exigu. Aujourd&apos;hui, le temps est venu pour nous de bâtir un temple
              plus grand qui réponde à nos exigences.
            </p>
            <p>
              Déménager pour un espace plus grand nous permettra de réunir plus de personnes dans une même salle, faire
              des activités en parallèle destinées à tous les âges. Bref, avoir un espace plus grand, plus fonctionnel et
              mieux adapté, s&apos;est imposé à l&apos;équipe dirigeante comme une nécessité absolue.
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

