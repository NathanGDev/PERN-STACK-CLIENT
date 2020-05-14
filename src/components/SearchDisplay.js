import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchFetcher from "./SearchFetcher";
import Card from "./Card";
import { Button } from "@material-ui/core";
import APIURL from "../helpers/environment";

const Movie = styled.div`
  margin: 5px;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  text-align: center;
  background: #48b1bf;
`;

const Poster = styled.img`
  width: calc(100% - 20px);
  height: calc(70% - 10px);
  margin: 10px 10px 0 10px;
  border-radius: 5px;
`;
const Title = styled.h5`
  margin: 5px 0 0 0;
  color: white;
`;
const Description = styled.p`
  height: 20%;
  color: white;
  overflow-wrap: break-word;
  overflow: scroll;
`;
const SearchDisplay = (props) => {
  const [favorite, setFavorite] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");

  // This function adds to the backend.
  function favoriteFunction() {
    console.log(props);

    fetch(`${APIURL}/api/movies/createfav`, {
      method: "POST",
      body: JSON.stringify({
        movie: {
          favorite: favorite,
          title: title,
          description: description,
          year: year,
          poster: poster,
          rating: rating,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setFavorite(true);
        setTitle(props.movie.title);
        setDescription(props.movie.overview);
        setYear(props.movie.release_date);
        setRating(props.movie.vote_average);
        setPoster(props.movie.poster_path);
      });
  }

  // This displays information that is searched.
  return (
    <Movie>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
      />
      <Title>{props.movie.original_title}</Title>
      <Description>{props.movie.overview}</Description>
      <Button className="fav-button" onClick={favoriteFunction}>
        Favorite
      </Button>
      {/* <Card movie={props.movie} /> */}
    </Movie>
  );
};
export default SearchDisplay;
