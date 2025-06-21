import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

// Metadata interface to describe all the metadata fields that can be set in a document.
export const metadata: Metadata = {
  title: "Prostore",
  description: "A modern store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // React hydration warning due to a mismatch between server-rendered and client-rendered HTML fix = suppressHydrationWarning.
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1 wrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
