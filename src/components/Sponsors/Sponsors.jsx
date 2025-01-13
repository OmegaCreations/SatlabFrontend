import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import mediaSponsor from "../../../src/assets/partner.png";
import mediaSponsor2 from "../../../src/assets/partner2.png";

const whiteLogos = [mediaSponsor, mediaSponsor2];

const logoStyle = {
  width: "auto",
  height: "100px",
  margin: "32px 32px",
  opacity: 1,
  filter: "grayscale(1)",
};

const Sponsors = () => {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        style={{
          color: "#f7f7f7",
          fontSize: "1.5em",
          fontWeight: "900",
          letterSpacing: "5px",
        }}
      >
        Media sponsor
      </Typography>
      <Grid container sx={{ justifyContent: "center", mt: 0.5, opacity: 0.6 }}>
        {whiteLogos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sponsors;
