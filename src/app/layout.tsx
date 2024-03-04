"use client"
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
import { useTranslation } from "react-i18next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, colorMode] = useMode();
  const { i18n } = useTranslation();

  return (
    <Provider store={store}>
      <html lang="en">

        <head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="HTML, CSS, JavaScript, React.js, React, Next.js, Next, CSS, Material Ui, PostgreSQL, Frontend, Front-end ,fullstack ,full-stack" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="author" content="Mohamed Alaa" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/svg+xml" href="/logo.png" />
          <title>Mercado</title>
        </head>

        <body className={inter.className} suppressHydrationWarning={true}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <main className={i18n.language === 'ar' ? 'ar' : 'en'}>
                <Header />
                <SearchBar />
                <NavBar />
                {children}
                <Footer />
              </main>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </body>

      </html>
    </Provider>
  );
}
