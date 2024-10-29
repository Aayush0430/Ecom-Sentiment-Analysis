"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../css/sidebar.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/helper/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head>
          <title>Ecom</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </head>
        <body className="min-h-screen min-w-screen">{children}</body>
      </html>
    </ThemeProvider>
  );
}
