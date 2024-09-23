import React from "react";
import { 
    TextField,
    Table,
    TableContainer

 } from "@mui/material";
import { Virtuoso } from "react-virtuoso";

const Result = (Cr0) => {

    return (
        <div className="w-96 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-lg">
            <TextField 
                inputMode="number"
                placeholder="Cr0"
            ></TextField>
            <TextField 
                inputMode="number"
                placeholder="Cr"
                margin="normal"
            ></TextField>
        </div>
    )
}

export default Result;