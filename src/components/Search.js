import React, { useEffect, useState } from "react";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getPopularMovies, searchMovies } from "../api/ApiService";
import Movie from "./Movie";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      searchMovies(searchTerm).then((resp) => {
        setSearch(resp.data.results);
        setSearchTerm("");
      });
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const checkDetail = (id) => {
    console.log(id);
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    getPopularMovies()
      .then((resp) => {
        console.log(resp.data.results);
        setSearch(resp.data.results);
      })
      .catch((err) => {
        console.log("populer hatasi");
      });
  }, []);

  return (
    <div>
      <div>
        <Form className="search-group" onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            autoFocus="autofocus"
            value={searchTerm}
            onChange={handleOnChange}
          ></input>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </div>
      <Container>
        <Row>
          {search.length > 0 &&
            search.map((item) => (
              <Col className="m-3" onClick={() => checkDetail(item.id)}>
                <Movie key={item.id} {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Search;
