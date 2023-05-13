import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const AddPRoduct = () => {
  return (
    <>
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
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-price"
            label="Product Price"
            required={"true"}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-desc"
            label="Product Description"
            required={"true"}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-dom"
            label="Date of Manufacturing"
            required={"true"}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-mode"
            label="Sales Mode"
            required={"true"}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-next"
            label="Next Middlemen"
            required={"true"}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-retailer-name"
            label="Retailer's Name"
            required={"true"}
          />
          <TextField
            style={{ minWidth: 200, width: "25rem" }}
            variant="outlined"
            id="outlined-retailer-addr"
            label="Retailser's Address"
            required={"true"}
          />
       
          <Button variant="contained" style={{ marginTop: "2rem" }}>
            Add Product
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default AddPRoduct;
