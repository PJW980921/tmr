import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const bmEuljiro = localFont({
  src: './fonts/BMEuljiro10yearslaterOTF.woff',
  display: 'swap',
  variable: '--font-bm-euljiro',
});
const bmHannaAir = localFont({
  src: './fonts/BMHANNAAir_ttf.woff',
  display: 'swap',
  variable: '--font-bm-hanna_air',
});
const bmHannaPro = localFont({
  src: './fonts/BMHANNAPro.woff',
  display: 'swap',
  variable: '--font-bm-hanna_pro',
});
export const metadata: Metadata = {
  title: 'TMR - Today’s Menu Recommendation',
  description:
    '식사시간마다 어떤 음식을 먹어야 할지 고민이 될 때, TMR을 이용해보세요 !',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${bmEuljiro.variable} ${bmHannaAir.variable} ${bmHannaPro.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
