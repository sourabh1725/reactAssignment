import React from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";

const fields = [
  "Runtime",
  "Website",
  "Writer",
  "imdbID",
  "imdbRating",
  "imdbVotes",
  "Released",
  "Actors ",
  "Awards",
  "BoxOffice",
  "Country",
  "DVD",
  "Director",
  "Genre",
  "Language",
  "Metascore",
  "Plot",
  "Production",
  "Rated",
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 8,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 150,
    height: 223,
  },
}));

const MovieInfo = ({ movie, plot, showMoreInfo, showPoster }) => {
  const { imdbID, Poster, Title, Year, imdbRating } = movie;
  const classes = useStyles();
  const rating =
    imdbRating && imdbRating !== "N/A" ? _.toNumber(imdbRating) : 0;
  const boxoffice = rating >= 7 ? "hit" : "flop";

  return (
    <Card className={classes.root}>
      {showPoster && (
        <CardMedia className={classes.cover} image={Poster} title={Title} />
      )}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {Title} ({Year})
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            imdbID: {imdbID}
          </Typography>
          {!showPoster && plot === "short" && (
            <Typography variant="subtitle1" color="textSecondary">
              <Button onClick={() => showMoreInfo(imdbID)}>More Info</Button>
            </Typography>
          )}
          {plot === "long" && (
            <React.Fragment>
              <Typography variant="subtitle1" color="textSecondary">
                Box Office: {boxoffice}
              </Typography>
              {_.map(fields, (field) => {
                return (
                  <Typography variant="body2" color="textSecondary">
                    {`${field} : ${_.get(movie, field, "")}`}
                  </Typography>
                );
              })}
            </React.Fragment>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default MovieInfo;
