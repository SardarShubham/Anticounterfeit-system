import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {

  const navigate = useNavigate()
  const [value, setValue] = React.useState(0);

  const [email, setEmail]  =  useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getWalletAddress=()=>{
    if (window.ethereum) {
        console.log("Have metamask");
      } else {
        alert("Install Metamask!");
      }
      // get account address
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        console.log("Current Wallet", res);
        if(res){
            setAddress(res);
        }
      });
  }

  const handleLogIn=(e)=>{
    e.preventDefault();
    if( !email || !password  || !address ){
      alert("Please enter all the fields!")
      return;
    }


    axios
      .post('http://localhost:5000/login', {
        'email': email,
        'password': password,
        'walladdr' : address[0],
      })
      .then((res) => {
          alert("Successfully Logged In!!")
          // setEmail('');
          // setPassword('');
          // setAddress('');
          // navigate("/");
      })
      .catch((err) => {
        console.log('Not reistered!');
      });
    
  }

  return (
    <Box sx={{ width: '20%', backgroundColor:"white", margin:'auto', minWidth:'330px'}}>
      <Box sx={{ borderBottom: 1, borderColor: '#ffffff' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Manufacturer" {...a11yProps(0)} />
          <Tab  label="Middleman" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <h2 style={{"color":"#000000"}}>Login to your Account</h2>
      <Stack spacing={2} direction="column">
        <TextField id="outlined-basic" label="Email Id" variant="outlined" size='small' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <TextField id="outlined-basic" label="Password" variant="outlined"  size='small'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <TextField id="outlined-basic" label="Metamask Wallet Token" variant="outlined"  size='small' disabled={true} onClick={getWalletAddress} value={address}/>
        <Button variant="contained" onClick={handleLogIn}>Log in</Button>
        <h4>New User? <a href='/register'>Register</a></h4>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h2 style={{"color":"#000000"}}>Login to your Account</h2>
      <Stack spacing={2} direction="column">
        <TextField id="outlined-basic" label="Metamask Wallet Token" variant="outlined"  size='small'/>
        <Button variant="contained">Log in</Button>
        </Stack>
      </TabPanel>
      {console.log(email, password, address)}
    </Box>
  );
}