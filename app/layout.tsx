import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

// const bricolage = Bricolage_Grotesque({
//   variable: "--font-bricolage",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learnova",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
