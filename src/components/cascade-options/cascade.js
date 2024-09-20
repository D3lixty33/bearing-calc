import React, { useState } from "react";
import { Box, Drawer, FormControl, InputLabel, MenuItem, Select, Typography, Button } from '@mui/material';
import { interp1 } from '../functions/interpolation'; // Import the interp1 function

const bearingOptions = {
    'Sfere radiali': ['Deep Groove', 'Angular Contact', 'Self-aligning'],
    'Sfere assiali': ['Cylindrical', 'Tapered', 'Spherical'],
    'Rulli radiali': ['Ball Thrust', 'Roller Thrust'],
    'Rulli assiali': ['Ball Thrust', 'Roller Thrust'],
};

const Cascade = () => {
    const [bearingType, setBearingType] = useState('');
    const [bearingSubtype, setBearingSubtype] = useState('');
    const [result, setResult] = useState(null);

    // Known data points for interpolation (example)
    const x_known = [0, 1, 2, 3, 4, 5];
    const y_known = [0, 1, 4, 9, 16, 25];

    const calculate = () => {
        const x_interp = 2.5; // Example point to interpolate
        const interpolatedValue = interp1(x_known, y_known, x_interp);
        setResult(interpolatedValue); // Set the result to display
    };

    const handleBearingChange = (event) => {
        setBearingType(event.target.value);
        setBearingSubtype(''); // Reset subtype on type change
    };

    const handleSubtypeChange = (event) => {
        setBearingSubtype(event.target.value);
    };

    return (
        <Drawer variant="permanent">
            <Box sx={{ width: 'auto', padding: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6">Bearing Selection</Typography>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Bearing Type</InputLabel>
                    <Select value={bearingType} onChange={handleBearingChange}>
                        {Object.keys(bearingOptions).map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {bearingType && (
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Bearing Subtype</InputLabel>
                        <Select value={bearingSubtype} onChange={handleSubtypeChange}>
                            {bearingOptions[bearingType].map((subtype) => (
                                <MenuItem key={subtype} value={subtype}>
                                    {subtype}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}

                {bearingSubtype && (
                    <Typography variant="caption" sx={{ marginTop: 2 }}>
                        You selected {bearingSubtype} under {bearingType}.
                    </Typography>
                )}

                <Button variant="contained" onClick={calculate} className="w-32">Calculate</Button>

                {result !== null && (
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        Interpolated Value: {result}
                    </Typography>
                )}
            </Box>
        </Drawer>
    );
}

export default Cascade;
