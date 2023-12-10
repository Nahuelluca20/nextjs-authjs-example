import type {Metadata} from "next";

import "./globals.css";
import {Inter as FontSans} from "next/font/google"


import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "NextAuth.js v5 Example",
  description:
    "This is an example site about comments to demonstrate how to use NextAuth.js v5 for authentication by SiderDev",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen  bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
