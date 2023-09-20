import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import "./App.css";

const AUTH_TOKEN = import.meta.env.VITE_API_KEY;
const App = () => {
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
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};

export default App;
