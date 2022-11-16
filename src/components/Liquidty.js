import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ChartHome from './ChartHome'
import History from './History';

import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  NativeSelect,
  Switch,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import {
    AddCircleOutline,
  ArrowCircleDown,
  ArrowCircleDownRounded,
  CurrencyBitcoin,
  ForkRight,
  Settings,
} from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import graph from "../images/grap.JPG";
import SwapCmp from "./SwapCmp";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// drop down style start
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#07071c",
    border: "1px solid #ced4da",
    fontSize: 20,
    textAlign: "start",
    padding: "10px 16px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      color: "white",
    },
  },
}));

//   drop down style close

export default function Liquidty() {
  const [darkFontColor, setDarkFontColor] = useState("#FFFFFF");
  const [darkFontColorSec, setDarkFontColorSec] = useState("#13a8ff");

  // drop down js start
  const [age, setAge] = React.useState("0");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //   Dropdown js close



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid
        container
        sx={{maxWidth:"lg"}}
        border={0}
        columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 2 }}
      >
         <SwapCmp />

        <Grid item xs={12} sm={12} md={5} sx={{ mt: 2 }}>
          <Item sx={{ pl: 3 }} style={{ backgroundColor: "#12122c" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "white" }}
              gutterBottom
              style={{ textAlign: "left" }}
            >
              Trade On-Chain
            </Typography>

            {/* Drop down Start  */}

            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel
                id="demo-customized-select-label"
                style={{ fontWeight: "bold", color: "white" }}
              >
                
              </InputLabel>

              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value={0}></MenuItem>

                <MenuItem value={0}>
                  {" "}
                  <CurrencyBitcoin sx={{ color: "#fc8416", marginBottom: "-5px"  }} />{" "}
                  <span style={{ color: "#FFFFFF", display: "inline" }}>
                    BTC
                  </span>{" "}
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <span style={{ textAlign: "end", color: "#6d6d7d" }}>
                Balance Connect wallet
              </span>
            </FormControl>

            <FormControl sx={{ m: 1, ml: -1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
              <BootstrapInput
                id="demo-customized-textbox"
                type="text"
                value={0}
                style={{ color: "#FFFFFF" }}
              />
              <span style={{ textAlign: "end", color: "#6d6d7d" }}>
                25% 50% 75% 100%
              </span>
            </FormControl>
            {/* </FormControl> */}

            {/* Drop down close */}

            <div>
              <AddCircleOutline
                sx={{ color: "white", fontSize: "32px", fontWeight: "bold" }}
              />
            </div>
          </Item>

          <Item sx={{ pl: 3, mt: -4 }} style={{ backgroundColor: "#12122c" }}>
            {/* Drop down Start  */}

            <FormControl
              sx={{ m: 1 }}
              variant="standard"
              style={{ textAlign: "start" }}
            >
              <InputLabel
                id="demo-customized-select-label"
                style={{ fontWeight: "bold", color: "white" }}
              >
                
              </InputLabel>

              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
                style={{ textAlign: "start" }}
              >
                <MenuItem value={0} style={{ textAlign: "start" }}></MenuItem>

                <MenuItem value={0} style={{ textAlign: "start" }}>
                  {" "}
                  <CurrencyBitcoin sx={{ color: "#fc8416", marginBottom: "-5px"  }} />{" "}
                  <span style={{ color: "#FFFFFF", display: "inline" }}>
                    BTC
                  </span>{" "}
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <span style={{ textAlign: "end", color: "#6d6d7d" }}>
                Balance Connect wallet
              </span>
            
              <span style={{ textAlign: "left", color: "white" }}>
                <InfoOutlinedIcon
                  style={{
                    fontSize: "18px",
                    paddingTop: "3px",
                    marginBottom: "-3px",
                  }}
                />{" "}
                Pool composition
              </span>
            </FormControl>

            <FormControl sx={{ m: 1, ml: -1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
              <BootstrapInput
                id="demo-customized-textbox"
                type="text"
                value={0}
                style={{ color: "#FFFFFF" }}
              />
              <span style={{ textAlign: "end", color: "#6d6d7d" }}>
                25% 50% 75% 100%
              </span>
              <div>
              <span  style={{
                   
                    paddingTop: "3px",
                    marginBottom: "-3px",
                    float: "left",
                    color:"white",
                    display: "inline"
                  }}>
              50% BTC + 50% ETH 
              </span>
              <Settings style={{float: "right", color: "white"}} />
              </div>
            
            </FormControl>

            {/* </FormControl> */}

            {/* Drop down close */}
          </Item>

          <Item
            sx={{ pl: 3, textAlign: "left" }}
            style={{ backgroundColor: "#12122c" }}
          >
            <span style={{ textAlign: "start", color: "white" }}>
              Add Custom Proportion:
            </span>

            <div style={{ float: "right", display: "inline" }}>
              <span style={{ textAlign: "right", color: "white" }}> <Switch  defaultChecked size="small" /></span>
            </div>

            <div style={{margin: "5px 0px"}}>
              <span style={{ textAlign: "start", color: "white" }}>
                Max Slippage:
              </span>

              <div style={{ float: "right", display: "inline" }}>
                <span style={{ textAlign: "right", color: "white" }}>0.1% &nbsp;&nbsp; 0.25% &nbsp;&nbsp; 0.5% &nbsp;&nbsp; custom</span>
              </div>
            </div>

          

            <div>
              <span style={{ textAlign: "start", color: "white" }}>
                Time Deadline:
              </span>

              <div style={{ float: "right", display: "inline" }}>
                <span style={{ textAlign: "right", color: "white" }}>30sec &nbsp;&nbsp;  1min &nbsp;&nbsp;  2min &nbsp;&nbsp;  custom</span>
              </div>
            </div>
            <hr></hr>
          </Item>

          

          <Item
            sx={{ pl: 3, textAlign: "left" }}
            style={{ backgroundColor: "#12122c" }}
          >
            <span style={{ textAlign: "start", color: "white" }}>
              Price Impact:
            </span>

            <div style={{ float: "right", display: "inline" }}>
              <span style={{ textAlign: "right", color: "white" }}>0%</span>
            </div>

            <div>
              <span style={{ textAlign: "start", color: "white" }}>
                Expected Output:
              </span>

              <div style={{ float: "right", display: "inline" }}>
                <span style={{ textAlign: "right", color: "white" }}>0</span>
              </div>
            </div>

            <div>
              <span style={{ textAlign: "start", color: "white" }}>
                Minimum Output after Slippage:
              </span>

              <div style={{ float: "right", display: "inline" }}>
                <span style={{ textAlign: "right", color: "white" }}>0</span>
              </div>
            </div>
            <Button
              size="large"
              variant="contained"
              sx={{ width: "100%", padding: 2, fontWeight: "bold", mt: 2 }}
              style={{
                background:
                  "linear-gradient(to right bottom, #13a8ff, #0074f0)",
                textAlign: "center",
              }}
            >
               INVEST
            </Button>
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={7} sx={{ mt: 2 }}>
          <Item
            sx={{ mb: 3 }}
            style={{ backgroundColor: "#12122c", color: darkFontColor }}
          >
              <ChartHome  />
              {/* <img src={graph} style={{ maxWidth: "100%" }} /> */}
          </Item>

          <History />
        </Grid>
      </Grid>
    </div>
  );
}
