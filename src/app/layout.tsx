'use client'
import "./globals.css";
import Providers from "./providers/Providers";
import useThemeStore from "./stores/theme-store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useThemeStore((state) => state.theme);
  
  return (
    <html className={`${theme}`} lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className="mx-6 my-12">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
