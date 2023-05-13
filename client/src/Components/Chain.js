import { fetchDetails } from "../connect";
import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
...theme.typography.body2,
textAlign: 'center',
color: theme.palette.text.secondary,
// height: 60,
lineHeight: '60px',
padding: '25px'
}));


export default function Chain() {
    const [prodID, setProdID] = useState(null);
    const [chain, setChain] = useState([]);

    const steps = [
        'Select master blaster campaign settings',
        'Create an ad group',
        'Create an ad',
      ];

    const onTrack = ()=>{
        // if(!prodID){
        //     alert("Enter Id")
        //     return;
        // }
        // else{

        //     fetchDetails(prodID, res =>{
        //         setChain(res.locations)
        //         console.log(res.locations);
        //     });
        // }
    }

    return(

        <div>
            <h1>Tracking Product - {prodID}</h1>
            <input className="man_inp" type={"text"} placeholder={"ID"} onChange={(e)=>setProdID(e.target.value)}/>
            <button onClick={onTrack}>Track</button>
            {/* <div className="container">
                {
                    chain.map((curr)=>{
                        return(
                            <ul className="progressbar">
                                <li className="active">{curr}</li>
                            </ul>
                        )
                    })
                }
            </div> */}
            
            <Grid container spacing={4}>
                <Grid item sm={6}>
                    <Box 
                        sx={{
                            bgcolor: 'background.default'
                        }}
                        // className="supply_chain"
                        >   
                        <Item elevation={8}>
                            <h1>Product Supply Chain Details</h1>
                            <Stepper activeStep={1}  orientation="vertical">
                                {steps.map((item, i) => (
                                <Step key={i}>
                                    <StepLabel>
                                        <span>Samsung, New Chicago</span>
                                        <br/>
                                        <span>Transaction Date: 23/01/2023</span>
                                    </StepLabel>
                                </Step>
                                ))}
                            </Stepper>
                        </Item>
                    </Box>
                </Grid>
                <Grid item sm={6}>

                    <Box 
                        sx={{
                            bgcolor: 'background.default',
                            textAlign:'left',
                            paddingLeft: '40px'
                        }}
                        // className="supply_chain"
                        >   
                        {/* <Item elevation={8}> */}
                            <h2>Product Details</h2>
                            <span>Product Id : abcd</span>
                            <br/>
                            <span>Name: </span>
                            <br/>
                            <span>Manufacturer: </span>
                            <br/>
                            <span>Retailer:</span>
                            <br/>
                            <span>MRP:</span>
                            <br/>
                            <span>Sold in pack of: // or individual</span>
                        {/* </Item> */}
                    </Box> 
                    <Box>
                        <h1>The Product is Genuine</h1>
                    </Box>     
                </Grid>

            </Grid>
        </div>
    )
}
