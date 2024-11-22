import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Montre connectée FitLife Pro 5+",
  description: "Boostez votre quotidien avec la FitLife Pro 5+ ! Une montre connectée ultra-polyvalente dotée d’un écran AMOLED HD, d’un suivi précis de vos activités sportives, de vos données de santé et d’une autonomie record de 10 jours.",
  openGraph: {
    title: "Montre connectée FitLife Pro 5+",
    description: "Boostez votre quotidien avec la FitLife Pro 5+ ! Une montre connectée ultra-polyvalente dotée d’un écran AMOLED HD, d’un suivi précis de vos activités sportives, de vos données de santé et d’une autonomie record de 10 jours.",
    images: [
      {
        url: "https://card-competition.vercel.app/Prevview_website.png",
        alt: "Montre connectée FitLife Pro 5+",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
