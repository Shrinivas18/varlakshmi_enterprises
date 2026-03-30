import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [{ name: "Home", path: "/" }];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "#00e5ff",
              textDecoration: "none",
            }}
          >
            VARLAKSHMI
          </Typography>

          {/* MOBILE */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Typography sx={{ color: "#00e5ff" }}>Home</Typography>
          </Box>

          {/* DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{ color: "white" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
