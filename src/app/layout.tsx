import "~/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/ui/theme-provider";
import Footer from "~/components/Footer";
import { Geist, Geist_Mono, Figtree, Paprika } from "next/font/google";
import { HOME_OG_IMAGE_URL } from "~/lib/constants";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const paprika = Paprika({
  variable: "--font-paprika",
  subsets: ["latin"],
  weight: "400",
});

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: "A Starboy's Blog.",
  description: "A Starboy's Blog.",
  metadataBase: new URL("https://blog.skywalkersam.dev/"),
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${paprika.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="via-primary bg-gradient-to-b from-transparent to-transparent">
            {children}
          </main>

          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
