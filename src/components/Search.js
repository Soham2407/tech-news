import React from "react";
import { TextField } from "@mui/material";
import { useGlobalContext } from "../context";

const Search = () => {
  const { searchHandler, searchQuery } = useGlobalContext();
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};

export default Search;
