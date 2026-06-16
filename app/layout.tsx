import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { localBusinessSchema, serviceSchema } from "./schema";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Orbitron({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://voltx.electric"),
  title: { default: "VoltX Electric — Powering Tomorrow's World", template: "%s | VoltX Electric" },
  description:
    "Advanced electrical solutions engineered for the future. Smart home installation, commercial & industrial electrical, EV chargers, and 24/7 emergency electricians.",
  keywords: ["electrician", "electrical services", "emergency electrician", "smart home installation", "commercial electrician", "industrial electrical solutions"],
  openGraph: {
    title: "VoltX Electric — Powering Tomorrow's World",
    description: "Futuristic, reliable electrical solutions. 24/7 emergency support.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#050505", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML= __html: JSON.stringify(localBusinessSchema)  />
        <script type="application/ld+json" dangerouslySetInnerHTML= __html: JSON.stringify(serviceSchema)  />
      </head>
      <body className="font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
