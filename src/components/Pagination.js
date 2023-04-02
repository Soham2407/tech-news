import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../context";

const Pagination = () => {
  const { page, noOfPages, prevPageHandler, nextPageHandler } =
    useGlobalContext();
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
      <Button variant="contained" onClick={prevPageHandler}>
        Prev
      </Button>
      <Typography variant="body2" color="gray">
        {page + 1} - {noOfPages}
      </Typography>
      <Button variant="contained" onClick={nextPageHandler}>
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
