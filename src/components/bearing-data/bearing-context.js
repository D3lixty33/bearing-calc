// BearingContext.js
import React, { createContext, useContext, useState } from 'react';

const BearingContext = createContext();

export const BearingProvider = ({ children }) => {
    const [results, setResults] = useState(null);

    return (
        <BearingContext.Provider value={{ results, setResults }}>
            {children}
        </BearingContext.Provider>
    );
};

export const useBearing = () => {
    return useContext(BearingContext);
};
