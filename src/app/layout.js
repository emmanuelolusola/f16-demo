import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// export const metadata = {
//   title: "Friends of 16",
//   description:
//     "16/16 is a serene space for intimate experiences designed to attract and serve creatives",
//   openGraph: {
//     images: "https://f16-demo.vercel.app/SEOImage.png",
//     url: "https://f16-demo.vercel.app/",
//   },
//   twitter: {
//     images: "https://f16-demo.vercel.app/SEOImage.png",
//     url: "https://f16-demo.vercel.app/",
//   },
// };
