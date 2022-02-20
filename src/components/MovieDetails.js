import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getMovieDetail } from "../api/ApiService";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetail(movieId).then((resp) => {
      setMovie(resp.data);
      console.log(resp.data);
      console.log(movie.poster_path);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={7}>
          <div className="div-img">
            <img src={IMG_API + movie.poster_path} alt={movie.title} />
          </div>
        </Col>
        <Col lg={5}>
          <div>
            <ul>
              <li>
                <h3>{movie.title}</h3>{" "}
              </li>
              <li>{movie.overview}</li>
              <li>IMDB Vote: {movie.vote_average}</li>
              <li>Release Date: {movie.release_date}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
