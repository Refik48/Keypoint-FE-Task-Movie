import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import { FaArrowCircleLeft } from "react-icons/fa";

const DetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <button className="return-button" onClick={returnBack}>
          <FaArrowCircleLeft /> &nbsp; Return
        </button>
      </div>
      <MovieDetails movieId={movieId} />
    </>
  );
};

export default DetailPage;
