import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DotWave } from "@uiball/loaders";
import apiClient from "../services/api-client";
import { getOriginalImage } from "../services/image-service";
import "../components/MovieDetail.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getReleaseYear = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.getFullYear();
  };

  const formatRuntime = (mins) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${hours}h ${minutes}m`;
  };
  useEffect(() => {
    apiClient
      .get("/movie/" + id)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      })
      .finally(() => setLoading(false));
  }, []);
  if (isLoading)
    return (
      <div className="flex simple-flex" style={{ padding: "30rem" }}>
        <DotWave size={47} speed={1} color="black" />
      </div>
    );
  return (
    <div className="movieDetail">
      <img
        className="movieDetail__banner"
        src={getOriginalImage(movie.backdrop_path)}
        alt=""
      />
      <p className="text-sm">
        {movie.title} · {getReleaseYear(movie.release_date)} · PG-18 ·{" "}
        {formatRuntime(movie.runtime)}
      </p>
      <p className="text-sm">{movie.overview}</p>
      Directors: Michael Philippou, Danny Philippou Writers: Danny Philippou,
      Bill Hinzman
    </div>
  );
};

export default MovieDetailPage;
