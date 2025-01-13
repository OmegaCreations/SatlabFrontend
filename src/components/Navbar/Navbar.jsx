import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import style from "./Navbar.module.css";
import { NavLink } from "react-router";
import React from "react";
import logoUrl from "@/assets/logo.png";

const pages = ["Dashboard", "About us", "Teams", "Contact"];
const pagesLinks = ["", "about", "teams", "contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={style.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SATLAB AGH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, idx) => (
                <NavLink
                  key={page}
                  to={`/${pagesLinks[idx]}`}
                  className={({ isActive }) =>
                    isActive
                      ? `${style.active} ${style.navItemSx}`
                      : style.navItemSx
                  }
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <p>{page}</p>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <img src={logoUrl} style={{ width: "30px", marginRight: "20px" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SATLAB AGH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, idx) => (
              <NavLink
                key={page}
                to={`/${pagesLinks[idx]}`}
                className={({ isActive }) =>
                  isActive ? `${style.active} ${style.navItem}` : style.navItem
                }
              >
                <Button onClick={handleCloseNavMenu}>
                  <p>{page}</p>
                </Button>
              </NavLink>
            ))}

            <NavLink
              target="_blank"
              to={`https://wiki.satlab.agh.edu.pl/s/docs`}
              className={({ isActive }) =>
                isActive ? `${style.active} ${style.navItem}` : style.navItem
              }
            >
              <Button onClick={handleCloseNavMenu}>
                <p>Documentation</p>
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
