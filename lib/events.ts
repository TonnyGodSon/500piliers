/** Événement émis par le simulateur pour pré-remplir le bulletin d'engagement. */
export const PLEDGE_PREFILL_EVENT = 'pledge:prefill';

export type PledgePrefillDetail = { amount: number };

export function prefillPledge(amount: number) {
  window.dispatchEvent(new CustomEvent<PledgePrefillDetail>(PLEDGE_PREFILL_EVENT, { detail: { amount } }));
  document.getElementById('engagement')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

