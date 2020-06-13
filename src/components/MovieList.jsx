import React from "react";
import _ from "lodash";
import { Box, Grid } from "@material-ui/core";

import MovieInfo from "./MovieInfo";

const MovieList = ({ movies, footer, showMoreInfo, showPoster }) => {
  if (_.get(movies, "Response") === "False") {
    return <Box>{_.get(movies, "Error")}</Box>;
  }

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {_.map(_.get(movies, "Search"), (movie) => {
          return (
            <Grid item xs={12}>
              <MovieInfo
                movie={movie}
                plot={"short"}
                showMoreInfo={showMoreInfo}
                showPoster={showPoster}
              />
            </Grid>
          );
        })}
      </Grid>
      {typeof footer === "function" && footer()}
    </React.Fragment>
  );
};

MovieList.defaultProps = {
  pageSize: 0,
};
export default MovieList;
