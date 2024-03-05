"use client"
import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { ColorModeContext, useMode } from '../../public/mui/useMode';
import { ReactNode } from "react";
import { store } from "state/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import i18n from "i18n";
import CircularProgressWithLabel from './components/main/Loading';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, colorMode] = useMode();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    const languageChangeHandler = () => {
      setCurrentLanguage(i18n.resolvedLanguage);
    };

    // Listen for language changes
    i18n.on('languageChanged', languageChangeHandler);

    // Cleanup listener on component unmount
    return () => {
      i18n.off('languageChanged', languageChangeHandler);
    };
  }, []);

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Provider store={store}>
      <html>

        <head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="HTML, CSS, JavaScript, React.js, React, Next.js, Next, CSS, Material Ui, PostgreSQL, Frontend, Front-end, fullstack, full-stack" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="author" content="Mohamed Alaa" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/svg+xml" href="/logo.png" />
          <title>Mercado</title>
        </head>

        <body className={inter.className} suppressHydrationWarning={true}>
          {isClient ?
            <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <main className={currentLanguage === 'ar' ? 'ar' : 'en'}>
                  <Header />
                  <SearchBar />
                  <NavBar />
                  {children}
                  <Footer />
                </main>
              </ThemeProvider>
            </ColorModeContext.Provider>
            :
            <CircularProgressWithLabel />}
        </body>

      </html>
    </Provider>
  );
}