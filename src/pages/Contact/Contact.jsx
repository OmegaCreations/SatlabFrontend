import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, X } from "@mui/icons-material";
import logoWide from "../../assets/logo_wide.png";

const Contact = () => {
  return (
    <Container
      sx={{ py: 8 }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <img src={logoWide} style={{ width: 300 }} />
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 900, color: "#f7f7f7", letterSpacing: "5px" }}
      >
        Contact with us!
      </Typography>

      <div>
        <Typography variant="body1" align="center" paragraph>
          If you have business inquiries or other questions, please contact us
          at:
        </Typography>

        <Typography variant="h5" align="center" sx={{ fontWeight: 500, mb: 4 }}>
          <Link
            href="mailto:satlab@agh.edu.pl"
            color="#0ebcbb"
            underline="hover"
          >
            satlab@agh.edu.pl
          </Link>
        </Typography>
      </div>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Stack direction="row" spacing={4}>
          <Link
            href="https://www.facebook.com/satlab.agh"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Facebook fontSize="large" />
          </Link>
          <Link
            href="https://www.instagram.com/satlab_agh/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Instagram fontSize="large" />
          </Link>
          <Link
            href="https://x.com/satlabagh"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <X fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/satlab-agh"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <LinkedIn fontSize="large" />
          </Link>
        </Stack>
      </Box>
      <div>
        <Typography variant="body1" align="center">
          Resources contain logotypes and photos to promotional use.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="contained"
            target="_blank"
            href="https://drive.google.com/drive/folders/1m3XWMPyB9qua7BJcUK8dTMzpjnew58r1"
            download
            style={{ backgroundColor: "#0ebcbb" }}
          >
            Download resources
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default Contact;
