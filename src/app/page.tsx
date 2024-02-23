"use client"
import styles from "./page.module.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from '../../public/mui/theme';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header/Header";

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
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Home;
