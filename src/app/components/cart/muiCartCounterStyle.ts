import { styled } from "@mui/material/styles";

export const crimson = {
  "100": "rgb(255, 94, 130)",
  "200": "rgb(255, 88, 121)",
  "300": "rgb(255, 81, 113)",
  "400": "rgb(252, 75, 104)",
  "500": "rgb(210, 63, 87)",
  "600": "rgb(168, 50, 69)",
  "700": "rgb(147, 44, 60)",
  "800": "rgb(126, 37, 52)"
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export const StyledInputRoot = styled('div')(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `,
);

export const StyledInput = styled('input')(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    cursor: context-menu;
    border-radius: 3px;
    margin: 0 5px;
    padding: 5px 3px;
    outline: 0;
    min-width: 0;
    width: 2rem;
    text-align: center;
  `,
);

export const StyledButton = styled('button')(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    width: 15px;
    height: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;

    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? crimson[700] : crimson[500]};
      border-color: ${theme.palette.mode === 'dark' ? crimson[500] : crimson[400]};
      color: ${grey[50]};
    }

    &:focus-visible {
      outline: 0;
    }

    &.increment {
      order: 1;
    }
    .MuiSvgIcon-root{
        font-size: 0.8rem;
    }
  `,
);