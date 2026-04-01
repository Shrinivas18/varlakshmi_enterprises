import * as React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import HomeIcon from "@mui/icons-material/Home";

function NavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#0b0b0b",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 3,
          minHeight: { xs: 64, md: 72 },
        }}
      >
        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Varlakshmi Logo"
            style={{
              height: "50px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* HOME ICON */}
        <Button
          component={Link}
          to="/"
          sx={{
            minWidth: "auto",
            color: "#e5e5e5",
            borderRadius: "6px",
            p: 1,
            transition: "all 0.25s ease",

            "&:hover": {
              color: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          <HomeIcon fontSize="medium" />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;