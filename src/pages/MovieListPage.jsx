import { useEffect, useState } from "react";
import { DotWave } from "@uiball/loaders";
import MovieList from "../components/MovieList";
import MovieBanner from "../components/MovieBanner";
import apiClient from "../services/api-client";
import "../App.css";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get("/movie/now_playing?language=en-US&page=1")
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  if (isLoading)
    return (
      <div className="flex simple-flex" style={{ padding: "30rem" }}>
        <DotWave size={47} speed={1} color="black" />
      </div>
    );

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
