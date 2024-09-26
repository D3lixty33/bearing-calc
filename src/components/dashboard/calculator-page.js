import React, { useState } from "react";
import { Box, InputBase, Button } from "@mui/material";
import MenuUser from "./menu-user"; // Custom component you want to render
import BearingData from "../bearing-data/bearingData";
import Result from "../results/input";

const Calculator = () => {
    // State to manage the visibility of the MenuUser component
    const [open, setOpen] = useState(false);

    // State to manage calculation results
    const [calculationResults, setCalculationResults] = useState(null);

    // Toggle visibility of MenuUser component
    const handleClick = () => {
        setOpen(prevOpen => !prevOpen);
    };

    // Function to handle results from BearingData
    const handleResultsCalculated = (results) => {
        setCalculationResults(results);
    };
    return (
        
            <Box
                marginLeft={'60px'}
                width={'100%'}
                padding={'20px'}
                height={'100%'}
            >
                <div className="border-slate-300 border w-11/12 h-10 flex-row flex p-4 items-center bg-white rounded-xl">
                    <button className="rounded-lg items-center flex hover:">
                        <i className="fas fa-solid fa-magnifying-glass mr-4"></i>
                    </button>
                    <InputBase placeholder="Search..." fullWidth />
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

                <div className="w-80 mt-10 flex flex-row">
                    {/* Pass the handleResultsCalculated function as a prop */}
                    <BearingData onResultsCalculated={handleResultsCalculated} />
                    <div className="h-80 ml-16">
                        {/* Pass the calculation results to Result component */}
                        <Result results={calculationResults} />
                    </div>
                </div>
            </Box>
        
    );
};

export default Calculator;
