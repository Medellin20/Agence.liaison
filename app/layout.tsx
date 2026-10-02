import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { getSiteUrl } from '@/lib/utils/site-url';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Agence.liaison — Votre projet immobilier en France',
    template: '%s | Agence.liaison',
  },
  description:
    'Un accompagnement immobilier dédié aux clients néerlandais pour louer ou acheter un appartement ou une maison partout en France.',
  keywords: [
    'immobilier France clients néerlandais',
    'achat immobilier France',
    'location appartement France',
    'maison avec jardin France',
    'accompagnement immobilier néerlandais',
    'Agence.liaison',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Agence.liaison',
    title: 'Agence.liaison — Votre projet immobilier en France',
    description:
      'Un accompagnement dédié aux clients néerlandais pour trouver un bien à louer ou à acheter partout en France.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence.liaison — Votre projet immobilier en France',
    description: 'Trouvez un appartement ou une maison à louer ou à acheter en France, avec un accompagnement dédié.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={openSans.variable}>
      <body className="font-sans">
        {children}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              fontFamily: 'var(--font-open-sans)',
            },
          }}
        />
      </body>
    </html>
  );
}
