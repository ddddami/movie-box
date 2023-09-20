import React from "react";
import { IMAGE_BASE_URL } from "../config";
import "./MovieBanner.css";

const MovieBanner = ({ movie }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}/original${movie.backdrop_path})`,
      }}
      className="movieBanner"
    >
      Movie Banner
    </section>
  );
};

export default MovieBanner;
