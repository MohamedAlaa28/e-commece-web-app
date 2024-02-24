"use client"
import styles from "./page.module.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from '../../public/mui/useMode';
import Navbar from "./components/Header";
import SearchBar from "./components/searchBar/SearchBar";
import Header from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";

function Home() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={styles.main}>
          <Navbar />
          <SearchBar />
          <Header />

          <Box bgcolor={
            // @ts-ignore
            theme.palette.bg.main}>
            <Hero />
          </Box>

        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Home;
