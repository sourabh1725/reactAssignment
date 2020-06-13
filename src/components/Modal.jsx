import React from "react";
import { Dialog } from "@material-ui/core";
import MovieInfo from "./MovieInfo";

const Modal = ({ open, onClose, movie }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={"lg"}>
      <MovieInfo movie={movie} plot={"long"} showPoster />
    </Dialog>
  );
};

export default Modal;
