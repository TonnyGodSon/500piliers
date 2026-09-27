'use client';

import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { LOCAL_CHURCHES, PILIER_AMOUNT, SITE, formatEuro, round2 } from '@/lib/content';

const AMOUNT_OPTIONS = [
  { value: '2000', label: '1 pilier – 2 000 €' },
  { value: '4000', label: '2 piliers – 4 000 €' },
  { value: '6000', label: '3 piliers – 6 000 €' },
  { value: '10000', label: '5 piliers – 10 000 €' },
  { value: 'autre', label: 'Autre' },
];
const FREQUENCIES = ['En une fois', 'Tous les mois', 'Tous les trimestres', 'Autre'] as const;
const PAYMENT_METHODS = ['Chèque', 'Prélèvement', 'Virement', 'Carte bancaire', 'Espèces', 'Autre'];

type Frequency = (typeof FREQUENCIES)[number];

const initial = {
  civilite: '',
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  adresse: '',
  ville: '',
  cp: '',
  eglise: '',
  montant: '2000',
  montantAutre: '',
  frequence: 'En une fois' as Frequency,
  frequenceAutre: '',
  paiements: [] as string[],
  paiementAutre: '',
  consent: false,
};
type FormState = typeof initial;
type TextField = { [K in keyof FormState]: FormState[K] extends string ? K : never }[keyof FormState];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function PledgeForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [message, setMessage] = useState('');

  const amount = form.montant === 'autre' ? Number(form.montantAutre) || 0 : Number(form.montant);

  const installmentInfo = useMemo(() => {
    if (amount <= 0) return '';
    switch (form.frequence) {
      case 'Tous les mois':
        return `Soit ${formatEuro(round2(amount / 12))} par mois pendant 12 mois.`;
      case 'Tous les trimestres':
        return `Soit ${formatEuro(amount / 4)} par trimestre (4 versements).`;
      case 'En une fois':
        return `Versement unique de ${formatEuro(amount)}.`;
      default:
        return '';
    }
  }, [amount, form.frequence]);

  const set = (name: TextField) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [name]: e.target.value }));

  const togglePayment = (method: string) =>
    setForm((f) => ({
      ...f,
      paiements: f.paiements.includes(method) ? f.paiements.filter((p) => p !== method) : [...f.paiements, method],
    }));

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.nom.trim()) errs.nom = true;
    if (!form.prenom.trim()) errs.prenom = true;
    if (!EMAIL_RE.test(form.email.trim())) errs.email = true;
    if (amount <= 0) errs.montantAutre = true;
    if (!form.consent) errs.consent = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildSummary = () => {
    let versement: string = form.frequence;
    if (form.frequence === 'Tous les mois') versement += ` – ${formatEuro(round2(amount / 12))} / mois`;
    if (form.frequence === 'Tous les trimestres') versement += ` – ${formatEuro(amount / 4)} / trimestre`;
    if (form.frequence === 'Autre') versement += ` : ${form.frequenceAutre}`;

    const paiements = form.paiements.map((p) => (p === 'Autre' && form.paiementAutre ? `Autre (${form.paiementAutre})` : p));
    const nbPiliers = amount % PILIER_AMOUNT === 0 ? amount / PILIER_AMOUNT : 0;

    return [
      "BULLETIN D'ENGAGEMENT – OPÉRATION 500 PILIERS NORMANDIE",
      '',
      `Civilité : ${form.civilite || '-'}`,
      `Nom(s) : ${form.nom}`,
      `Prénom(s) : ${form.prenom}`,
      `Téléphone : ${form.telephone || '-'}`,
      `E-mail : ${form.email}`,
      `Adresse : ${form.adresse || '-'}`,
      `Code postal / Ville : ${form.cp || '-'} ${form.ville}`,
      `Église locale : ${form.eglise || '-'}`,
      '',
      `Étape 1 – Montant de l'engagement : ${formatEuro(amount)}${nbPiliers ? ` (${nbPiliers} pilier${nbPiliers > 1 ? 's' : ''})` : ''}`,
      `Étape 2 – Versement sur 12 mois : ${versement}`,
      `Étape 3 – Mode(s) de paiement : ${paiements.length ? paiements.join(', ') : '-'}`,
      '',
      `Date : ${new Date().toLocaleDateString('fr-FR')}`,
    ].join('\n');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setMessage("Merci de compléter les champs obligatoires (*) et d'accepter l'utilisation de vos données.");
      return;
    }
    setMessage('');
    const subject = `Engagement 500 Piliers – ${form.prenom} ${form.nom}`;
    window.location.href = `mailto:${SITE.financeEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildSummary())}`;
  };

  const inputCls = (name: keyof FormState) => (errors[name] ? 'invalid' : undefined);

  return (
    <section className="section section-light" id="engagement">
      <div className="container narrow">
        <h2 className="script-title">Devenez l&apos;un des 500 Piliers</h2>
        <p className="center dark-text">
          Remplissez le bulletin d&apos;engagement : il sera préparé dans un e-mail à envoyer à ICC, ou vous pouvez
          l&apos;imprimer et le déposer sur le stand des 500 Piliers.
        </p>

        <form className="pledge-form" onSubmit={onSubmit} noValidate>
          <fieldset className="radio-row">
            <legend className="sr-only">Civilité</legend>
            {['Homme', 'Femme'].map((c) => (
              <label key={c}>
                <input type="radio" name="civilite" value={c} checked={form.civilite === c} onChange={set('civilite')} /> {c}
              </label>
            ))}
          </fieldset>

          <div className="form-grid">
            <label>Nom(s) *<input type="text" required autoComplete="family-name" value={form.nom} onChange={set('nom')} className={inputCls('nom')} /></label>
            <label>Prénom(s) *<input type="text" required autoComplete="given-name" value={form.prenom} onChange={set('prenom')} className={inputCls('prenom')} /></label>
            <label>Téléphone<input type="tel" autoComplete="tel" value={form.telephone} onChange={set('telephone')} /></label>
            <label>E-mail *<input type="email" required autoComplete="email" value={form.email} onChange={set('email')} className={inputCls('email')} /></label>
            <label>Adresse<input type="text" autoComplete="street-address" value={form.adresse} onChange={set('adresse')} /></label>
            <label>Ville<input type="text" autoComplete="address-level2" value={form.ville} onChange={set('ville')} /></label>
            <label>Code postal<input type="text" inputMode="numeric" autoComplete="postal-code" value={form.cp} onChange={set('cp')} /></label>
            <label>
              Église locale
              <select value={form.eglise} onChange={set('eglise')}>
                <option value="">— Choisir —</option>
                {LOCAL_CHURCHES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
          </div>

          <h3 className="step">Étape 1 : Je m&apos;engage pour un montant de</h3>
          <div className="choice-row">
            {AMOUNT_OPTIONS.map((o) => (
              <label className="chip" key={o.value}>
                <input type="radio" name="montant" value={o.value} checked={form.montant === o.value} onChange={set('montant')} /> {o.label}
              </label>
            ))}
          </div>
          {form.montant === 'autre' && (
            <label className="inline-field">
              Préciser le montant (€)
              <input type="number" min={1} step={1} value={form.montantAutre} onChange={set('montantAutre')} className={inputCls('montantAutre')} />
            </label>
          )}

          <h3 className="step">Étape 2 : Je choisis d&apos;effectuer un versement sur 12 mois</h3>
          <div className="choice-row">
            {FREQUENCIES.map((f) => (
              <label className="chip" key={f}>
                <input type="radio" name="frequence" value={f} checked={form.frequence === f} onChange={set('frequence')} /> {f}
              </label>
            ))}
          </div>
          <p className="freq-info" aria-live="polite">{installmentInfo}</p>
          {form.frequence === 'Autre' && (
            <label className="inline-field">
              Préciser
              <input type="text" value={form.frequenceAutre} onChange={set('frequenceAutre')} />
            </label>
          )}

          <h3 className="step">Étape 3 : Je sélectionne le ou les modes de paiement</h3>
          <div className="choice-row">
            {PAYMENT_METHODS.map((m) => (
              <label className="chip" key={m}>
                <input type="checkbox" checked={form.paiements.includes(m)} onChange={() => togglePayment(m)} /> {m}
              </label>
            ))}
          </div>
          {form.paiements.includes('Autre') && (
            <label className="inline-field">
              Préciser
              <input type="text" value={form.paiementAutre} onChange={set('paiementAutre')} />
            </label>
          )}

          <h3 className="step">Étape 4 : J&apos;envoie mon bulletin d&apos;engagement</h3>
          <label className={`consent ${errors.consent ? 'consent-error' : ''}`}>
            <input type="checkbox" checked={form.consent} onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))} />
            J&apos;accepte que mes informations soient utilisées par Impact Centre Chrétien uniquement dans le cadre du
            suivi de mon engagement pour l&apos;opération 500 Piliers. *
          </label>

          <p className="form-error" role="alert">{message}</p>

          <div className="form-actions">
            <button type="submit" className="btn btn-gold">Envoyer mon engagement par e-mail</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => window.print()}>Imprimer le bulletin</button>
          </div>
          <p className="small muted center">
            Pour toutes questions : <a href={`mailto:${SITE.financeEmail}`}>{SITE.financeEmail}</a>
          </p>
        </form>
      </div>
    </section>
  );
}

