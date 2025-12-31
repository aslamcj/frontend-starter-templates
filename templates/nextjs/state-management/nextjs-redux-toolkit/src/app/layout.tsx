import type { Metadata } from 'next';
import { StoreProvider } from '@/store/StoreProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js + Redux Toolkit',
  description: 'Next.js 15 with Redux Toolkit state management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
