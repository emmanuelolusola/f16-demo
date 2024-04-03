import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Friends of 16",
  description:
    "16/16 is a serene space for intimate experiences designed to attract and serve creatives",
  openGraph: {
    type: "website",
    url: "https://f16-next-demo.vercel.app",
    image: {
      url: "https://f16-next-demo.vercel.app/SEOImage.png",
      width: 1200,
      height: 628,
      alt: "logo",
    },
    site_name: "Friends of 16",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://f16-next-demo.vercel.app/SEOImage.png"
        />
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
