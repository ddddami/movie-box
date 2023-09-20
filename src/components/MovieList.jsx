import MovieScore from "./MovieScore";
import { IMAGE_BASE_URL } from "../config";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      <div className="movies__header  flex simple-flex">
        <h2 className="movies__heading text-lg">Featured Movies</h2>
        <a className="link text-sm" href="">
          See more
        </a>
      </div>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movieCard">
            <img
              className="movieCard__poster"
              src={IMAGE_BASE_URL + "/w500" + movie.poster_path}
              alt=""
            />
            <p className="text-xs">USA, 2023</p>
            <p>{movie.title}</p>
            <MovieScore movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
