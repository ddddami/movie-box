import { IMAGE_BASE_URL } from "../config";
import MovieScore from "./MovieScore";
import Header from "./Header";
import "./MovieBanner.css";

const MovieBanner = ({ movie }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}/original${movie.backdrop_path})`,
      }}
      className="movieBanner"
    >
      <Header />
      <div className="movieBanner__content">
        <h2 className="movieBanner__heading mb-1">{movie.title}</h2>
        <MovieScore movie={movie} />
        <p className="text-sm mt-2">{movie.overview}</p>
        <button className="flex simple-flex mt-2 btn text-base movieBanner__button">
          WATCH TRAILER
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            width={20}
            style={{ marginLeft: "3px", verticalAlign: "middle" }}
          >
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default MovieBanner;
