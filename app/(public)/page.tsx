import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, MapPin, Search, ShieldCheck, KeyRound, CalendarCheck } from 'lucide-react';
import { getCityPropertySummaries } from '@/lib/data/properties';
import { PROPERTY_TYPES } from '@/lib/utils/constants';

export const revalidate = 60;
export const metadata: Metadata = {
  title: 'Agence.liaison — Des lieux où se sentir bien',
  description: 'Chalets, villas, appartements meublés et mobil-homes en France. Découvrez votre prochain lieu de vie avec Agence.liaison.',
};

const collections = [
  { type: 'chalet', title: 'L’esprit montagne', label: 'Chalets', image: '/properties/la-clusaz/IMG_4208.jpeg' },
  { type: 'villa', title: 'Le goût des beaux jours', label: 'Villas', image: '/images/site-background.webp' },
  { type: 'furnished_studio', title: 'Votre nouveau chez-vous', label: 'Appartements meublés', image: '/images/categories/appartement-meuble.png' },
  { type: 'mobile_home', title: 'La liberté au grand air', label: 'Mobil-homes', image: '/images/categories/mobil-home.png' },
];

export default async function HomePage() {
  const cities = await getCityPropertySummaries();
  return (
    <>
      <section className="relative isolate bg-ink-950 text-white">
        <Image src="/properties/grand-bornand/IMG_4225.jpeg" alt="Intérieur chaleureux d’un chalet au Grand-Bornand, ouvert sur les montagnes" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="container-app relative py-20 sm:py-28 lg:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand-200">Agence.liaison · Des lieux, des histoires</p>
          <h1 className="mt-7 max-w-3xl text-5xl leading-[1.05] sm:text-7xl lg:text-[6.5rem]">Et si vous étiez<br /><span className="italic text-[#e2ddc4]">déjà chez vous ?</span></h1>
          <p className="mt-7 max-w-md text-base leading-7 text-white/85">Une cabane dans les montagnes. Une terrasse au soleil. Un lieu à vous, le temps d’un séjour ou d’un nouveau départ.</p>
          <Link href="/appartements" className="mt-9 inline-flex min-h-12 items-center gap-5 border-b border-white/60 py-2 text-sm font-semibold">Trouver mon prochain lieu <ArrowUpRight className="h-5 w-5" /></Link>
          <div className="mt-12 flex items-center gap-2 text-xs text-white/75 lg:absolute lg:bottom-10 lg:right-8 lg:mt-0"><MapPin className="h-4 w-4" /> Le Grand-Bornand, Haute-Savoie</div>
        </div>
      </section>

      <div className="container-app relative z-10 -mt-3 sm:-mt-6">
        <form action="/appartements" className="home-search grid gap-5 rounded-xl border border-ink-100 bg-white p-5 shadow-card sm:grid-cols-2 sm:p-7 lg:grid-cols-[1fr_1fr_auto]">
          <div className="lg:border-r lg:border-ink-100 lg:pr-7"><label htmlFor="home-city" className="text-[10px] font-bold text-ink-500">Votre destination</label><select id="home-city" name="city" className="mt-2 block min-h-11 w-full text-base text-ink-950"><option value="">Où souhaitez-vous aller ?</option>{cities.map(city => <option key={city.city} value={city.city}>{city.city}</option>)}</select></div>
          <div><label htmlFor="home-type" className="text-[10px] font-bold text-ink-500">Votre envie</label><select id="home-type" name="type" className="mt-2 block min-h-11 w-full text-base text-ink-950"><option value="">Tous les types de logements</option>{PROPERTY_TYPES.map(type => <option key={type.value} value={type.value}>{type.label}</option>)}</select></div>
          <button type="submit" className="flex min-h-14 items-center justify-center gap-3 rounded-lg bg-ink-950 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-ink-700 sm:col-span-2 lg:col-span-1"><Search className="h-4 w-4" /> Explorer les biens</button>
        </form>
      </div>

      <section className="container-app py-20 sm:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="text-eyebrow uppercase text-ink-500">À chacun son ailleurs</p><h2 className="mt-4 max-w-xl text-4xl sm:text-5xl">Quatre envies.<br />Mille façons d’habiter.</h2></div><p className="max-w-sm text-sm leading-7 text-ink-600">Des lieux choisis pour les moments qui comptent. Trouvez celui qui ressemble à votre façon de vivre.</p></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{collections.map((item, i) => <Link key={item.type} href={`/appartements?type=${item.type}`} className="group min-w-0"><div className="relative aspect-[3/4] overflow-hidden rounded-t-[5rem] rounded-b-lg bg-sand-200"><Image src={item.image} alt={item.label === 'Villas' ? 'Paysage pour une escapade en France' : item.label} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" /><span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.18em] text-white">0{i + 1} — {item.label}</span></div><div className="mt-5 flex items-center justify-between gap-3"><h3 className="editorial-title text-xl text-ink-950">{item.title}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-ink-500" /></div></Link>)}</div>
      </section>

      <section className="bg-[#eaeedf] py-20 sm:py-24"><div className="container-app"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-eyebrow uppercase text-ink-600">L’appel d’ailleurs</p><h2 className="mt-4 text-4xl sm:text-5xl">La France, à votre rythme.</h2></div><Link href="/appartements" className="inline-flex min-h-11 items-center gap-4 border-b border-ink-400 text-sm font-semibold">Toutes les destinations <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{cities.map(city => <Link key={city.city} href={`/appartements?city=${encodeURIComponent(city.city)}`} className="group overflow-hidden rounded-xl bg-sand-50"><div className="relative aspect-[16/10] overflow-hidden bg-sand-200">{city.imageUrl ? <Image src={city.imageUrl} alt={`Logement à ${city.city}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" /> : <MapPin className="absolute inset-0 m-auto h-10 w-10 text-ink-400" />}</div><div className="flex items-center justify-between gap-4 p-6"><div><h3 className="editorial-title text-2xl">{city.city}</h3><p className="mt-1 text-xs text-ink-600">{city.count} bien{city.count > 1 ? 's' : ''} à découvrir</p></div><ArrowUpRight className="h-5 w-5" /></div></Link>)}</div></div></section>

      <section className="container-app grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-24"><div><p className="text-eyebrow uppercase text-ink-500">L’esprit Agence.liaison</p><h2 className="mt-4 text-4xl sm:text-5xl">Un beau lieu.<br />Et l’esprit tranquille.</h2><p className="mt-6 max-w-md text-sm leading-7 text-ink-600">Derrière chaque projet, une équipe pour vous accompagner. Nous vous aidons à avancer simplement, de la première découverte à la remise des clés.</p><Link href="/comment-ca-marche" className="mt-7 inline-flex min-h-11 items-center gap-4 text-sm font-semibold">Découvrez notre approche <ArrowRight className="h-4 w-4" /></Link></div><div>{[{ icon: Search, title: 'Laissez-vous inspirer', text: 'Explorez les biens et affinez votre recherche selon vos envies.' }, { icon: CalendarCheck, title: 'Venez vous projeter', text: 'Demandez une visite et échangez avec notre équipe sur votre projet.' }, { icon: KeyRound, title: 'Écrivez la suite', text: 'Envoyez votre demande de réservation. Nous vous guidons dans les prochaines étapes.' }].map((step, i) => <div key={step.title} className="flex gap-5 border-b border-ink-200 py-6 first:pt-0"><span className="pt-1 text-xs text-ink-500">0{i + 1}</span><div className="flex-1"><h3 className="editorial-title text-2xl">{step.title}</h3><p className="mt-2 text-sm leading-6 text-ink-600">{step.text}</p></div><step.icon className="mt-1 h-5 w-5 shrink-0 text-ink-500" /></div>)}</div></section>

      <section className="bg-ink-950 py-16 text-white sm:py-20"><div className="container-app flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-sand-300"><ShieldCheck className="h-4 w-4" /> À vos côtés, tout simplement</p><h2 className="text-4xl sm:text-5xl">Votre prochaine histoire<br />commence ici.</h2></div><Link href="/contact" className="inline-flex min-h-14 items-center gap-6 rounded-lg bg-sand-200 px-7 py-4 text-sm font-semibold text-ink-950 transition-colors hover:bg-white">Parlons de votre projet <ArrowUpRight className="h-5 w-5" /></Link></div></section>
    </>
  );
}
