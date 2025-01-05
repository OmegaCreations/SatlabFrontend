import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
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
              O nas
            </Typography>
            <Typography variant="body2">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="#0ebcbb" gutterBottom>
              Skontaktuj się
            </Typography>
            <Typography variant="body2">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2">Email: info@example.com</Typography>
            <Typography variant="body2">Phone: +1 234 567 8901</Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="#0ebcbb" gutterBottom>
              Zaobserwuj nas
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/" color="inherit">
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
