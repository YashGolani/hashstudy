import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DiamondIcon from "@mui/icons-material/Diamond";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import CampaignIcon from "@mui/icons-material/Campaign";

const drawerWidth = 250;

function ResponsiveDrawer(props) {
  const style = {
    width: "100%",
    maxWidth: 250,
    height: "auto",
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          sx={{ color: "#e6ac00" }}
        >
          <DiamondIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="header"
          sx={{ fontSize: "15px", color: "#e6ac00", fontWeight: "12px" }}
        >
          BKS My Gold Pvt Ltd
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={style} component="div" aria-label="mailbox folders">
        <ListItem button>
          <span>
            <DashboardIcon sx={{ mr: 1 }} />
          </span>
          Dashboard
        </ListItem>
        <ListItem button>
          <span>
            <ManageAccountsIcon sx={{ mr: 1 }} />
          </span>
          User management
        </ListItem>
        <ListItem button>
          <span>
            <ListAltIcon sx={{ mr: 1 }} />
          </span>
          Tax Setting
        </ListItem>
        <ListItem button>
          <span>
            <AddShoppingCartIcon sx={{ mr: 1 }} />
          </span>
          E-Commerce
        </ListItem>
        <ListItem button>
          <span>
            <CampaignIcon sx={{ mr: 1 }} />
          </span>
          Promotional Setting
        </ListItem>
        <ListItem button>
          <span>
            <ReportIcon sx={{ mr: 1 }} />
          </span>
          Report
        </ListItem>
        <ListItem button>
          <span>
            <SettingsIcon sx={{ mr: 1 }} />
          </span>
          Setting
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex" },
              alignItems: { xs: "center" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#e6ac00" }}
            >
              Wellcome, Yash Golani
            </Typography>
          </Box>

          <Box sx={{}}>
            <IconButton
              sx={{ color: "#e6ac00" }}
              aria-label="open drawer"
              edge="start"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              sx={{ color: "#e6ac00" }}
              aria-label="open drawer"
              edge="start"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
