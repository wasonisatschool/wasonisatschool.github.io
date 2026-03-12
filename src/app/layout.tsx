import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wason | 科技法律研究',
  description: '科技法律研究所研究生，專注於轉型正義、數位人權與科技法律。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#13131a',
              color: '#e8e6e1',
              border: '1px solid #1e1e2e',
            },
          }}
        />
      </body>
    </html>
  );
}
