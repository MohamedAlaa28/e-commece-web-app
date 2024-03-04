"use client"
import { Box } from "@mui/material";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import ScrollToTop from "./components/scroll/ScrollToTop";;
import { useTheme } from '@mui/material/styles';

function Home() {
  const theme = useTheme();

  return (
    <>
      <Box
        bgcolor={
          // @ts-ignore
          theme.palette.bg?.main || 'defaultBackgroundColor'
        }
      >
        <Hero />
        <Main />
      </Box>
      <ScrollToTop />
    </>
  );
}

export default Home;
