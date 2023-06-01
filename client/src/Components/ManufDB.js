
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
import { getAllItems, sellItem } from '../connect';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { Link } from 'react-router-dom';
function createData(srno, name, id, status, action) {
    return {srno, name, id, status, action};
}

const ManufcDB = () => {
    const [productsData, setProductData] = useState([]);


    const handleInvalidate = (id) => {
        sellItem(id, res => {
            console.log(res);
            alert("Product with id ", id, " invalidated successfully!")
        });


    }


    const fetchTableData = () => {
        //fetch all the dashboard details 
        getAllItems(
            res => {
                console.log(res);
                let tempArr = [];
                res.forEach((element,i) => {
                    
                    tempArr.push(createData((i+1), element.name, element.id, element.status, <Button variant="outlined" disabled={!element.isvalid} onClick={()=>handleInvalidate(element.id)}>Invalidate</Button>))
                });
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
        <h1 style={{"color":"#ffffff"}}>Manufacturer's Dashboard</h1>
        <h3 style={{"color":"#ffffff"}}>Product Details</h3>
        <Link to="/addproduct">
            <Button variant="contained" style={{"marginBottom":"2rem"}}>Add new Product</Button>
        </Link>
        <Button variant="contained" style={{"marginBottom":"2rem"}} onClick={fetchTableData}>Refresh Table</Button>
        <br/>
        
      <div>
      </div>
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
                                STATUS
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
 
export default ManufcDB;