import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
} from "@mui/material";

import imgSatlab from "../../assets/satka.png";

const teams = [
  {
    title: "SATLAB AGH",
    description: `We are SatLab AGH - students’ team operating under the Space Technology Centre at AGH University of Krakow. Since 2022 we have been working on the HYPE project. 

HYPE is a Polish 1p PocketQube satellite, developed and assembled entirely in-house by our team. It measures 5x5x5 cm, which makes it the smallest Polish satellite to date.

The satellite’s primary payload is a one-of-a-kind “selfie-stick,” featuring a camera module mounted on a deployable boom. This camera faces a 240×240 LCD screen that displays images uploaded from the ground station. By showcasing those images in orbit, the team seeks to inspire and amplify educational efforts that highlight the accessibility of space.

In addition to its photographic capabilities, HYPE carries a miniature near-infrared (NIR) spectrometer operating in the 640–1050 nm range. This instrument enables experimental, large-area mosaic spectrometry of Earth’s surface, enabling monitoring of light pollution, tropical forests and volcanic eruptions.

The main goal of the HYPE mission is to highlight the potential of student-driven space initiatives and establish a foundation for future satellite projects at AGH University. The name “HYPE” encapsulates the team’s enthusiasm and ambition to spark excitement, inspire others and show that space is within reach.

Stay tuned for more projects! They are coming soon...
`,
    image: imgSatlab,
  },
];

const members = [
  {
    name: "Anna Kowalska",
    role: "Manager Projektu",
    photo: "/images/anna.jpg",
  },
  {
    name: "Jan Nowak",
    role: "Inżynier Oprogramowania",
    photo: "/images/jan.jpg",
  },
  { name: "Ewa Wiśniewska", role: "Grafik", photo: "/images/ewa.jpg" },
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        About us
      </Typography>

      <Stack
        spacing={4}
        direction={{ xs: "column", md: "row" }}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        sx={{ mt: 6 }}
      >
        {teams.map((team, index) => (
          <Card
            key={index}
            sx={{ width: { xs: "100%", md: "40%" }, height: "100%" }}
          >
            <CardMedia
              component="img"
              height="200"
              image={team.image}
              alt={team.title}
            />
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500 }}
                color="#0ebcbb"
                style={{ fontWeight: "900" }}
              >
                {team.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                {team.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600, mt: 8 }}
      >
        Członkowie zarządu
      </Typography>

      <Stack
        spacing={4}
        direction={{ xs: "column", sm: "row" }}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {members.map((member, index) => (
          <Card
            key={index}
            sx={{ width: { xs: "100%", sm: "30%" }, textAlign: "center", p: 3 }}
          >
            <Avatar
              src={member.photo}
              alt={member.name}
              sx={{ width: 120, height: 120, margin: "0 auto" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack> */}
    </Container>
  );
};

export default About;
