import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReduxStoreProvider from "./ReduxStoreProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASTUDIO",
  description: "ASTUDIO Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxStoreProvider>
        <body className={`${roboto.variable} antialiased`}>{children}</body>
      </ReduxStoreProvider>
    </html>
  );
}
