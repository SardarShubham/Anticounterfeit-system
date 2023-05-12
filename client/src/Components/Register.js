import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocaton] = useState("");
  const [address, setAddress] = useState(null);
  const [role, setRole] = useState("");
  

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

  const handleSubmit =(e)=>{
    
    // if(!name || !email || !password || !location || !address || !role){
    //   alert("Please enter all the fields!")
    //   return;
    // }
    
    e.preventDefault();

    axios
      .post('http://localhost:5000/register', {
        'name': name,
        'email': email,
        'password': password,
        'location': location,
        'walladdr' : address[0],
        'role': role
      })
      .then((res) => {
          alert("Successfully Registered!!")
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          width: "40%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          margin: "0 auto",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack>
          <h1 style={{ color: "#000000" }}>Middlemen</h1>
          <TextField
            id="outlined-role"
            label="Role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            value={role}
            required={'true'}
          />

          <TextField
            id="outlined-name"
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required={'true'}
          />
          <TextField
            id="outlined-email"
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required={'true'}
          />
          <TextField
            id="outlined-password"
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required={'true'}
          />

          <TextField
            id="outlined-location"
            label="Location"
            onChange={(e) => {
              setLocaton(e.target.value);
            }}
            value={location}
            required={'true'}
          />

          <Button
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: "rgb(9, 151, 68)",
              // padding: "18px 36px",
              fontSize: "12px",
              marginTop: "1rem",
            }}
            onClick={getWalletAddress}
          >
            Get Address
          </Button>

          <TextField
            id="outlined-addr"
            label="Wallet Address"
            onChange={(e) => {
                setAddress(e.target.value);
              }}
            value={address}
            disabled={"true"}
          />
          <Button variant="contained" style={{ marginTop: "2rem" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Box>
      {console.log(name, email, password, location)}
    </>
  );
};

export default Register;
// name, id, email, pass, metamask addr(readonly), location
