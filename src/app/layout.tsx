import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoDoanIT",
  description: "Basic to advanced programming knowledge",
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
          <main className="bg-[#F9FBFF] dark:bg-[#0F172A]">
            <Header />
            <div className="container flex flex-row color-home">
              <div className="w-0 xl:w-1/12"></div>
              <div className="w-full xl:w-10/12">{children}</div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
