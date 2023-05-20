import { createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        black: {
          100: "#d5d8da",
          200: "#acb2b5",
          300: "#828b90",
          400: "#59656b",
          500: "#2f3e46",
          600: "#263238",
          700: "#1c252a",
          800: "#13191c",
          900: "#090c0e",
        },
        blue: {
          100: "#ccd6db",
          200: "#99acb6",
          300: "#668392",
          400: "#33596d",
          500: "#003049",
          600: "#00263a",
          700: "#001d2c",
          800: "#00131d",
          900: "#000a0f",
        },
        bgray: {
          100: "#d6d7d6",
          200: "#adaead",
          300: "#858685",
          400: "#5c5d5c",
          500: "#333533",
          600: "#292a29",
          700: "#1f201f",
          800: "#141514",
          900: "#0a0b0a",
        },
        primary: {
          100: "#cfd1d4",
          200: "#9ea4aa",
          300: "#6e767f",
          400: "#3d4955",
          500: "#0d1b2a",
          600: "#0a1622",
          700: "#081019",
          800: "#050b11",
          900: "#030508",
        },
        indigo: {
          100: "#d6dcd9",
          200: "#aeb8b3",
          300: "#85958d",
          400: "#5d7167",
          500: "#344e41",
          600: "#2a3e34",
          700: "#1f2f27",
          800: "#151f1a",
          900: "#0a100d",
        },
      }
    : {
        black: {
          100: "#090c0e",
          200: "#13191c",
          300: "#1c252a",
          400: "#263238",
          500: "#2f3e46",
          600: "#59656b",
          700: "#828b90",
          800: "#acb2b5",
          900: "#d5d8da",
        },
        blue: {
          100: "#000a0f",
          200: "#00131d",
          300: "#001d2c",
          400: "#00263a",
          500: "#003049",
          600: "#33596d",
          700: "#668392",
          800: "#99acb6",
          900: "#ccd6db",
        },
        gray: {
          100: "#0a0b0a",
          200: "#141514",
          300: "#1f201f",
          400: "#292a29",
          500: "#333533",
          600: "#5c5d5c",
          700: "#858685",
          800: "#adaead",
          900: "#d6d7d6",
        },
        primary: {
          100: "#030508",
          200: "#050b11",
          300: "#081019",
          400: "#0a1622",
          500: "#0d1b2a",
          600: "#3d4955",
          700: "#6e767f",
          800: "#9ea4aa",
          900: "#cfd1d4",
        },
        indigo: {
          100: "#0a100d",
          200: "#151f1a",
          300: "#1f2f27",
          400: "#2a3e34",
          500: "#344e41",
          600: "#5d7167",
          700: "#85958d",
          800: "#aeb8b3",
          900: "#d6dcd9",
        },
      }),
});

export const themeSetting = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette value (Dark mode)

            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.indigo[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.indigo[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
  return [theme, colorMode];
};
