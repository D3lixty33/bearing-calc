import React, { useState } from "react";
import { Box, InputBase, Button } from "@mui/material";
import Cascade from "../cascade-options/cascade";
import MenuUser from "./menu-user"; // Custom component you want to render

const Calculator = () => {
    // State to manage the visibility of the MenuUser component
    const [open, setOpen] = useState(false);

    // Toggle visibility of MenuUser component
    const handleClick = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <div className="w-9/12">
            <Box
                marginLeft={'20px'}
                marginTop={'40px'}
                width={'100%'}
                padding={'20px'}
                height={'100%'}
            >
                <div
                    className="border-slate-300 border w-full h-10 flex-row flex p-4 items-center bg-white rounded-xl"
                >
                    <button
                        className="rounded-lg items-center flex hover:"
                    >
                        <i className="fas fa-solid fa-magnifying-glass mr-4"></i>
                    </button>
                    <InputBase
                        placeholder="Search..."
                        fullWidth
                    />
                    <Button className="user-info" onClick={handleClick}>
                        <i className="fas fa-regular fa-white fa-user"></i>
                    </Button>
                    <div className="absolute ml-100 mt-14">
                        {open && <i className="fa-solid fa-caret-up fa-userWhite"></i>}
                    </div>
                </div>
                <div className="w-full mt-2">
                    <div className="absolute ml-90">
                        {open && <MenuUser />} {/* Conditionally render MenuUser */}
                    </div>
                </div>
                <div className="w-80 mt-10">
                    <Cascade />
                </div>

            </Box>
        </div>
    );
};

export default Calculator;
