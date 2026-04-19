import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const BASE_URL = "https://unit.moneystom7.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "단위 변환기 — MoneyStom7",
    template: "%s | MoneyStom7",
  },
  description: "길이·무게·온도·넓이·부피 단위를 빠르게 변환. 무료 온라인 단위 변환 계산기. Free online unit converter. Convert length, weight, temperature, area, volume and more instantly.",
  keywords: ["단위 변환기", "Unit Converter", "무료", "온라인", "계산기", "length converter", "weight converter", "temperature converter", "unit conversion"],
  authors: [{ name: "MoneyStom7" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "단위 변환기 — MoneyStom7",
    description: "길이·무게·온도·넓이·부피 단위를 빠르게 변환. 무료 온라인 단위 변환 계산기.",
    url: BASE_URL,
    siteName: "MoneyStom7",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "단위 변환기 — MoneyStom7",
    description: "길이·무게·온도·넓이·부피 단위를 빠르게 변환. 무료 온라인 단위 변환 계산기.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
