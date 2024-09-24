import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// This function creates the data structure for the table
function createData(name, value) {
    return { name, value };
}


export default function DenseTable({ results }) {
    // Prepare rows based on the results
    const rows = [
        createData('C0r', results?.C0r || 'N/A'),
        createData('F0', results?.F0 || 'N/A'),
        createData('f0', results?.f0 || 'N/A'),
        createData('Number of Crowns', results?.numberOfCrowns || 'N/A'),
        createData('Crowns per Sphere', results?.crownsPerSphere || 'N/A'),
        createData('Nominal Diameter', results?.nominalDiameter || 'N/A'),
        createData('Cosine of Alpha', results?.cosdAlfa || 'N/A'),
    ];

    return (
        <TableContainer component={Paper} sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;', borderRadius: '10px' }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Parameter</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
