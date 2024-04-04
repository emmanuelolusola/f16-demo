"use client";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
