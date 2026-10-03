import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Check, Home, KeyRound, MapPin, MessagesSquare } from 'lucide-react';
import { PropertyGrid } from '@/components/properties/property-grid';
import { getFeaturedProperties } from '@/lib/data/properties';

export const revalidate = 60;
export const metadata: Metadata = {
  title: 'Agence.liaison — Votre projet immobilier en France',
  description: 'Un accompagnement immobilier dédié aux clients néerlandais pour louer ou acheter un appartement ou une maison partout en France.',
};

const propertyOptions = [
  {
    number: '01',
    title: 'Appartements T2 et T3',
    text: 'Pour un pied-à-terre, un nouveau départ ou un projet d’investissement en France.',
    image: '/images/categories/appartement-meuble.png',
    alt: 'Appartement lumineux prêt à devenir votre nouveau chez-vous',
  },
  {
    number: '02',
    title: 'Maisons avec jardin',
    text: 'Des maisons de 2 à 3 chambres pour profiter de plus d’espace et de l’art de vivre français.',
    image: '/images/site-background.webp',
    alt: 'Chalets en bois au cœur des Alpes françaises',
  },
];

const steps = [
  { icon: MessagesSquare, title: 'Parlons de votre projet', text: 'Vos critères, votre budget, votre calendrier : nous prenons le temps de comprendre ce qui compte pour vous.' },
  { icon: MapPin, title: 'Cherchons partout en France', text: 'Nous vous aidons à cibler les régions et les biens qui correspondent à votre projet de location ou d’achat.' },
  { icon: KeyRound, title: 'Avançons à vos côtés', text: 'De la première sélection aux prochaines étapes, vous avez un interlocuteur pour vous guider.' },
];

export default async function HomePage() {
  const properties = await getFeaturedProperties(6);

  return (
    <>
      <section className="relative isolate min-h-[560px] bg-ink-950 text-white sm:min-h-[640px]">
        <Image src="/properties/grand-bornand/IMG_4225.jpeg" alt="Intérieur chaleureux d’un logement en France" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="container-app relative flex min-h-[560px] flex-col justify-center py-20 sm:min-h-[640px] sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-200">Agence.liaison · Votre partenaire immobilier en France</p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">Votre projet immobilier<br /><span className="italic text-[#e2ddc4]">commence ici, en France.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">Vous êtes néerlandais et cherchez à louer ou acheter un bien en France ? Je vous accompagne dans votre recherche, partout dans le pays.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-sand-200 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-white">Parlons de votre projet <ArrowUpRight className="h-5 w-5" /></Link>
            <a href="#biens" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Découvrir les biens disponibles <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-xs text-white/80"><MapPin className="h-4 w-4" /> Un accompagnement partout en France</div>
        </div>
      </section>

      <section className="container-app py-20 sm:py-28">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-eyebrow uppercase text-ink-500">Location & achat</p><h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Le bien qui correspond à votre vie en France.</h2></div>
          <p className="max-w-md text-sm leading-7 text-ink-600">Chaque recherche est différente. Nous partons de vos envies pour vous orienter vers le type de logement qui vous convient.</p>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {propertyOptions.map((item) => (
            <article key={item.number} className="group grid min-w-0 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-64 overflow-hidden bg-sand-200 sm:min-h-[300px]"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1279px) 100vw, 50vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" /></div>
              <div className="flex flex-col justify-center p-6 sm:p-8"><p className="text-xs font-semibold tracking-[0.18em] text-ink-500">{item.number} / VOTRE RECHERCHE</p><h3 className="editorial-title mt-5 text-2xl sm:text-3xl">{item.title}</h3><p className="mt-4 text-sm leading-7 text-ink-600">{item.text}</p><p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-ink-700"><Check className="h-4 w-4 text-canal-600" /> Location ou achat</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="biens" className="container-app scroll-mt-24 py-20 sm:py-28">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-eyebrow uppercase text-ink-500">À découvrir</p><h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Nos biens disponibles en France.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-ink-600">Découvrez une sélection de logements publiés et prêts à accueillir votre projet.</p></div>
          <Link href="/appartements" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-canal-700">Voir tous les biens <ArrowRight className="h-4 w-4" /></Link>
        </div>
        {properties.length > 0 ? (
          <PropertyGrid properties={properties} />
        ) : (
          <p className="rounded-2xl border border-ink-100 bg-white p-8 text-sm leading-7 text-ink-700">Les biens disponibles apparaîtront ici dès leur publication. Consultez le catalogue pour découvrir les destinations proposées.</p>
        )}
      </section>

      <section className="bg-[#eaeedf] py-20 sm:py-24">
        <div className="container-app grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="text-eyebrow uppercase text-ink-600">Un lien entre deux pays</p><h2 className="mt-4 text-4xl sm:text-5xl">La France vous attire. Je vous aide à vous y installer.</h2><p className="mt-6 max-w-md text-sm leading-7 text-ink-700">En tant qu’agent de liaison, je facilite votre recherche immobilière et vous accompagne dans vos échanges et vos démarches, avec un suivi adapté à votre projet.</p><Link href="/a-propos" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold">En savoir plus sur mon approche <ArrowRight className="h-4 w-4" /></Link></div>
          <div>{steps.map((step, i) => <div key={step.title} className="flex gap-5 border-b border-ink-300/70 py-6 first:pt-0"><span className="pt-1 text-xs text-ink-500">0{i + 1}</span><div className="flex-1"><h3 className="editorial-title text-2xl">{step.title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-ink-700">{step.text}</p></div><step.icon className="mt-1 h-5 w-5 shrink-0 text-ink-600" /></div>)}</div>
        </div>
      </section>

      <section className="bg-ink-950 py-16 text-white sm:py-20"><div className="container-app flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-sand-300"><Home className="h-4 w-4" /> Votre recherche commence par un échange</p><h2 className="max-w-2xl text-4xl sm:text-5xl">Parlons du lieu que vous imaginez.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-white/75">Dites-moi ce que vous recherchez en France. Nous définirons ensemble les prochaines étapes.</p></div><Link href="/contact" className="inline-flex min-h-14 shrink-0 items-center gap-5 rounded-lg bg-sand-200 px-7 py-4 text-sm font-semibold text-ink-950 transition-colors hover:bg-white">Me contacter <ArrowUpRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
