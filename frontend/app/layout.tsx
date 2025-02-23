import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "../components/home/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chat-pdf",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <FloatingNav />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <main style={{ flex: 1 }}>
            {children}
            <div
              style={{ height: "500px", backgroundColor: "black" }}
            ></div>{" "}
            {/* Put the tech stack cards thing here*/}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
