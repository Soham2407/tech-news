import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Pagination = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        my: 4,
      }}
    >
      <Button variant="contained">Prev</Button>
      <Typography variant="body2" color="gray">
        1 - 50
      </Typography>
      <Button variant="contained">Next</Button>
    </Box>
  );
};

export default Pagination;
