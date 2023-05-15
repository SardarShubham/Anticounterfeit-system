import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { QrReader } from "react-qr-reader";
import Grid from "@mui/material/Grid";
import { getItem } from "../connect";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  // height: 60,
  lineHeight: "60px",
  padding: "25px",
}));

export default function Chain() {
  const [prodID, setProdID] = useState(null);
  // const [chainData, setChain] = useState([]);
  const [productData, setProductData] = useState(null);

  const chainData = [
    ["manu1", "location1", "1684044854"],
    ["nashik", "pune", "1684045077"],
  ];

  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  const onTrack = () => {
    console.log("on track clicked!");
    if (prodID) {
      getItem(prodID, (res) => {
        console.log(res);
        setProductData(res);
      });
    }
  };

  return (
    <div style={{ minHeight: "800px" }}>
      <div className="customer_container">
        <h1>Tracking Product - {prodID}</h1>
        {/* <input className="man_inp" type={"text"} placeholder={"ID"} onChange={(e)=>setProdID(e.target.value)}/> */}

        <QrReader
          style={{ width: "200px", height: "200px" }}
          onResult={(result, error) => {
            if (!!result) {
              setProdID(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          // style={{ width: '200px', height:'200px' }}
        />
    </div>
        <Button
          variant="contained"
          style={{ margin: "1rem" }}
          onClick={() => onTrack()}
        >
          Get Details
        </Button>

        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Box
              sx={{
                bgcolor: "background.default",
              }}
              // className="supply_chain"
            >
              <Item elevation={8}>
                <h1>Product Supply Chain Details</h1>
                {productData && (
                  <Stepper
                    activeStep={productData.history.length - 1}
                    orientation="vertical"
                  >
                    {productData.history.map((item, i) => (
                      <Step key={i}>
                        <StepLabel>
                          <span>
                            {item[0]}, {item[1]}
                          </span>
                          <br />
                          <span>Transaction Date: {item[2]}</span>
                        </StepLabel>
                      </Step>
                    ))}
                    {productData.currentOwner != productData.retailerAddr && (
                      <Step key={productData.history.length}>
                        <StepLabel>
                          <span>{productData.retailerName}</span>
                        </StepLabel>
                      </Step>
                    )}
                  </Stepper>
                )}
              </Item>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box
              sx={{
                bgcolor: "background.default",
                textAlign: "left",
                paddingLeft: "40px",
              }}
              // className="supply_chain"
            >
              {/* <Item elevation={8}> */}
              {productData && (
                <>
                  <h2>Product Details</h2>
                  <span>Product Id : {prodID}</span>
                  <br />
                  <span>Name: {productData.name}</span>
                  <br />
                  <span>Manufacturer: {productData.manufacturerName}</span>
                  <br />
                  <span>Retailer: {productData.retailerName}</span>
                  <br />
                  <span>MRP: {productData.price}</span>
                  <br />
                  <span>Sold in pack of: {productData.packof}</span>
                </>
              )}
              {/* </Item> */}
            </Box>
            <Box>
              {productData && (
                <>
                  {productData.isvalid ? (
                    <h1>The Product is Genuine</h1>
                  ) : (
                    <h1>Product is not Genuine !</h1>
                  )}
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
  );
}

// sample response
// {
//     "0": true,
//     "1": "Toy story",
//     "2": "manu1",
//     "3": "katraj shop",
//     "4": "0x42C14A7c26Ff779F893De1Bc87a284d29d32A6EB",
//     "5": "0x50c711dd21E68e25F27513aEf802487c9c26D014",
//     "6": "0x9573c561cae253dAb2cf64f0F993252Ea66300F3",
//     "7": "699",
//     "8": "4",
//     "9": "2",
//     "10": "INTRANSIT",
//     "11": [
//         [
//             "manu1",
//             "location1",
//             "1684044854"
//         ],
//         [
//             "nashik",
//             "pune",
//             "1684045077"
//         ]
//     ],
//     "isvalid": true,
//     "name": "Toy story",
//     "manufacturerName": "manu1",
//     "retailerName": "katraj shop",
//     "manufacturerAddress": "0x42C14A7c26Ff779F893De1Bc87a284d29d32A6EB",
//     "currentOwner": "0x50c711dd21E68e25F27513aEf802487c9c26D014",
//     "retailerAddr": "0x9573c561cae253dAb2cf64f0F993252Ea66300F3",
//     "price": "699",
//     "packof": "4",
//     "loc_Size": "2",
//     "status": "INTRANSIT",
//     "history": [
//         [
//             "manu1",
//             "location1",
//             "1684044854"
//         ],
//         [
//             "nashik",
//             "pune",
//             "1684045077"
//         ]
//     ]
// }
