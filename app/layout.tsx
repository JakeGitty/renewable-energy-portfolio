import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter from next/font/google
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Define the Inter font

export const metadata: Metadata = {
  title: "Clean and Green Energy Portfolio",
  description: "A portfolio showcasing clean and green energy projects.",
  icons: { // Add icons metadata
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
