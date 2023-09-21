import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    apiClient
      .get("/movie/" + id)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      MovieDetailPage - {id}
      <img src={Image.backdrop_path} alt="" />
    </div>
  );
};

export default MovieDetailPage;
