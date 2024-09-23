import React from "react";
import Calculator from "../components/dashboard/calculator-page";
import Sidebar from "../components/sidebar/sidebar";
import { Box, Container } from "@mui/material";


const Main = () => {
    return (
        <Container width= {'1280px'} >
            <Box
                width={'100%'}
                height={'100%'}>
                <div className="bg-slate-200 flex flex-row h-full w-full">
                    <Sidebar></Sidebar>
                    <Calculator></Calculator>
                </div>
            </Box>
        </Container>
    )
}

export default Main;