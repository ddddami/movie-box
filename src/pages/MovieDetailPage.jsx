import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DotWave } from "@uiball/loaders";
import apiClient from "../services/api-client";
import { getOriginalImage } from "../services/image-service";
import "../components/MovieDetail.css";
import logo from "../assets/moviebox-logo.svg";

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
    <div className="container flex">
      <div className="sidebar w30">
        <div className="flex simple-flex p-5">
          <img className="mr-4 icon" src={logo} alt="" />
          Moviebox
        </div>
        <div className="nav">
          <ul className="nav_items">
            <li className="nav_link flex" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-4 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p className="text-md">Home</p>
            </li>
            <li className="nav_link flex active" style={{cursor: 'pointer'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-4 ml-4"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <p className="text-md">Movies</p>
            </li>
            <li className="nav_link flex" style={{cursor: 'pointer'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-4 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              <p className="text-md">TV Series</p>
            </li>
            <li className="nav_link flex" style={{cursor: 'pointer'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-4 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <p className="text-md">Upcoming</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="movieDetail mt-2 mr-5">
        {/* MovieDetailPage - {id} */}
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
    </div>
  );
};

export default MovieDetailPage;
