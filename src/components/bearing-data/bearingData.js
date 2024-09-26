import React, { useState, useEffect } from 'react';
import { Box, Drawer, FormControl, InputLabel, MenuItem, Select, Typography, TextField, InputAdornment, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faRulerHorizontal, faRulerVertical, faAngleDoubleRight, faCrown } from '@fortawesome/free-solid-svg-icons';
import bearingOptionsData from './bearingOptions.json';
import { sfereRadiali } from '../functions/sfereRadiali';
import { sfereAssiali } from '../functions/sfereAssiali';
import { rulliRadiali } from '../functions/rulliRadiali';
// import { useBearing } from './bearing-context';
// import { exportToJsonFile } from '../functions/utils';   Import the export function

const BearingData = ({ onResultsCalculated }) => {
    const [bearingOptions, setBearingOptions] = useState([]);
    const [bearingType, setBearingType] = useState('');

    // State variables for inputs
    const [nominalDiameter, setNominalDiameter] = useState('');
    const [innerDiameter, setInnerDiameter] = useState('');
    const [outerDiameter, setOuterDiameter] = useState('');
    const [contactAngle, setContactAngle] = useState('');
    const [numberOfCrowns, setNumberOfCrowns] = useState('');
    const [crownsPerSphere, setCrownsPerSphere] = useState('');
    const [numberOfRollersPerCrown, setNumberOfRollersPerCrown] = useState('');
    const [rollerType, setRollerType] = useState('');

    // State to hold calculation results
    const [calculationResults, setCalculationResults] = useState(null);

    useEffect(() => {
        setBearingOptions(bearingOptionsData);
    }, []);

    const handleBearingChange = (event) => {
        setBearingType(event.target.value);
    };

    const handleRollerType = (event) => {
        setRollerType(event.target.value)
    }

    const getPlaceholders = () => {
        if (bearingType.startsWith('Rulli')) {
            return {
                nominalDiameter: "Diametro nominale rulli:",
                innerDiameter: "Lunghezza rullino:",
                outerDiameter: "Diametro interno:",
                contactAngle: "Diametro esterno:",
                numberOfCrowns: "Angolo di contatto:",
                crownsPerSphere: "Numero corone di rulli:"
            };
        } else if (bearingType.startsWith('Sfere')) {
            return {
                nominalDiameter: "Diametro nominale sfere:",
                innerDiameter: "Diametro interno:",
                outerDiameter: "Diametro esterno:",
                contactAngle: "Angolo di contatto:",
                numberOfCrowns: "Numero corone sfere:",
                crownsPerSphere: "Numero corone sfere per corona:"
            };
        }
        return {};
    };

    const placeholders = getPlaceholders();

    async function CalculateBearing() {
        const dpw = Math.floor((parseFloat(innerDiameter) + parseFloat(outerDiameter)) / 2 * 10) / 10; // Keep 1 decimal place

        let results;

        switch (true) {
            case bearingType.startsWith('Sfere radiali'):
                results = sfereRadiali(dpw, nominalDiameter, contactAngle, numberOfCrowns, crownsPerSphere);
                setCalculationResults(results); // Save results in state
                onResultsCalculated(results);
                console.log('Test radiali: ' + results.Cr)
                //exportToJsonFile(results, 'bearingOptions'); // Export the results to a JSON file
                break;

            case bearingType.startsWith('Sfere assiali'):
                results = sfereAssiali(dpw, nominalDiameter, contactAngle, numberOfCrowns, crownsPerSphere);
                setCalculationResults(results);
                onResultsCalculated(results);
                console.log('Test assiali: ' + results.Cr)

            case bearingType.startsWith('Rulli radiali'):
                results = rulliRadiali(dpw, nominalDiameter, innerDiameter, outerDiameter, contactAngle, numberOfCrowns, crownsPerSphere, numberOfRollersPerCrown, rollerType);
                setCalculationResults(results); " E' commentato perché essendo incompleto va ad intaccare il flusso di tutto lo switch e smette di far funzionare correttamente sfereAssiali che non passano più i dati alla tabella anche se eseguono i calcoli in background."
                onResultsCalculated(results);

            default:
                console.log("Unknown bearing type");
                break;
        }
    }

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
                                value={nominalDiameter}
                                onChange={(e) => setNominalDiameter(e.target.value)}
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
                                value={innerDiameter}
                                onChange={(e) => setInnerDiameter(e.target.value)}
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
                                value={outerDiameter}
                                onChange={(e) => setOuterDiameter(e.target.value)}
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
                                value={contactAngle}
                                onChange={(e) => setContactAngle(e.target.value)}
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
                                value={numberOfCrowns}
                                onChange={(e) => setNumberOfCrowns(e.target.value)}
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
                                value={crownsPerSphere}
                                onChange={(e) => setCrownsPerSphere(e.target.value)}
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
                                        placeholder="Numero rulli per corona:"
                                        value={numberOfRollersPerCrown}
                                        onChange={(e) => setNumberOfRollersPerCrown(e.target.value)}
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
                                    <InputLabel>Tipo di rullo:</InputLabel>
                                    <Select
                                        value={rollerType}
                                        onChange={handleRollerType}
                                    >
                                        <MenuItem value={'Rullo cilindrico'}>Rullo cilindrico</MenuItem>
                                        <MenuItem value={'Rullo conico'}>Rullo conico</MenuItem>
                                        <MenuItem value={'Rullo a botte'}>Rullo a botte</MenuItem>
                                    </Select>
                                    
                                </FormControl>
                            </>
                        ) : null}

                        <Button onClick={CalculateBearing}>Calculate</Button>
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
