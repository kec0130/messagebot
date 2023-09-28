import './globals.css';
import { Inter } from 'next/font/google';
import { getMetaData } from './sharedMetadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata = getMetaData({ url: '/' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-theme="light">
      <body className={inter.className}>
        <main className="flex min-h-[100dvh] flex-col max-w-lg mx-auto">{children}</main>
      </body>
    </html>
  );
}
