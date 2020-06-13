import React from "react";
import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import _ from "lodash";

import Search from "./Search";
import MovieList from "./MovieList";
import Modal from "./Modal";
import { searchMovies, fetchMovieInfo } from "./../apis/obdb";

class Screen extends React.PureComponent {
  state = {
    title: "",
    year: "",
    movies: [],
    page: 1,
    movieInfo: {},
    visible: false,
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleYearChange = (e) => {
    this.setState({
      year: e.target.value,
    });
  };

  handleSearch = () => {
    this.setState({ page: 1 }, this.fetchMovies);
  };

  handlePageChange = (e, page) => {
    this.setState({ page }, this.fetchMovies);
  };

  handleClose = () => {
    this.setState({
      visible: false,
      movieInfo: {},
    });
  };

  fetchMovies = async () => {
    const { title, year, page } = this.state;
    const res = await searchMovies(title, year, page);
    this.setState({ movies: res });
  };

  fetchMoreInfo = async (imdbID) => {
    this.setState({ visible: true });
    const res = await fetchMovieInfo(imdbID);
    this.setState({ movieInfo: res });
  };

  renderFooter = () => {
    const { movies, page } = this.state;
    const count = _.floor(_.divide(_.get(movies, "totalResults", 0), 10));

    return count ? (
      <Pagination
        page={page}
        count={count + 1}
        color="primary"
        onChange={this.handlePageChange}
      />
    ) : (
      ""
    );
  };

  render() {
    const { showPoster } = this.props;
    const { title, year, movies, visible, movieInfo } = this.state;
    return (
      <Box p={3}>
        <Search
          title={title}
          year={year}
          onTitleChange={this.handleTitleChange}
          onYearChange={this.handleYearChange}
          onSearch={this.handleSearch}
        />
        <MovieList
          showPoster={showPoster}
          movies={movies}
          pageSize={10}
          onPaginationChange={this.fetchMovies}
          footer={this.renderFooter}
          showMoreInfo={this.fetchMoreInfo}
        />
        <Modal movie={movieInfo} open={visible} onClose={this.handleClose} />
      </Box>
    );
  }
}

export default Screen;
