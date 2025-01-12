import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import style from "./Highlights.module.css";
import imgUrl from "../../assets/satka.png";
import { useNavigate } from "react-router";

const Highlights = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/articles", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <img src={`${imgUrl}`} width={"200px"} alt="Logo" />
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            style={{
              fontWeight: "900",
              letterSpacing: "5px",
            }}
          >
            Our articles
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore why our actions stand out: adaptability, durability, and
            innovation. Read our articles to learn more about our journey.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {articles ? (
            articles.map((article) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={article.id}
                onClick={() => navigate(`/article/${article.id}`)}
              >
                <Stack
                  direction="column"
                  useFlexGap
                  className={style.articleBox}
                >
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                </Stack>
              </Grid>
            ))
          ) : (
            <h1>No articles yet.</h1>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Highlights;
