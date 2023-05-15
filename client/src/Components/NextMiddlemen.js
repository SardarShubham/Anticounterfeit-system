import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import QR from "./QR";
import { verifyAndNext } from "../connect";

const NextmMiddlemen = () => {
  const [productID, setProdID] = useState("");
  const [shopname, setshopName] = useState("");
  const [myWallet, setMyWallet] = useState("");

  const [nextMenWallet, setNextMenWallet] = useState("");
  const [nextMenLocation, setNextMenLocation] = useState("");
 
  const handleSubmit = () => {
    // int name from login, localStorage
    verifyAndNext(
      productID,
      shopname,
      nextMenWallet,
      nextMenLocation,
      res => {
        console.log(res.ret_value);
        if (res.ret_value) alert("Details Added Successfully!");
        else alert("Failed, Not a Valid Middleman!");
    });
  }

  return (
    <div style={{ padding: "2rem 0 2rem 0" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginTop: 1, width: "25ch" },
          width: "40%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          margin: "50px auto 50px",
        
          minWidth:"460px" ,
        }}
        style={{ padding: "2rem 0 2rem 0" }}
        noValidate
        autoComplete="off"
      >
        <Stack>
          <span style={{ fontSize: "1.5rem", color: "#000000" }}>
            Specify the Next Middleman
          </span>
          <TextField
            style={{ minWidth: 200, width: "25rem" , marginTop:"2rem"}}
            variant="outlined"
            id="outlined-my-id"
            label="Product ID"
            required={"true"}
            onChange={(e) => {
              setProdID(e.target.value);
            }}
            value={productID}
          />
            <TextField
              style={{ minWidth: 200, width: "25rem" }}
              variant="outlined"
              id="outlined-my-addr"
              label="My Wallet Address (fetch auto)"
              required={"true"}
              onChange={(e) => {
                setMyWallet(e.target.value);
              }}
              value={myWallet}
            />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-my-name"
            label="Next middlemen Name"
            required={"true"}
            onChange={(e) => {
              setshopName(e.target.value);
            }}
            value={shopname}
          />

          <TextField
            style={{ minWidth: 200, width: "25rem", marginTop:"2rem" }}
            variant="outlined"
            id="outlined-next-token"
            label="Next Middlemen Wallet Address"
            required={"true"}
            onChange={(e) => {
              setNextMenWallet(e.target.value);
            }}
            value={nextMenWallet}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-next-loc"
            label="Next Middlemen Location"
            required={"true"}
            onChange={(e) => {
              setNextMenLocation(e.target.value);
            }}
            value={nextMenLocation}
          />
          
        
          <Button variant="contained" style={{ marginTop: "1rem" }}
            onClick={()=>handleSubmit()}
          >
            Add Destination
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default NextmMiddlemen;
