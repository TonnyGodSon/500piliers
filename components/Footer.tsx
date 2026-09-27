import Logo from './Logo';
import CopyButton from './CopyButton';
import { SITE } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo width={160} className="footer-logo" />
          <p>
            Opération portée par les églises locales d&apos;Impact Centre Chrétien en Normandie.
            <br />
            Siège régional : {SITE.headquarters}.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📧 <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> <CopyButton text={SITE.contactEmail} /></p>
          <p>💼 Finances : <a href={`mailto:${SITE.financeEmail}`}>{SITE.financeEmail}</a> <CopyButton text={SITE.financeEmail} /></p>
        </div>
        <div>
          <h4>Liens</h4>
          <p><a href={SITE.mainChurchUrl} target="_blank" rel="noopener noreferrer">Impact Centre Chrétien</a></p>
          <p><a href="#contribuer">Contribuer</a></p>
          <p><a href="#engagement">Bulletin d&apos;engagement</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {SITE.org} · Ensemble au service du Roi.</p>
      </div>
    </footer>
  );
}

