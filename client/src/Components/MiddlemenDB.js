
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(srno, name, id, from, status, action) {
    return {srno, name, id, status, from, action};
}
 
const rows = [
    createData('1', 'Adidas Air', 'add67','Chennai', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    createData('2', 'Burberry', 'brb456','Pune', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    createData('3', 'Versace', 'vsc78','Akola', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    createData('4', 'LV', 'lv098','Kolkata', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    createData('5', 'Amiri XC', 'amr145','Mumbai', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    ];

const MiddlemenDB = () => {
    
    return ( 
        <>
        <h1>Middlemen's Dashboard</h1>
        <h3>Product Details</h3>
            <TableContainer sx={{ width: '70%', 'margin':'0 auto' }}  component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{"backgroundColor":'#51AFF7'}}>
                        <TableRow>
                            
                            <TableCell>
                                SR.NO
                            </TableCell>
                            <TableCell align="left">
                                PRODUCT NAME
                            </TableCell>
                            <TableCell align="right">
                                PRODUCT ID
                            </TableCell>
                            <TableCell align="right">
                                FROM
                            </TableCell>
                            <TableCell align="right">
                                QR SCAN 
                            </TableCell>
                            <TableCell align="right">
                                ACTION
                            </TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th':
                                    { border: 0 } }}
                            >
                                <TableCell align="left">
                                    {row.srno}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">
                                    {row.from}
                                </TableCell>
                                <TableCell align="right">
                                    {row.status}
                                </TableCell>
                                <TableCell align="right">
                                    {row.action}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

    </>
     );
}
 
export default MiddlemenDB;