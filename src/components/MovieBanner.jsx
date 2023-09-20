import { IMAGE_BASE_URL } from "../config";
import MovieScore from "./MovieScore";
import "./MovieBanner.css";

const MovieBanner = ({ movie }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}/original${movie.backdrop_path})`,
      }}
      className="movieBanner"
    >
      <div className="movieBanner__content">
        <h2 className="movieBanner__heading mb-1">{movie.title}</h2>
        <MovieScore movie={movie} />
        <p className="text-sm mt-2">{movie.overview}</p>
        <button className="mt-2 btn text-base movieBanner__button">
          WATCH TRAILER
        </button>
      </div>
    </section>
  );
};

export default MovieBanner;
