import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "../../components/sidebar/sidebar";

const Settings = () => {
    return (
        <Container>
            <Box
                width={'100%'}
                height={'100%'}>
                <div className="flex flex-row h-full w-full">
                    <div className="fixed h-full"><Sidebar></Sidebar></div>
                </div>
            </Box>
        </Container>

    )
}

export default Settings;