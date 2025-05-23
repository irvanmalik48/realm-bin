import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/container";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "bin.",
    template: "%s | bin.",
  },
  description: "Yet another pastebin clone.",
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://paste.irvanma.eu.org"
      : "http://localhost:3000"
  ),
  openGraph: {
    title: {
      default: "bin.",
      template: "%s | bin.",
    },
    description: "Yet another pastebin clone.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@irvanmalik48",
    creator: "@irvanmalik48",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div className="flex flex-col min-h-screen w-full">
              <Navbar />
              <Container>{children}</Container>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
