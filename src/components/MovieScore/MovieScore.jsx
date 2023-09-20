import "./MovieScore.css";
import imdb from "../../assets/imdb-logo.png";
import orange from "../../assets/orange.png";

const MovieScore = ({ movie }) => {
  return (
    <div className="movieScore">
      <div className="flex simple-flex">
        <img src={imdb} alt="" />
        <p className="text-sm">{`${movie.vote_average * 10} / 100`}</p>
      </div>
      <div className="flex simple-flex">
        <img src={orange} alt="" />
        <p className="text-sm">{`${movie.vote_average * 10}%`}</p>
      </div>
    </div>
  );
};

export default MovieScore;
