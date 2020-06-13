import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";

const Search = ({ title, year, onTitleChange, onYearChange, onSearch }) => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <TextField label="Movie title" value={title} onChange={onTitleChange} />
      </Grid>
      <Grid item>
        <TextField
          label="Year"
          type="number"
          value={year}
          onChange={onYearChange}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={onSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
