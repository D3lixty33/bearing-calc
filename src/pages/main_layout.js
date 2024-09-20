import React from "react";
import Calculator from "../components/dashboard/calculator-page";
import Sidebar from "../components/sidebar/sidebar";
import Cascade from "../components/cascade-options/cascade";

const Main = () => {
    return (
        <div className="bg-slate-200 flex flex-row h-full max-h-screen">
            <Sidebar></Sidebar>
            <Calculator></Calculator>

        </div>
    )
}

export default Main;