const apiKey = "5eaa7b4";
const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

const searchMovies = async (title, year, page) => {
  try {
    return await fetch(
      `${url}&s=${title}&y=${year}&page=${page}&type=movie`
    ).then((res) => res.json());
  } catch {
    return {};
  }
};

const fetchMovieInfo = async (imdbID) => {
  try {
    return await fetch(`${url}&i=${imdbID}&type=movie`).then((res) =>
      res.json()
    );
  } catch {
    return {};
  }
};

export { searchMovies, fetchMovieInfo };
