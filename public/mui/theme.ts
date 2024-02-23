"use client";
import { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, Theme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

interface ColorModeContextType {
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

export const useMode = (): [Theme, ColorModeContextType] => {
  // const [mode, setMode] = useState(
  //   (localStorage.getItem("mode") as "light" | "dark") ?? "light"
  // );

  // Initialize state without localStorage
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Use useEffect to update the state with localStorage value after component mounts
  useEffect(() => {
    const storedMode = localStorage.getItem("mode") as "light" | "dark";
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("mode", newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                text: {
                  primary: "#2B3445",
                },
                neutral: {
                  main: "#64748B",
                },
                favColor: {
                  main: grey[300],
                },
                header: {
                  main: "#F6F9FC",
                },
              }
            : {
                neutral: {
                  main: "#64748B",
                },
                favColor: {
                  main: grey[800],
                },
                text: {
                  primary: "#fff",
                },
                header: {
                  main: "#252b32",
                },
              }),
        },
      }),
    [mode]
  );

  return [theme, colorMode];
};

export { ColorModeContext };
