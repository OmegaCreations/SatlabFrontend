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

const teams = [
  {
    title: "Payload",
    description: `To zespół zajmujący się załadunkiem satelity, odpowiada za techniczny rozwój, kontrolę i obsługę podzespołów pełniących misje na orbicie.

W przypadku satelity HYPE moduły funkcjonalne to miniaturowy spektroskop NIR, kamera z selfie-stickiem oraz ekran. Każdy z modułów przechodzi fazę testów i kalibracji przygotowujących je do pracy w warunkach pozaziemskich.

Zespół payload-u czuwa również nad odpowiednią interpretacją pozyskanych danych badawczych.`,
    image: imgPayload,
  },
  {
    title: "Communications",
    description: `
Są odpowiedzialni za opracowywanie technik łączności z satelitą. W trakcie trwania projektu, zaimplementowali schemat wielodostępu do łącza przy użyciu modulacji LoRa.

W plan ich działań wpisuje się również stworzenie stacji naziemnej złożonej z anten dla pasma UHF (~400MHz) oraz anteny pasma S (2~ 4 GHz).

W ramach sekcji integrujemy RF Hardware dostarczony przez sekcję Elektroniki z software’em napisanym przez OBSW.

Poprzez pisanie oprogramowania do obsługi logiki linku oraz niskopoziomowej obsługi zainstalowanego w satelicie transceivera.`,
    image: imgCommunications,
  },
  {
    title: "Software",
    description: `Zespół Software zajmuje się utworzeniem oprogramowania do kontroli misji (satelity) z poziomu interfejsu użytkownika w aplikacji webowej.

Dba o architekturę oprogramowania działającego w tle na serwerach na ziemi, która pozwoli nam na skrupulatne sprawdzanie stanu satelity poprzez logi wyświetlane w webowej aplikacji.

Aplikacja będzie zapewniała podgląd danych. Spora większość pracy dzieje się poza kulisami i jest związana bezpośrednio z back-endem, który ma za zadanie obsługiwać dane, które będziemy dostawać, zaczynając od zapisu do baz danych, przechodząc przez odpowiednie sprasowanie ich, aż do momentu wyświetlenia na stronie.`,
    image: imgSoftware,
  },
  {
    title: "ADCS",
    description: `Attitude Determination and Control System – są odpowiedzialna za określanie i kontrolę położenia przestrzennego satelity. Wykorzystując zmienne pole magnetyczne na niskiej orbicie okołoziemskiej oraz specjalne cewki umieszczone w ścianach satelity.

Starają się zmniejszyć prędkość obrotową satelity, uzyskując tym samym pewien stopień kontroli nad orientacją.

Ma to znaczenie przede wszystkim dla wykonywanych przez spektroskop pomiarów — do przeprowadzenia pełnej analizy zebranych danych naukowych, potrzebna jest informacja o orientacji satelity względem Ziemi, by określić, w który punkt na powierzchni skierowany był instrument. Pozwoli to także na wykonywanie zdjęć kamerą selfie w momencie, gdy w tle widoczna będzie Ziemia.`,
    image: imgADCS,
  },
  {
    title: "OBS",
    description: `Zajmują się tworzeniem oprogramowania dla komputera pokładowego satelity. Komputer pokładowy łączy ze sobą wszystkie zewnętrzne komponenty, komunikuje je ze sobą, zarządza nimi, przez co można go porównać do ludzkiego mózgu, jako takiego centrum dowodzenia całym organizmem. Software rozwijamy na platformie STM32 używając C++ I bazując na systemie czasu rzeczywistego freeRTOS.

Każdy zewnętrzny komponent zgrupowany jest w tak zwane „zadanie”, naszą rolą jest napisanie konkretnych funkcji obsługujących dany komponent i kolejno synchronizacja zadań między sobą oraz ich wspólna komunikacja. Tak więc jednym z naszych zobowiązań jest pisanie sterowników dla urządzeń zewnętrznych (takich jak na przykład czujnik temperatury, kamera czy czujnik przemieszczenia) tak, abyśmy byli w stanie zintegrować je z procesorem`,
    image: imgOBS,
  },
  {
    title: "Elektronika",
    description: `Zespół elektroniki odpowiedzialny jest za stworzenie układów elektronicznych spełniających założenie misji, w naszym przypadku jest to wykonywanie zdjęć na tle ziemi oraz dokonywanie różnego rodzaju pomiarów przy pomocy spektroskopu.

Hype składa się z płytek drukowanych PCB takich jak:

Core Board - jest to główna płytka w całej satelicie zawierająca sekcję zasilania, sekcję komunikacji oraz sekcję kontrolno-sterującą gdzie znajduje się mikrokontroler, czyli mózg całej satelity
Payload - jest to płytka umożliwiająca poprawną pracę kamery, wyświetlacza oled oraz spektroskopu
Side Panels - są to płytki znajdujące się na ścianach bocznych satelity. Zawierają m.in. ogniwa słoneczne, które generują energię elektryczną oraz cewki umożliwiające obrót satelity.`,
    image: imgElektronika,
  },
  {
    title: "Mechanika",
    description: `Zadaniem działu mechaniki jest projektowanie elementów strukturalnych aparatury laboratoryjnej oraz satelity.

Od pomysłu, przez projekt, zamówienie i koordynowanie wytworzenia potrzebnej części, dbamy o to, by wszystkie komponenty innych działów trzymały się na swoim miejscu i wytrzymały trudne warunki na orbicie.`,
    image: imgMechanika,
  },
  {
    title: "Promocja i organizacja",
    description: `To dynamiczny zespół, którego głównym celem jest budowanie pozytywnego wizerunku naszego Koła w środowisku akademickim i poza nim.

Ich działalność skupia się na szerzeniu wiedzy o naszych projektach, osiągnięciach i inicjatywach, a także na angażowaniu zarówno członków Koła, jak i szerszej społeczności w nasze działania. Organizują wydarzenia, prowadzą prelekcje oraz wiele, wieeele innych!`,
    image: imgPR,
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
        O nas
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

      <Typography
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
      </Stack>
    </Container>
  );
};

export default About;
