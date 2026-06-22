import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Cursor from "./component/cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stackNotch = localFont({
  src: "../../public/Font/StackSansNotch-Regular.ttf",
  variable: "--font-notch",
  weight: "400",
  display: 'swap',
});

const stackHeadline = localFont({
  src: "../../public/Font/StackSansHeadline-Medium.ttf",
  variable: "--font-headline",
  weight: "500",
  display: 'swap',
});

const stackText = localFont({
  src: "../../public/Font/StackSansText-Regular.ttf",
  variable: "--font-text",
  weight: "400",
  display: 'swap',
});

export const metadata = {
  title: "MonoCAD",
  description: "Photography Studio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${stackNotch.variable} ${stackHeadline.variable} ${stackText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Cursor />
        {children}
      </body>
    </html>
  );
}