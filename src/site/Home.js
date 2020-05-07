import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "../components/Card";
import TrendingFetcher from "../components/TrendingFetcher";

export default function Home(props) {
  return (
    <div className="main">
      <Header clearToken={props.clearToken} />
      <div className="mainDiv">
        <h1>Movies</h1>
        <p>Testing for the movie home page</p>
        <TrendingFetcher />
        <div>
          <h2>Movie Section</h2>
        </div>
      </div>
    </div>
  );
}
