import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ZoomDisabler from "@/components/ZoomDisabler";
import ContextMenuDisabler from "@/components/ContextMenuDisabler";

// تعریف فونت IRANYekanX
const iranYekan = localFont({
  src: "../../public/fonts/IRANYekanX.woff",
  variable: "--font-iran-yekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ترون‌فای - پیشرفته‌ترین صرافی ارز دیجیتال",
  description: "با ترون‌فای، تجربه‌ای متفاوت از معاملات ارز دیجیتال داشته باشید. امنیت، سرعت و سهولت در یک پلتفرم پیشرفته.",
  keywords: "صرافی ارز دیجیتال, خرید ارز, فروش ارز, بیتکوین, اتریوم, ترون",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${iranYekan.variable} antialiased select-none`}
      >
        <ZoomDisabler />
        <ContextMenuDisabler />
        {children}
      </body>
    </html>
  );
}
