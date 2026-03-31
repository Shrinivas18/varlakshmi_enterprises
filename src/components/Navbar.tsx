import * as React from "react";
import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import HomeIcon from "@mui/icons-material/Home";

const pages = [{ name: "Home", path: "/" }];

function NavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#0b0b0b", // solid classic black
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 64, md: 72 },
          }}
        >
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

          {/* 🖥️ NAV ITEMS */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {pages.map((page) => (
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
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
