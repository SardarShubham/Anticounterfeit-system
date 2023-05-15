
import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { getAllItems } from '../connect';

function createData(srno, name, id, status, action) {
    return {srno, name, id, status, action};
}
 
const rows = [
    createData('1', 'Nike Air Jordan', 'nike123', 'In transit',<Button variant="outlined">Invalidate</Button>),
    createData('2', 'Nike Air Jordan', 'nike123', 'In transit',<Button variant="outlined">Invalidate</Button>),
    createData('3', 'Nike Air Jordan', 'nike123', 'In transit',<Button variant="outlined">Invalidate</Button>),
    createData('4', 'Nike Air Jordan', 'nike123', 'In transit',<Button variant="outlined">Invalidate</Button>),
    createData('5', 'Nike Air Jordan', 'nike123', 'In transit',<Button variant="outlined">Invalidate</Button>),
    ];

// to validate if metamask exist
export const isWalletExist = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return true;
    }
    return false;
  };


const ManufcDB = () => {
    const [productsData, setProductData] = useState([]);

    useEffect(async () => {
        let wallet = await isWalletExist();
        if (wallet){
            const accs = await window.ethereum.enable();
            const acc = accs[0]; 
            //fetch all the dashboard details 
            getAllItems(
                res => {
                    console.log(res);
                    let arr2 = res.filter(itemDetails => (itemDetails.manufacturerAddress === acc));
                    console.log(arr2);
                    // setProductData(res.products.filter(itemDetails => itemDetails[0]))
                }
            )       
        }
      });
    
    return ( 
        <>
        <h1>Manufacturer's Dashboard</h1>
        <h3>Product Details</h3>
            <TableContainer sx={{ width: '70%', 'margin':'0 auto',minWidth: '612px' }}  component={Paper}>
                <Table sx={{ minWidth: '612px' }} aria-label="simple table">
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
                                STATUS
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
 
export default ManufcDB;