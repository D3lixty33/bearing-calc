import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from "@mui/material";
import Logo from '../../assets/side-logo/Logo-blu.jpg'; // Ensure correct path
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import { Link as MuiLink } from '@mui/material'; // Import Link from Material-UI
import Cascade from "../cascade-options/cascade";

const Sidebar = () => {
    return (
        <div className="flex flex-col w-72 h-full text-base justify-center shadow-xl bg-white">
            <div>
                <div className="flex items-center mb-4">
                    <img src={Logo} alt="Logo" />
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
                        <MuiLink component={RouterLink} to="/settings" style={{ textDecoration: 'none' }}>
                            <Button>Impostazioni</Button>
                        </MuiLink>
                    </div>
                    <div className="flex text-end w-6/12 justify-center">
                        <p><i className="fas fa-solid fa-gear"></i></p>
                    </div>
                </div>
                <div className="flex items-center mb-4 ml-4">
                    <div className="flex text-start w-6/12 justify-center">
                        <MuiLink component={RouterLink} to="/calculator-page" style={{ textDecoration: 'none' }}>
                            <Button>Calcolatore</Button>
                        </MuiLink>
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
