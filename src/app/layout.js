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
  twitter: {
    type: "card",
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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.image.url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.image.width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.image.height}
        />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content={metadata.twitter.type} />
        <meta name="twitter:url" content={metadata.twitter.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.twitter.image.url} />
        <meta
          name="twitter:image:width"
          content={metadata.twitter.image.width}
        />
        <meta
          name="twitter:image:height"
          content={metadata.twitter.image.height}
        />
        <meta name="twitter:site" content={metadata.twitter.site_name} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
