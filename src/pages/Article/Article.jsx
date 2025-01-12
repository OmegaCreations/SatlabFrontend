import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Typography } from "@mui/material";
import { AccessTime, Edit } from "@mui/icons-material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./Article.module.css"; // Załóżmy, że masz plik CSS do stylowania

const Article = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({
    title: "",
    description: "",
    content: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8080/api/articles/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const data = await response.json();
        setArticle({
          title: data.title,
          description: data.description,
          content: data.content,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        });
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return "Loading...";
  return article ? (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom color="#1c1c1c">
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {article.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ marginRight: 1 }} color="secondary" />
            <Typography variant="body1" color="#1c1c1c">
              {new Date(
                article.createdAt.split(".")[0].replace(" ", "T")
              ).toLocaleDateString()}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Edit sx={{ marginRight: 1 }} color="secondary" />
            <Typography variant="body1" color="#1c1c1c">
              {new Date(
                article.updatedAt.split(".")[0].replace(" ", "T")
              ).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#fafafa",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 960,
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={style.markdownContent}
          >
            {article.content}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  ) : (
    <h1>No article.</h1>
  );
};

export default Article;
