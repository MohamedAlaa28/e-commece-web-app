"use client"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from '../../public/mui/useMode';
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Layout from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../i18n';

function Home() {
  const [theme, colorMode] = useMode();
  const [isHydrated, setIsHydrated] = useState(false);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    setIsHydrated(true);
    i18n.changeLanguage("eng");
  }, [i18n]);

  if (!isHydrated) {
    return null;
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={i18n.language === "ar" ? "ar" : "en"}>
          <Layout />

          <Box bgcolor={
            // @ts-ignore
            theme.palette.bg.main}>
            <Hero />
            <Main />
          </Box>

          <Footer />

          <ScrollToTop />
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

};

export default Home;
