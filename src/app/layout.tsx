import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "MANGA CREATOR AI | Crea historias y mangas con IA",
  description:
    "Genera tu propio manga en segundos: elige el género, crea una historia original y obtén una base lista para ilustrar o continuar capítulo a capítulo con IA.",
  metadataBase: new URL("https://manga-creator-zeta.vercel.app"),
  keywords: [
    "Manga Creator AI",
    "manga con IA",
    "crear manga",
    "generador de historias",
    "generador de guiones",
    "story generator",
    "anime",
    "guion manga",
    "capítulos manga",
    "creación de personajes",
    "worldbuilding",
    "inteligencia artificial",
    "Next.js",
    "Tailwind CSS",
  ],

  applicationName: "MANGA CREATOR AI",

  openGraph: {
    title: "MANGA CREATOR AI | Crea mangas e historias con IA",
    description:
      "Elige un género y genera una historia de manga original en segundos. Ideal para creadores, guionistas y fans del anime.",
    url: "https://manga-creator-zeta.vercel.app",
    siteName: "MANGA CREATOR AI",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/home-web.png",
        width: 1200,
        height: 630,
        alt: "MANGA CREATOR AI - Vista previa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MANGA CREATOR AI | Crea mangas e historias con IA",
    description:
      "Genera historias originales de manga eligiendo género y estilo. En segundos, listo para expandir.",
    images: ["/home-web.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
