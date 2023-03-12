import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../context";

const News = () => {
  const { news, noOfPages } = useGlobalContext();
  return (
    <div>
      {news.map((item) => (
        <Paper sx={{ mb: 4, p: 2 }} elevation={3}>
          <Typography variant="h5">{item.title}</Typography>
          <Box>
            <Typography variant="body2" component="span">
              By&nbsp;
              <Box component="span" sx={{ fontWeight: "bold" }}>
                {item.author} | {item.num_comments}&nbsp;
              </Box>
              comments
            </Typography>
          </Box>
          <Box
            mt={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button sx={{ p: 0 }}>READ MORE</Button>
            <Button sx={{ p: 0 }} color="error">
              REMOVE
            </Button>
          </Box>
        </Paper>
      ))}
    </div>
  );
};

export default News;
