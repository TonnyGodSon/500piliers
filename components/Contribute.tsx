import type { CSSProperties } from 'react';
import Simulator from './Simulator';
import QrCode from './QrCode';
import Verse from './Verse';
import CopyButton from './CopyButton';
import ShareButton from './ShareButton';
import { DONATION_LINKS, VERSES } from '@/lib/content';

const delay = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Contribute() {
  return (
    <section className="section section-dark" id="contribuer">
      <div className="container">
        <h2 className="section-title reveal">Comment contribuer ?</h2>
        <p className="center lead">
          Rejoignez la mobilisation ! Devenez l&apos;un des 500 Piliers qui écrivent l&apos;histoire de l&apos;expansion
          de l&apos;Évangile en Normandie, par amour pour cette région. Inscrivez votre nom dans l&apos;édifice que Dieu
          construit pour toucher des générations.
        </p>

        <Simulator />

        <div className="pay-grid">
          <article className="pay-card pay-card-main reveal" id="paiement-cb" style={delay(0)}>
            <div className="pay-head">
              <span className="pay-icon" aria-hidden="true">💳</span>
              <h3>En ligne par carte bancaire</h3>
            </div>
            <div className="pay-options">
              <a className="pay-link" href={DONATION_LINKS.taxFrance} target="_blank" rel="noopener noreferrer">
                <span className="flag" aria-hidden="true">🇫🇷</span>
                <span>
                  <strong>Je paie des impôts en France</strong>
                  <small>Collecte ICC – Opération 500 Piliers Normandie</small>
                </span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="pay-link" href={DONATION_LINKS.noTaxFrance} target="_blank" rel="noopener noreferrer">
                <span className="flag" aria-hidden="true">🌍</span>
                <span>
                  <strong>Je ne paie pas d&apos;impôts en France</strong>
                  <small>Collecte ICCC – Opération 500 Piliers Normandie</small>
                </span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
            <QrCode />
          </article>

          <article className="pay-card reveal" style={delay(1)}>
            <div className="pay-head">
              <span className="pay-icon" aria-hidden="true">💶</span>
              <h3>En espèces</h3>
            </div>
            <p>
              Sur place, en présentiel, en indiquant <strong>« 500 piliers »</strong> sur les enveloppes prévues à cet
              effet.
            </p>
            <p className="small muted">Vous pouvez aussi déposer votre bulletin d&apos;engagement sur le stand des 500 Piliers.</p>
          </article>

          <article className="pay-card reveal" style={delay(2)}>
            <div className="pay-head">
              <span className="pay-icon" aria-hidden="true">✍️</span>
              <h3>Par chèque</h3>
            </div>
            <p>
              Merci d&apos;indiquer <strong>« 500 piliers »</strong> au dos du chèque.
            </p>
            <ul className="cheque-list">
              <li>
                <span>🇫🇷 Si vous payez des impôts en France</span>
                <div className="cheque-row">
                  <strong>À l&apos;ordre de : ICC Rouen</strong>
                  <CopyButton text="ICC Rouen" />
                </div>
              </li>
              <li>
                <span>🌍 Si vous ne payez pas d&apos;impôts en France</span>
                <div className="cheque-row">
                  <strong>À l&apos;ordre de : ICCC</strong>
                  <CopyButton text="ICCC" />
                </div>
              </li>
            </ul>
          </article>
        </div>

        <Verse text={VERSES.corinth.text} cite={VERSES.corinth.ref} className="center" />

        <div className="share-block">
          <p>Faites connaître le projet autour de vous :</p>
          <ShareButton className="btn btn-gold" />
        </div>
      </div>
    </section>
  );
}
