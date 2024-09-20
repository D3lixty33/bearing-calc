import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Main from './pages/main_layout';
import Cascade from './components/cascade-options/cascade';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </ThemeProvider>
)