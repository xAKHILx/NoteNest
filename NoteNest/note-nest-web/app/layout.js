'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './navbar';

const theme = createTheme({
  palette: {
    primary: { main: '#6200ee' },
    secondary: { main: '#03dac6' },
    background: { default: '#f5f5f5' },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: 'Roboto, sans-serif' },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
