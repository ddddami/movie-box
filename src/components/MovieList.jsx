import { IMAGE_BASE_URL } from "../config";
import "./MovieList.css";
import imdb from "../assets/imdb-logo.png";
import orange from "../assets/orange.png";

const MovieList = ({ movies }) => {
  return (
    <div className="grid movies">
      {movies.map((movie) => (
        <div key={movie.id} className="movieCard">
          <img
            className="movieCard__poster"
            src={IMAGE_BASE_URL + movie.poster_path}
            alt=""
          />
          <p className="text-xs">USA, 2023</p>
          <p>{movie.title}</p>
          <div className="movieCard__detail">
            <div className="flex simple-flex">
              <img src={imdb} alt="" />
              <p className="text-sm">{`${movie.vote_average * 10} / 100`}</p>
            </div>
            <div className="flex simple-flex">
              <img src={orange} alt="" />
              <p className="text-sm">{`${movie.vote_average * 10}%`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
