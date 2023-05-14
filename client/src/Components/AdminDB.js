import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function createData(srno, company_name, req_date, action) {
  return { srno, company_name, req_date, action };
}

const rows = [
  createData(
    "1",
    "Milton",
    "12/3/2023",
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Approve" />
    </FormGroup>
  ),
  createData(
    "2",
    "HP",
    "11/3/2023",
    <FormGroup>
      <FormControlLabel control={<Switch  />} label="Approve" />
    </FormGroup>
  ),
  createData(
    "3",
    "Walvxjk",
    "12/3/2023",
    <FormGroup>
      <FormControlLabel control={<Switch  />} label="Approve" />
    </FormGroup>
  ),
  createData(
    "1",
    "Bdfik",
    "12/3/2023",
    <FormGroup>
      <FormControlLabel control={<Switch   defaultChecked/>} label="Approve" />
    </FormGroup>
  ),
  createData(
    "1",
    "Dell",
    "12/3/2023",
    <FormGroup>
      <FormControlLabel control={<Switch  defaultChecked/>} label="Approve" />
    </FormGroup>
  ),
];

const AdminDB = () => {
  return (
    <div style={{"minHeight":"800px"}}>
      <h1 style={{"color":"#ffffff"}}>Admin's Dashboard</h1>
      <h3 style={{"color":"#ffffff"}}>Company Details</h3>
      <TableContainer sx={{ width: "70%", margin: "0 auto" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#51AFF7" }}>
            <TableRow>
              <TableCell>SR.NO</TableCell>
              <TableCell align="left">COMPANY NAME</TableCell>
              <TableCell align="left">REQUESTED DATE</TableCell>
              <TableCell align="left">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.srno}</TableCell>
                <TableCell component="th" scope="row">
                  {row.company_name}
                </TableCell>
                <TableCell align="left">{row.req_date}</TableCell>

                <TableCell align="right">{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminDB;
