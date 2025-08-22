import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import StickyCTA from '@/components/layout/sticky-cta';

export const metadata: Metadata = {
  title: {
    default: 'AI Digital Marketing Courses in Mumbai | Adsmagnify Academy',
    template: '%s | Adsmagnify Academy'
  },
  description: 'Learn AI-powered digital marketing with live projects and shadow internships in South Bombay. Performance Marketing & SEO courses with only 4 students per batch.',
  keywords: 'digital marketing courses Mumbai, AI marketing training, performance marketing course, SEO training Mumbai, Google Ads course, Meta Ads training, Churchgate digital marketing',
  authors: [{ name: 'Adsmagnify Academy' }],
  creator: 'Adsmagnify Academy',
  publisher: 'Adsmagnify Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adsmagnify.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adsmagnify.vercel.app',
    siteName: 'Adsmagnify Academy',
    title: 'AI Digital Marketing Courses in Mumbai | Adsmagnify Academy',
    description: 'Learn AI-powered digital marketing with live projects and shadow internships in South Bombay. Performance Marketing & SEO courses with only 4 students per batch.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Adsmagnify Academy - AI Digital Marketing Courses Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Digital Marketing Courses in Mumbai | Adsmagnify Academy',
    description: 'Learn AI-powered digital marketing with live projects and shadow internships in South Bombay. Performance Marketing & SEO courses with only 4 students per batch.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="font-satoshi">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}