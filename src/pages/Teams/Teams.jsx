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

import imgPayload from "../../assets/payload.jpg";
import imgCommunications from "../../assets/communications.png";
import imgSoftware from "../../assets/software.jpg";
import imgADCS from "../../assets/adcs.jpg";
import imgOBS from "../../assets/obs.jpg";
import imgElektronika from "../../assets/elektronika.jpg";
import imgMechanika from "../../assets/mechanika.png";
import imgPR from "../../assets/pr.png";
import imgSatlab from "../../assets/satka.png";

const teams = [
  {
    title: "Payload",
    description: `The heart of the mission! Whether it’s taking selfies with the camera mounted on a flex cable or analysing the Earth’s surface with a tiny spectrometer, the Payload team designs and integrates the satellite’s most mission-critical instruments.`,
    image: imgPayload,
  },
  {
    title: "COMMS (Communications)",
    description: `Our hotline to space! The COMMS team crafts robust radio links using LoRa and FSK modulation for high-speed data downlinks. They make sure that all the bytes of telemetry, photos and instructions are sent back and forth clear as day.`,
    image: imgCommunications,
  },
  {
    title: "Software",
    description: `Bringing the satellite to life! This team develops the brains of the mission with custom code, managing everything from memory allocation to precise service-based architecture. They make sure our single microcontroller can handle everything from selfies to spectroscopic data.`,
    image: imgSoftware,
  },
  {
    title: "ADCS (Attitude Determination and Control System)",
    description: `Keeping the satellite steady! ADCS combines magnetorquers, MEMS gyroscopes, and light sensors to control and monitor orientation. This team ensures that the satellite does not spin uncontrollably and points in the right way, whether for communication, selfies or spectroscopic measurements.`,
    image: imgADCS,
  },
  {
    title: "OBSW (On-Board Software)",
    description: `The satellite's inner voice! Team ensures that all the subsystems work together seamlessly, using FreeRTOS to coordinate tasks, data routing, and critical decision-making- all in real time, even 500 km above Earth.`,
    image: imgOBS,
  },
  {
    title: "Electronics",
    description: `Powering the mission! From PCB panels to DC/DC converters, this team builds the circuitry that keeps the satellite powered and operational. They ensure that every voltage line is protected, stable, and ready to perform in the harsh environment of space.`,
    image: imgElektronika,
  },
  {
    title: "Mechanics",
    description: `Crafting the skeleton of our satellite! This team makes sure that every panel, bolt, and cage element is sturdy, lightweight, and ready to withstand its journey into space. They're the architects behind the spacecraft’s structure.`,
    image: imgMechanika,
  },
  {
    title: "PR+ORG (Public Relations and Organization)",
    description: `Our storytellers and logistics! They turn our technical triumphs into accessible narratives. They run workshops, manage social media, and connect with the public. This team ensures the world knows why our satellite is important and how it’s making a difference.`,
    image: imgPR,
  },
  {
    title: "Thermal",
    description:
      "Cool under pressure- literally! This team carries out simulations and makes adjustments to ensure that everything is kept at just the right temperature.",
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

const Teams = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        Our Teams
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

      {/* może do wdrożenia w przyszłości */}
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

export default Teams;
