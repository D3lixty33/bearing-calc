import React from "react";
import Calculator from "./calculator/calculator-page";
import Sidebar from "../components/sidebar/sidebar";
import { Box, Container } from "@mui/material";
import Graph from "../components/graph-results/graph";


const Main = () => {
    return (
        <Container >
            <Box
                width={'100%'}
                height={'100%'}>
                <div className="flex flex-row h-full w-full">
                    <div className="fixed h-full"><Sidebar></Sidebar></div>
                    <div className="ml-64 w-full"><Calculator></Calculator></div>
                </div>
            </Box>
        </Container>
    )
}

export default Main;