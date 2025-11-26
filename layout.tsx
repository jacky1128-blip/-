import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moneytoring | 실시간 글로벌 마켓 인텔리전스",
  description:
    "Moneytoring은 실시간 시세, 뉴스, 커뮤니티 인사이트를 하나의 뷰에서 제공하는 리서치 워크스페이스입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-light`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
