import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Card from "../components/Card";
import SearchFetcher from "./SearchFetcher";
import Trending from "./Trending";

export default function Home(props) {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Movies</h1>
        <p>
          <strong>Search for a movie you want to add to your favorites!</strong>
        </p>
        <SearchFetcher token={props.token} />
        <div>
          <h2>Trending Movie Section</h2>
          <Trending test="test" />
        </div>
      </div>
    </div>
  );
}
