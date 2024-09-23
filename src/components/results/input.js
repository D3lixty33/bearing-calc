import React from "react";
import { TextField } from "@mui/material";

const Result = () => {
    //if (!results) return null; // Handle case when results are not available

    return (
        <div className="w-96 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-lg">
            <TextField
                inputMode="number"
                placeholder="C0r"

                disabled
            />
            <TextField
                inputMode="number"
                placeholder="F0"

                disabled
            />
            <TextField
                inputMode="number"
                placeholder="f0"

                disabled
            />
            <TextField
                inputMode="number"
                placeholder="i"

                disabled
            />
            <TextField
                inputMode="number"
                placeholder="Z"

                disabled
            />
            <TextField
                inputMode="number"
                placeholder="dw"

                disabled
            />
            <TextField
                inputMode="number"
                placeholder="cosdAlfa"

                disabled
            />
        </div>
    );
};

export default Result;
