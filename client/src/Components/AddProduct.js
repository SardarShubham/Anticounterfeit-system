import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import QR from "./QR";

const AddPRoduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [manufDate, setManufDate] = useState("");
  const [salesMode, setSalesMode] = useState("");
  const [nextMiddlemen, setNextmMiddlemen] = useState("");
  const [retailerName, setRetailerName] = useState("");
  const [retailerAddr, setRetailerAddr] = useState("");

  const [isProductAdded, setIsPRoductAdded] = useState(false);
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
          margin: "0 auto",
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
            id="outlined-desc"
            label="Product Description"
            required={"true"}
            onChange={(e) => {
              setProductDesc(e.target.value);
            }}
            value={productDesc}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-dom"
            label="Date of Manufacturing"
            required={"true"}
            onChange={(e) => {
              setManufDate(e.target.value);
            }}
            value={manufDate}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-mode"
            label="Sales Mode"
            required={"true"}
            onChange={(e) => {
              setSalesMode(e.target.value);
            }}
            value={salesMode}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-next"
            label="Next Middlemen"
            required={"true"}
            onChange={(e) => {
              setNextmMiddlemen(e.target.value);
            }}
            value={nextMiddlemen}
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
              setIsPRoductAdded(true);
            }}
          >
            Add Product
          </Button>

          {isProductAdded && <QR id={"23f"} name={productName} />}

          <Button variant="contained" style={{ marginTop: "2rem" }}>
            Print QR Code
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddPRoduct;
