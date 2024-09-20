import React, { useState } from "react";
import { Box, Drawer, FormControl, InputLabel, MenuItem, Select, Typography, Button } from '@mui/material';
import { create, all } from 'mathjs';

const math = create(all);

const bearingOptions = {
    'Sfere radiali': ['Deep Groove', 'Angular Contact', 'Self-aligning'],
    'Sfere assiali': ['Cylindrical', 'Tapered', 'Spherical'],
    'Rulli radiali': ['Ball Thrust', 'Roller Thrust'],
    'Rulli assiali': ['Ball Thrust', 'Roller Thrust'],
};

const Cascade = () => {
    const [bearingType, setBearingType] = useState('');
    const [bearingSubtype, setBearingSubtype] = useState('');
    const [result, setResult] = useState(null); // State to store the result

    const calculate = () => {
        const expression = '2 * (3 + 4)';
        const result = math.evaluate(expression); // Evaluate any math expression
        setResult(result); // Update the result state
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

                <div style={{ marginTop: '20px' }}>
                    <Button variant="outlined" onClick={calculate}>Calculate</Button>
                </div>

                {result !== null && (
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        Calculation result: {result}
                    </Typography>
                )}
            </Box>
        </Drawer>
    )
};

export default Cascade;
