import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from "@mui/material";
import Logo from '../../assets/side-logo/Logo-blu.jpg'; // Ensure correct path
import { Link } from "@mui/material";
import Cascade from "../cascade-options/cascade";

const cascade = <Cascade></Cascade>


const Sidebar = () => {
    return (
        <div className="flex flex-col w-72 h-full text-base justify-center shadow-xl bg-white"> {/* Use shadow utility */}
            <div>
                <div className="flex items-center mb-4 ">
                    <img src={Logo} alt="Error 404 Not Found" />
                </div>                
                <div className="flex items-center mb-4 ml-4">
                    <div className="flex text-start w-6/12 justify-center">
                        <Button>Cronologia</Button>
                    </div>
                    <div className="flex text-end w-6/12 justify-center">
                        <p><i className="fas fa-solid fa-timeline"></i></p>
                    </div>
                </div>
                <div className="flex items-center mb-4 ml-4">
                    <div className="flex text-start w-6/12 justify-center">
                        <Button>Account</Button>
                    </div>
                    <div className="flex text-end w-6/12 justify-center">
                        <p><i className="fas fa-regular fa-user"></i></p>
                    </div>
                </div>
                <div className="flex items-center mb-4 ml-4">
                    <div className="flex text-start w-6/12 justify-center">
                        <Button>Impostazioni</Button>
                    </div>
                    <div className="flex text-end w-6/12 justify-center">
                        <p><i className="fas fa-solid fa-gear"></i></p>
                    </div>
                </div>
                <div className="flex items-center mb-4 ml-4">
                    <div className="flex text-start w-6/12 justify-center">
                        <Button>Calcolatore</Button>
                    </div>
                    <div className="flex text-end w-6/12 justify-center">
                        <p><i className="fas fa-solid fa-calculator"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
