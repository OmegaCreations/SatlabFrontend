import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";

const whiteLogos = [
  "https://static.wikia.nocookie.net/logopedia/images/6/62/TVN_Grupa_Discovery.svg/revision/latest?cb=20240304163853&path-prefix=uk",
];

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 0.7,
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
