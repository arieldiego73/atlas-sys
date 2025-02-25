import type { Metadata } from "next";
import "./globals.css";
import { Afacad } from "next/font/google"; // Import the Google Font
import { NavBar } from "./components/NavBar";
import { AtlasFooter } from "./components/Footer";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AtlasSys",
  description:
    "An information management system for all the public information of all the countries in the world.",
  authors: [{ name: "Ariel Diego", url: "https://nextjs.org" }], // TODO: Change the URL
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.className} antialiased dark`}>
        <main className="container min-h-screen mx-auto flex flex-col justify-between">
          <header>
            <NavBar />
          </header>
          <section>{children}</section>
          <footer>
            <AtlasFooter />
          </footer>
        </main>
      </body>
    </html>
  );
}
