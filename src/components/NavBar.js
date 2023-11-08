import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useApp } from "../context/AppProvider";

export const NavBar = () => {
  const { state } = useApp();
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Amazoon
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {
                setShowDrawer(true);
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="top"
              open={showDrawer}
              onClose={() => {
                setShowDrawer(false);
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <nav aria-label="secondary mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate("/");
                          setShowDrawer(false);
                        }}
                      >
                        <ListItemText primary="Home" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate("/search");
                          setShowDrawer(false);
                        }}
                      >
                        <ListItemText primary="Search" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Box>
            </Drawer>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Amazoon
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                navigate("/search");
              }}
            >
              Search
            </Button>
          </Box>

          {/* Nav Bar Right Side */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                navigate("/wishlist");
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              <Badge badgeContent={state.basket.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
