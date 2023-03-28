import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DoneAll } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 , margin:8}}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={4}>
          <Item className="grid-content">
            <DoneAll fontSize="large" color="primary" />
            <h3> Supply Chain Management</h3>
            <h4>
              /* Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia */ /* Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia */
            </h4>
            <h4>
              <a href="#">Learn more</a>
            </h4>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="grid-content">
            <DoneAll fontSize="large" color="primary" />
            <h3> AntiCounterfeiting</h3>
            <h4>
              /* Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia */ /* Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia */
            </h4>
            <h4>
              <a href="#">Learn more</a>
            </h4>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="grid-content">
            <DoneAll fontSize="large" color="primary" />
            <h3>Product Sales</h3>
            <h4>
              /* Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia */ /* Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia */
            </h4>
            <h4>
              <a href="#">Learn more</a>
            </h4>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
