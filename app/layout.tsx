import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

// Metadata interface to describe all the metadata fields that can be set in a document.
export const metadata: Metadata = {
  // we are using a template to set the title. So if we set a title for an individual page, it will be prepended with the APP_NAME and a pipe character.
  title: { template: `%s| ${APP_NAME}`, default: APP_NAME },
  description: APP_DESCRIPTION,
  //metadataBase is used to set the base URL for the metadata.
  metadataBase: new URL(SERVER_URL),
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
