import { useParams } from "react-router";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { AccessTime, Edit } from "@mui/icons-material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./Article.module.css";

const Article = () => {
  const { id } = useParams();
  const title = `Tytuł Artykułu ${id}`;
  const createdAt = "05-01-2025";
  const updatedAt = "05-01-2025";

  const markdownContent = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
  return (
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
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ marginRight: 1 }} color="secondary" />
            <Typography variant="body1" color="#1c1c1c">
              {new Date(createdAt).toLocaleDateString()}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Edit sx={{ marginRight: 1 }} color="secondary" />
            <Typography variant="body1" color="#1c1c1c">
              {new Date(updatedAt).toLocaleDateString()}
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
          backgroundColor: "#fafafa", // background for content section
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
            {markdownContent}
          </ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
