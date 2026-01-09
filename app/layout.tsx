import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'G Putnam Music',
  description: 'The One Stop Song Shop',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
