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
      url: "https://th.bing.com/th/id/R.10065b85bf94fe2c30af58ff87f241a3?rik=HK2mxCiayZ9wFA&pid=ImgRaw&r=0",
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
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image.url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.image.width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.image.height}
        />
        <meta property="og:image:alt" content={metadata.openGraph.image.alt} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
