import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchDisplay from "../components/SearchDisplay";
import APIURL from "../helpers/environment";
import Favorite from "./Favorite";
import "./Favorites.css";

const Favorites = (props) => {
  const [movies, setMovie] = useState({ movie: [] });

  useEffect(() => {
    fetch(`${APIURL}/api/movies/getfavs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
    })
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .catch((err) => console.log(err));
  }, []);
  // console.log(movies);

  return (
    <div>
      <h1>FAVORITES PAGE</h1>
      <div className="favorites-div">
        {/* <Card testData={movies} /> */}
        <Favorite testData={movies} token={props.token} />
      </div>
    </div>
  );
};

export default Favorites;
