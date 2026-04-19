import Script from "next/script"
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "단위 변환기 — MoneyStom7",
  description: "길이·무게·온도·넓이·부피 단위를 빠르게 변환. 무료 온라인 단위 변환 계산기.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body></html>;
}
