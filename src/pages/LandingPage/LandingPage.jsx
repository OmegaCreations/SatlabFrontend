import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router";
import Sponsors from "../../components/Sponsors/Sponsors";
import Highlights from "../../components/Highlights/Highlights";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Box
        id="hero"
        sx={{
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
          >
            <Typography
              variant="h1"
              sx={() => ({
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "3.5rem",
                },
              })}
            >
              Tak&nbsp;jest&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  fontSize: "inherit",
                }}
                style={{ color: "#0ebcbb" }}
              >
                lecimy&nbsp;w&nbsp;kosmos!
              </Typography>
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                width: { sm: "100%", md: "80%" },
              }}
              style={{ color: "#f7f7f7" }}
            >
              Explore our cutting-edge dashboard, delivering high-quality
              solutions tailored to your needs. Elevate your experience with
              top-tier features and services.
            </Typography>
            <Stack
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#0ebcbb" }}
                sx={{ minWidth: "fit-content" }}
              >
                <NavLink to={"/contact"}>Skontaktuj się z nami!</NavLink>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Sponsors />
      <Highlights />
      <Gallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
