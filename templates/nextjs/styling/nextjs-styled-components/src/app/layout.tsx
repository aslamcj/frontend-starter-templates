import type { Metadata } from 'next';
import { StyledComponentsRegistry } from '@/lib/registry';

export const metadata: Metadata = {
  title: 'Next.js + Styled Components',
  description: 'Next.js 15 with Styled Components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
