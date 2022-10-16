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
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import HailIcon from "@mui/icons-material/Hail";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MapContainer from "./components/MapContainer";
import { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">
      <ResponsiveDrawer />
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
              width: { lg: "600px", md: "600px", xs: "100%" },
              mb: 2,
              mr: 1,
            }}
            id="outlined-basic"
            label="NAME OF MERCHANT"
            variant="outlined"
          />
          <TextField
            sx={{ width: { lg: "600px", md: "600px", xs: "100%" }, mb: 2 }}
            id="outlined-basic"
            label="PHONE NUMBER"
            variant="outlined"
          />
          <TextField
            sx={{ width: { lg: "600px", md: "600px", xs: "100%" } }}
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
              width: { lg: "600px", md: "600px", xs: "100%" },
              mb: 2,
              mr: 1,
            }}
            id="outlined-basic"
            label="ADHAAR NUMBER"
            variant="outlined"
          />
          <TextField
            sx={{ width: { lg: "600px", md: "600px", xs: "100%" }, mb: 2 }}
            id="outlined-basic"
            label="GST NUMBER"
            variant="outlined"
          />
          <TextField
            sx={{
              width: { lg: "600px", md: "600px", xs: "100%" },
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
            <Box sx={{ mt: 3, mb: 3 }}>
              <MapContainer setLat={setLat} setLong={setLong} />
            </Box>
          </Typography>
          <TextField
            // sx={{ width: "1210px" }}
            fullWidth
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
            sx={{ color: "#e6ac00" }}
          >
            4.Retainer Details
          </Typography>

          <FormControl
            sx={{
              width: { lg: "600px", md: "600px", xs: "100%" },
              mb: 2,
              mr: 1,
            }}
          >
            <InputLabel id="demo-simple-select-label">Retainer Type</InputLabel>
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
            sx={{ width: { lg: "600px", md: "600px", xs: "100%" }, mb: 2 }}
            id="outlined-basic"
            label="Retainer Value"
            variant="outlined"
          />
          <TextField
            sx={{ width: { lg: "600px", md: "600px", xs: "100%" }, mr: 1 }}
            id="outlined-basic"
            label="Buy Commission"
            variant="outlined"
          />
          <TextField
            sx={{ width: { lg: "600px", md: "600px", xs: "100%" } }}
            id="outlined-basic"
            label="Sell Commission"
            variant="outlined"
          />
        </Box>
        <Box sx={{ mt: 3 }}>
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
                width: "130px",
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
              component="span"
              sx={{
                p: 2,
                border: "1px solid grey",
                height: "110px",
                width: "130px",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ ml: 2.5 }}
              >
                <DeliveryDiningIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontWeight: 600 }}
              >
                Delivery
              </Typography>
            </Box>
            <Box
              component="span"
              sx={{
                p: 2,
                border: "1px solid grey",
                height: "110px",
                width: "130px",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ ml: 2.5 }}
              >
                <HailIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontWeight: 600 }}
              >
                Pick Up
              </Typography>
            </Box>
            <Box
              component="span"
              sx={{
                p: 2,
                border: "1px solid grey",
                height: "110px",
                width: "130px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ ml: 2.5 }}
              >
                <FilterAltIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontWeight: 600 }}
              >
                Refiner
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <TextField
              sx={{
                width: { lg: "400px", md: "400px", xs: "100%" },
                mb: 2,
                mr: 1,
              }}
              id="outlined-basic"
              label="Settlement"
              variant="outlined"
            />
            <TextField
              sx={{
                width: { lg: "400px", md: "400px", xs: "100%" },
                mb: 2,
                mr: 1,
              }}
              id="outlined-basic"
              label="Limit"
              variant="outlined"
            />
            <FormControl
              sx={{
                width: { lg: "400px", md: "400px", xs: "100%" },
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
                // value={age}
                label="Select an option"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="success"
            sx={{
              ml: { lg: 55, md: 55 },
              mb: 10,
              mt: 3,
              width: 300,
            }}
          >
            Add Merchant
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default App;
