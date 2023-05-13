import { fetchDetails } from "../connect";
import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

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

        <div style={{background:'white'}}>
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
            
            <Box sx={{ width: '100%' }}>
            <Stepper activeStep={1}  orientation="vertical">
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                        {/* <Typography>{"mandd datae 343"}</Typography> */}
                        whatever
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            </Box>
        </div>
    )
}
