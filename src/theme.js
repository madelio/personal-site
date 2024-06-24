import { createTheme } from '@mui/material/styles';

const lightShade = '#FAF9FA' // white
const lightAccent = '#D3B29A';
const mainBrand = '#d19c92';
const darkAccent = '#978DA1';
const darkShades = '#965341';

const lightPalette = {
  palette: {
    primary: {
      main: mainBrand,
    //   light: lightAccent,
    //   dark: darkShades,
    },
    secondary: {
        main: darkAccent,
    },
    // background: {
    //     main: lightShade
    // }
  },
}

const darkPalette = {
  palette: {
    secondary: {
        main: lightShade,
    },
    background: {
        main: darkShades
    }
  },
}

// export const getPalette = (theme) => theme === 'dark' ? darkPalette : lightPalette;
export const theme = createTheme(lightPalette);
