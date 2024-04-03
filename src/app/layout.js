import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Friends of 16</title>
        <meta name="title" content="Friends of 16" />
        <meta
          name="description"
          content="16/16 is a serene space for intimate experiences designed to attract and serve creatives"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://f16-demo.vercel.app/" />
        <meta property="og:title" content="Friends of 16" />
        <meta
          property="og:description"
          content="16/16 is a serene space for intimate experiences designed to attract and serve creatives"
        />
        <meta
          property="og:image"
          content="https://f16-demo.vercel.app/SEOImage.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://f16-demo.vercel.app/" />
        <meta property="twitter:title" content="Friends of 16" />
        <meta
          property="twitter:description"
          content="16/16 is a serene space for intimate experiences designed to attract and serve creatives"
        />
        <meta
          property="twitter:image"
          content="https://f16-demo.vercel.app/SEOImage.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
