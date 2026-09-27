import CampusCarousel from './CampusCarousel';

export default function Campus() {
  return (
    <section className="section section-light" id="campus">
      <div className="container">
        <p className="eyebrow">Le projet d&apos;acquisition</p>
        <h2 className="section-title dark reveal">Nous voulons que ce nouveau campus soit un lieu de vie</h2>
        <CampusCarousel />
        <p className="campus-quote">
          Nous croyons que le siège des églises ICC en Normandie sera un endroit à la gloire de Dieu et du corps de
          Christ en Normandie.
        </p>
      </div>
      <div className="skyline" aria-hidden="true" />
    </section>
  );
}
