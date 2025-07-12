import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/navbar";
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
  title: "Jaedon Spurlock",
  description: "Jaedon's developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col mx-auto min-h-screen max-w-[700px] p-2 justify-center gap-10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <div className="pointer-events-none opacity-70 fixed top-0 right-0 z-[-2] h-[700px] w-[700px] bg-[radial-gradient(110%_60%_at_70%_20%,rgba(0,163,255,0.1)_0%,rgba(0,163,255,0)_70%)] dark:bg-[radial-gradient(110%_60%_at_70%_20%,rgba(0,163,255,0.15)_0%,rgba(0,163,255,0)_80%)]"></div>
          <div className="pointer-events-none opacity-70 fixed top-0 left-0 z-[-2] h-[700px] w-[700px] bg-[radial-gradient(110%_60%_at_20%_20%,rgba(0,163,255,0.1)_0%,rgba(0,163,255,0)_70%)] dark:bg-[radial-gradient(110%_60%_at_20%_20%,rgba(0,163,255,0.15)_0%,rgba(0,163,255,0)_80%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-20 h-screen bg-[linear-gradient(to_right,#6f6f6f2e_1px,transparent_1px),linear-gradient(to_bottom,#6f6f6f2e_1px,transparent_1px)] bg-[size:25px_25px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
