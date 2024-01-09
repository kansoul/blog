import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ho Doan IT",
  metadataBase: new URL("https://www.hodoanit.com/"),
  description: "Basic to advanced programming knowledge",
  openGraph: {
    images: "/images/avatar.png",
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
