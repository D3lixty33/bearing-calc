import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Main from './pages/main_layout';
import Settings from './components/settings/settingsPage';
import Calculator from './components/dashboard/calculator-page';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme'
import { BearingProvider } from './components/bearing-data/bearing-context';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
    {
        path: "/settings",
        element: <Settings></Settings>
    },
    {
        path: "calculator-page",
        element: <Main></Main>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <BearingProvider>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </ThemeProvider>
    </BearingProvider>
)