import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1c1c1c",
        p: 6,
        color: "#f7f7f7",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={5}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h6" color="#0ebcbb" gutterBottom>
              About us
            </Typography>
            <Typography variant="body2">
              SatLab is a team of space- and satellite lovers developing the
              smallest Polish satellite - HYPE.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="#0ebcbb" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              al. Adama Mickiewicza 30, 30-059 Kraków
            </Typography>
            <Typography variant="body2">satlab@agh.edu.pl</Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="#0ebcbb" gutterBottom>
              Follow us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link
                href="https://www.facebook.com/satlab.agh"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Facebook />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/satlab_agh/"
                color="inherit"
              >
                <Instagram />
              </Link>
              <Link
                href="https://x.com/satlabagh"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <X />
              </Link>
              <Link
                href="https://www.linkedin.com/company/satlab-agh"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <LinkedIn />
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
