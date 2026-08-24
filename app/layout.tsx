import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { site } from "@/lib/projects";
import "lenis/dist/lenis.css";
import "./globals.css";

const sans = Jost({
  variable: "--font-sans",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const display = Bodoni_Moda({
  variable: "--font-display",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.first} ${site.last} - Stylist & Creative Director`;
const description =
  "Styling and creative direction for editorial and campaign.";

export const metadata: Metadata = {
  metadataBase: new URL("https://saskiajung.com"),
  title,
  description,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: { type: "website", title, description, url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  themeColor: site.backgroundColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} is-loading`}
    >
      <head>
        <noscript>
          <style>{`.is-loading .c-home__hero-frame{transform:translate(-50%,-50%) translateY(var(--hero-t1,0px)) scale(1)}.is-loading .c-home__grow{max-width:none}.is-loading .c-navbar,.is-loading .c-navbar__now{opacity:1}.is-loading .c-home__section.is-active .c-home__image{clip-path:inset(0 0 0 0)}.is-loading .c-home__section.is-active .c-home__image img{transform:none}`}</style>
        </noscript>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
