import type { Metadata } from 'next';
import { Bona_Nova, Raleway } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const bonaNova = Bona_Nova({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-bona',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Студентська рада ФПМІ',
    template: '%s · Студентська рада ФПМІ',
  },
  description:
    'Студентська рада факультету прикладної математики та інформатики ЛНУ імені Івана Франка.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${bonaNova.variable} ${raleway.variable}`}>
      <body>
        <a href="#content" className="skip">
          Перейти до змісту
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}