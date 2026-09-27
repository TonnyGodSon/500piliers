import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KeyFigures from '@/components/KeyFigures';
import Project from '@/components/Project';
import Campus from '@/components/Campus';
import IccNormandie from '@/components/IccNormandie';
import Expectations from '@/components/Expectations';
import FundraisingStats from '@/components/FundraisingStats';
import Contribute from '@/components/Contribute';
import PledgeForm from '@/components/PledgeForm';
import Footer from '@/components/Footer';
import FloatingCta from '@/components/FloatingCta';
import RevealObserver from '@/components/RevealObserver';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import { DONATION_LINKS, SITE } from '@/lib/content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  name: SITE.name,
  description: "Collecte pour l'acquisition du Campus Central d'Impact Centre Chrétien en Normandie",
  recipient: { '@type': 'Organization', name: 'Impact Centre Chrétien Rouen', email: SITE.contactEmail, url: SITE.mainChurchUrl },
  target: DONATION_LINKS.taxFrance,
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <KeyFigures />
        <Project />
        <Campus />
        <IccNormandie />
        <Expectations />
        <FundraisingStats />
        <Contribute />
        <PledgeForm />
      </main>
      <Footer />
      <FloatingCta />
      <RevealObserver />
      <ServiceWorkerRegister />
    </>
  );
}

