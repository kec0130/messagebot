import './globals.css';
import { Inter } from 'next/font/google';
import { getMetaData } from './sharedMetadata';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = getMetaData({ url: '/' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-theme="light">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <main className="flex min-h-[100dvh] flex-col max-w-lg mx-auto">{children}</main>
      </body>
    </html>
  );
}
