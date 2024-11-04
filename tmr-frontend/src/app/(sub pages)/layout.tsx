import { ReactNode } from 'react';
import Providers from './providers';

interface SubPagesLayoutProps {
  children: ReactNode;
}

export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  return (
    <Providers>
      <main className="flex min-h-screen flex-col items-center justify-center px-16">
        {children}
      </main>
    </Providers>
  );
}
