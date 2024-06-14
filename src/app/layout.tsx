import { ThemeProvider } from "@/components/theme-provider";
import { APP_URL } from "@/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ho Doan IT - Basic to advanced programming knowledge",
  metadataBase: new URL(APP_URL as string),
  robots: {
    index: true,
    follow: true,
  },
  description:
    "This is a website created by Ho Doan, a website that shares useful information about programming and life.",
  openGraph: {
    siteName: "Ho Doan IT",
    images: "/images/avatar.png",
    title: "Ho Doan IT - Basic to advanced programming knowledge",
    type: "website",
    url: new URL(APP_URL as string),
    description:
      "This is a website created by Ho Doan, a website that shares useful information about programming and life.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-[#F9FBFF] dark:bg-[#0F172A] pb-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
