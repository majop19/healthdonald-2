import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
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

export const metadata = {
  title: "HealthDonalds",
  description: "Start eating healthy burger !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "h-full"
        )}
      >
        <Toaster />
        <div className="m-auto flex h-screen max-w-md flex-col border-x">
          <Header />
          <main className="max-h-[calc(100%_-_100px)] flex-1 p-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
