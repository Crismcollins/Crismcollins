'use client'
import { isDarkMode } from "@/helpers/themes";
import "./globals.css";
import Providers from "./providers/Providers";
import useThemeStore from "./stores/theme-store";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [mounted, setMounted] = useState<boolean>(false);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  
  useEffect(() => {
    const darkModeOn: boolean = isDarkMode();
    const themeClass = darkModeOn ? 'dark' : 'light';
    setTheme(themeClass);
    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return <html>
            <body></body>
          </html>
  }

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
