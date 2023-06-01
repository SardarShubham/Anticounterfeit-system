
import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAllItems, sellItem, sellProd } from '../connect';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
let navigate;

function createData(srno, name, id, from, status, action) {
    return {srno, name, id, status, from, action};
}
 
const rows = [
    
    createData('1', 'Adidas Air', 'add67','Chennai', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    createData('2', 'Burberry', 'brb456','Pune', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined" onClick={()=>{navigate("/nextmen")}}>Send Forward</Button>),
    createData('3', 'Versace', 'vsc78','Akola', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    createData('4', 'LV', 'lv098','Kolkata', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined" onClick={()=>{navigate("/nextmen")}}>Send Forward</Button>),
    createData('5', 'Amiri XC', 'amr145','Mumbai', <Button variant="outlined">Scan QR</Button>,<Button variant="outlined">Invalidate</Button>),
    ];

const MiddlemenDB = () => {
    navigate = useNavigate();
    const [productsData, setProductData] = useState([]);

    const handleInvalidate = (id) => {
        sellItem(id, res => {
            console.log(res);
            alert("Product with Invalidated successfully!")
        });
    }

    const handleSell = (id) => {
        sellProd(id, res => {
            console.log(res);
            alert("Product with id Sold successfully!")
        });
    }


    const fetchTableData = () => {
        //fetch all the dashboard details 
        getAllItems(
            res => {
                console.log(res);
                let tempArr = [];
                res.forEach((element,i) => {
                    
                    tempArr.push(createData((i+1), element.name, element.id, element.status, 
                        <>
                            <Button variant="outlined" disabled={!element.isvalid} onClick={()=>handleInvalidate(element.id)}>Invalidate
                            </Button>
                            {
                                element.status == "REACHED" ?
                                <Button variant="outlined" disabled={!element.isvalid} onClick={()=>handleSell(element.id)}>SELL</Button>
                                :
                                <Button variant="outlined" disabled={!element.isvalid} onClick={()=>navigate("/nextmen", {state:element.id})}>SEND FORWARD</Button>
                            }
                        </>
                        ))                });
                console.log(tempArr);
                setProductData(tempArr);
                // let arr2 = res.filter(itemDetails => (itemDetails.manufacturerAddress === acc));
                // console.log(arr2);
                // setProductData(res.products.filter(itemDetails => itemDetails[0]))
            }
        )
      };
    return ( 
        <div style={{"minHeight":"800px"}}>
        <h1  style={{"color":"#ffffff"}}>Middlemen's Dashboard</h1>
        <Button variant="contained" style={{"marginBottom":"2rem"}} onClick={fetchTableData}>Refresh Table</Button>
        <h3  style={{"color":"#ffffff"}}>Product Details</h3>
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
                                ACTION
                            </TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsData.map((row) => (
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
                                    <div style={{"display":"flex", "justifyContent":"space-around"}}>
                                        <span className='prod_id'>{row.id}</span>
                                        <CopyToClipboard text={row.id}
                                        onCopy={() => console.log("copied")}>    
                                        <ContentCopyIcon/>
                                        {/* <button>Copy</button> */}
                                        </CopyToClipboard>
                                    </div>
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

    </div>
     );
}
 
export default MiddlemenDB;