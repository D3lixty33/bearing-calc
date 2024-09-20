import React, { useState, useEffect } from 'react';
import { Box, Drawer, FormControl, InputLabel, MenuItem, Select, Typography, TextField, InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faRulerHorizontal, faRulerVertical, faAngleDoubleRight, faCrown } from '@fortawesome/free-solid-svg-icons';
import bearingOptionsData from './bearingOptions.json'; // Adjust path if necessary

const BearingData = () => {
    const [bearingOptions, setBearingOptions] = useState([]);
    const [bearingType, setBearingType] = useState('');

    useEffect(() => {
        setBearingOptions(bearingOptionsData);
    }, []);

    const handleBearingChange = (event) => {
        setBearingType(event.target.value);
    };

    // Determine placeholders based on bearing type
    const getPlaceholders = () => {
        if (bearingType.startsWith('Rulli')) {
            return {
                nominalDiameter: "Ulteriori dimensioni Rulli:",
                innerDiameter: "Diametro interno Rulli:",
                outerDiameter: "Diametro esterno Rulli:",
                contactAngle: "Angolo di contatto Rulli:",
                numberOfCrowns: "Numero corone di Rulli:",
                crownsPerSphere: "Numero corone per sfera Rulli:"
            };
        } else if (bearingType.startsWith('Sfere')) {
            return {
                nominalDiameter: "Diametro nominale sfere:",
                innerDiameter: "Diametro interno sfere:",
                outerDiameter: "Diametro esterno sfere:",
                contactAngle: "Angolo di contatto sfere:",
                numberOfCrowns: "Numero corone di sfere:",
                crownsPerSphere: "Numero corone per sfera sfere:"
            };
        }
        return {};
    };

    const placeholders = getPlaceholders();

    return (
        <Drawer variant="permanent">
            <Box sx={{ width: 'auto', padding: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6">Bearing Data</Typography>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Bearing Type</InputLabel>
                    <Select value={bearingType} onChange={handleBearingChange}>
                        {bearingOptions.map((option, index) => (
                            <MenuItem key={index} value={option.type}>
                                {option.type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {bearingType && (
                    <>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                type="number"
                                placeholder={placeholders.nominalDiameter}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faCircle} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <TextField
                                type="number"
                                placeholder={placeholders.innerDiameter}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faRulerHorizontal} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <TextField
                                type="number"
                                placeholder={placeholders.outerDiameter}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faRulerVertical} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <TextField
                                type="number"
                                placeholder={placeholders.contactAngle}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <TextField
                                type="number"
                                placeholder={placeholders.numberOfCrowns}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faCrown} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <TextField
                                type="number"
                                placeholder={placeholders.crownsPerSphere}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faCrown} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>

                        {/* Additional fields for 'Rulli' types */}
                        {bearingType === 'Rulli radiali' || bearingType === 'Rulli assiali' ? (
                            <>
                                <FormControl fullWidth margin="normal">
                                    <TextField
                                        type="number"
                                        placeholder="Ulteriori dimensioni Rulli:"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FontAwesomeIcon icon={faRulerHorizontal} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </FormControl>

                                <FormControl fullWidth margin="normal">
                                    <TextField
                                        type="number"
                                        placeholder="Capacità di carico Rulli:"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FontAwesomeIcon icon={faCrown} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </FormControl>
                            </>
                        ) : null}
                    </>
                )}

                {!bearingType && (
                    <Typography variant="body2" color="textSecondary">
                        Please select a bearing type to continue.
                    </Typography>
                )}
            </Box>
        </Drawer>
    );
};

export default BearingData;
