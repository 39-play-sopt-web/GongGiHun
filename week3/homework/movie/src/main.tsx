import { StrictMode } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import App from './App.tsx'
import { globalStyle } from "./styles/GlobalStyle.ts";
import { theme } from "./styles/theme.ts";
import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme = {theme}>
            <Global styles={globalStyle} />
            <App />
        </ThemeProvider>
    </StrictMode>
)