import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import MovieBanner from "../components/MovieBanner";
import "../App.css";

const AUTH_TOKEN = import.meta.env.VITE_API_KEY;
const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: { Authorization: "Bearer " + AUTH_TOKEN },
        }
      )
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  if (isLoading) return <p>Loading....</p>;

  const getRandomMovie = () => {
    return movies[Math.ceil(Math.random() * movies.length)];
  };
  return (
    <main>
      <MovieBanner movie={getRandomMovie()} />
      <MovieList movies={movies} />
    </main>
  );
};

export default MovieListPage;
