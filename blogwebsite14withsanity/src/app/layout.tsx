import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";
import Footer from "../components/Footer";
import Container from "../components/Container";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gloss&Grit: Discover the Latest in Health and Beauty",
  description: "Welcome to our health and beauty blog blog, where we share our insights, opinions, and best practices on health and beauty related content. Here you will find articles on various topics, such as hair care , skin care, top trends, fashion and more. Whether you will find something interesting and valuable on our blog. Check out our latest posts and subscribe to our newsletter to stay updated.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-red-200 dark:bg-black `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


// push kro code koo.han..kro.. mai to bimaar hn...yeh toh pull bol rha haii grabar hogye gi
//  naya babnah prrega//q...code konsa hai iskp repo kholo 