import React from "react";
import "./App.css";
import ResponsiveDrawer from "./components/NavbarWithDrawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MapContainer from "./components/MapContainer";
import { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [invoice, setInvoice] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleInvoice = (event) => {
    setInvoice(event.target.value);
  };
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Box sx={{ ml: { xs: 1 } }}>
        <div className="mainForm">
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "#e6ac00", mb: 4 }}
          >
            Add New Merchant
          </Typography>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#e6ac00" }}
            >
              1.General Details
            </Typography>
            <TextField
              sx={{
                width: { lg: "600px", md: "600px", xs: "96%" },
                mb: 2,
                mr: 1,
              }}
              id="outlined-basic"
              label="NAME OF MERCHANT"
              variant="outlined"
            />
            <TextField
              sx={{ width: { lg: "600px", md: "600px", xs: "96%" }, mb: 2 }}
              id="outlined-basic"
              label="PHONE NUMBER"
              variant="outlined"
            />
            <TextField
              sx={{ width: { lg: "600px", md: "600px", xs: "96%" } }}
              id="outlined-basic"
              label="EMAIL ADDRESS"
              variant="outlined"
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#e6ac00" }}
            >
              2.KYC Details
            </Typography>
            <TextField
              sx={{
                width: { lg: "600px", md: "600px", xs: "96%" },
                mb: 2,
                mr: 1,
              }}
              id="outlined-basic"
              label="ADHAAR NUMBER"
              variant="outlined"
            />
            <TextField
              sx={{ width: { lg: "600px", md: "600px", xs: "96%" }, mb: 2 }}
              id="outlined-basic"
              label="GST NUMBER"
              variant="outlined"
            />
            <TextField
              sx={{
                width: { lg: "600px", md: "600px", xs: "96%" },
              }}
              id="outlined-basic"
              label="PAN NUMBER"
              variant="outlined"
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#e6ac00" }}
            >
              3.Address Details
              <Box
                sx={{
                  mt: 3,
                  mb: 3,
                  height: "200px",
                  width: { lg: "1210px", md: "610px", xs: "96%" },
                }}
              >
                <MapContainer setLat={setLat} setLong={setLong} />
              </Box>
            </Typography>
            <TextField
              fullWidth
              sx={{
                width: { lg: "1210px", md: "610px", xs: "96%" },
                mb: 2,
                mt: 3,
              }}
              id="outlined-basic"
              label="Full Address "
              variant="outlined"
              value={`Latitude:${lat}  Longitude:${long}`}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#e6ac00", mb: 2 }}
            >
              4.Retainer Details
            </Typography>

            <FormControl
              sx={{
                width: { lg: "600px", md: "600px", xs: "96%" },
                mb: 2,
                mr: 1,
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Retainer Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <TextField
              sx={{ width: { lg: "600px", md: "600px", xs: "96%" }, mb: 2 }}
              id="outlined-basic"
              label="Retainer Value"
              variant="outlined"
            />
            <TextField
              sx={{
                width: { lg: "600px", md: "600px", xs: "96%" },
                mr: 1,
                mb: 2,
              }}
              id="outlined-basic"
              label="Buy Commission"
              variant="outlined"
            />
            <TextField
              sx={{ width: { lg: "600px", md: "600px", xs: "96%" } }}
              id="outlined-basic"
              label="Sell Commission"
              variant="outlined"
            />
          </Box>
          <Box sx={{ mt: 3, width: { xs: "96%" } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mt: 3, mb: 2, color: "#e6ac00" }}
            >
              Module Applicable
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  lg: "space-evenly",
                  md: "space-evenly",
                  xs: "space-evenly",
                },
                flexWrap: { xs: "wrap" },
                flex: { xs: "2" },
                gap: { xs: 3 },
              }}
            >
              <Box
                component="div"
                item
                sx={{
                  p: 2,
                  border: "1px solid grey",
                  height: "110px",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 3 }}
                >
                  <DashboardCustomizeIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Custodian
                </Typography>
              </Box>
              <Box
                component="div"
                item
                sx={{
                  p: 2,
                  border: "1px solid grey",
                  height: "110px",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 3 }}
                >
                  <DashboardCustomizeIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Custodian
                </Typography>
              </Box>
              <Box
                component="div"
                item
                sx={{
                  p: 2,
                  border: "1px solid grey",
                  height: "110px",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 3 }}
                >
                  <DashboardCustomizeIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Custodian
                </Typography>
              </Box>
              <Box
                component="div"
                item
                sx={{
                  p: 2,
                  border: "1px solid grey",
                  height: "110px",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 3 }}
                >
                  <DashboardCustomizeIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Custodian
                </Typography>
              </Box>
              <Box
                component="div"
                item
                sx={{
                  p: 2,
                  border: "1px solid grey",
                  height: "110px",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 3 }}
                >
                  <DashboardCustomizeIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  Custodian
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <TextField
                sx={{
                  width: { lg: "1210px", md: "610px", xs: "96%" },
                  mb: 2,
                  mr: 1,
                }}
                id="outlined-basic"
                label="Settlement"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: { lg: "1210px", md: "610px", xs: "96%" },
                  mb: 2,
                  mr: 1,
                }}
                id="outlined-basic"
                label="Limit"
                variant="outlined"
              />
              <FormControl
                sx={{
                  width: { lg: "1210px", md: "610px", xs: "96%" },
                  mb: 2,
                  mr: 1,
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  E-invoice Application
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={invoice}
                  label="Select an option"
                  onChange={handleInvoice}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{
                  mb: 10,
                  mt: 3,
                  width: 300,
                }}
              >
                Add Merchant
              </Button>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default App;
