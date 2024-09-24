import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Main from './pages/main_layout';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme'
import { BearingProvider } from './components/bearing-data/bearing-context';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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