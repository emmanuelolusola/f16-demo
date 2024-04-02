import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Friends of 16",
  description:
    "16/16 is a serene space for intimate experiences designed to attract and serve creatives",
  image: "/SEOImage.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
