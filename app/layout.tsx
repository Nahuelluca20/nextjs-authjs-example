import type {Metadata} from "next";

import "./globals.css";
import {Inter as FontSans} from "next/font/google";
import {getServerSession} from "next-auth/next";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

import Provider from "./context/client-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={cn("min-h-screen  bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="light"
        >
          <Provider session={session}>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
