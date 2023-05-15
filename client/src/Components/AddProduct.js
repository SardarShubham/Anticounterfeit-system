import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import QR from "./QR";
import { createItem } from "../connect";

const AddPRoduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [manuName, setmanuName] = useState("");
  const [manuLoc, setManLoc] = useState("");
  const [salesMode, setSalesMode] = useState("");
  const [retailerName, setRetailerName] = useState("");
  const [retailerAddr, setRetailerAddr] = useState("");
  const [qrID, setQRId] = useState(null);


  const handleSubmit = () => {
    console.log("submit clicked");
    // get manufacturer name and location from login, localeStorage
    createItem(
      productName,
      manuName,
      retailerName,
      retailerAddr,
      productPrice,
      salesMode,
      manuLoc,
      res => {
        console.log(res.ret_id);
        setQRId(res.ret_id)
    });
  }
  return (
    <div style={{ padding: "2rem 0 2rem 0" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginTop: 1, width: "25ch"},
          width: "40%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          margin: "0 auto",
          minWidth:"460px" ,
        }}
        style={{ padding: "2rem 0 2rem 0" }}
        noValidate
        autoComplete="off"
      >
        <Stack>
          <span style={{ fontSize: "1.5rem", color: "#000000" }}>
            Add New Product
          </span>
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-name"
            label="Product Name"
            required={"true"}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            value={productName}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-price"
            label="Product Price"
            required={"true"}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            value={productPrice}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-manuName"
            label="Manufacturer Name"
            required={"true"}
            onChange={(e) => {
              setmanuName(e.target.value);
            }}
            value={manuName}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-manuLoc"
            label="Manufacturer Location"
            required={"true"}
            onChange={(e) => {
              setManLoc(e.target.value);
            }}
            value={manuLoc}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-mode"
            label="Sold in a pack of"
            required={"true"}
            onChange={(e) => {
              setSalesMode(e.target.value);
            }}
            value={salesMode}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-retailer-name"
            label="Retailer's Name"
            required={"true"}
            onChange={(e) => {
              setRetailerName(e.target.value);
            }}
            value={retailerName}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-retailer-addr"
            label="Retailer's Wallet Address"
            required={"true"}
            onChange={(e) => {
              setRetailerAddr(e.target.value);
            }}
            value={retailerAddr}
          />

          <Button
            variant="contained"
            style={{ marginTop: "2rem" }}
            onClick={() => {
              handleSubmit()
            }}
          >
            Add Product
          </Button>

          {(qrID)? 
            <QR id={qrID} name={productName} /> 
            :
          <span style={{"paddingTop":"1rem", "color":"#000000"}}>Generated QR will be shown here.</span>}

          <Button variant="contained" style={{ marginTop: "2rem" }} disabled={!qrID}>
            Print QR Code
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddPRoduct;
