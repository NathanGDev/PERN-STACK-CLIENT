import React, { Component } from "react";
import Card from "./Card";

const Trending = (props) => {
  const fetcher = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=04c84c67ff5192f64d07c161cbe4ad97"
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("fetch error");
        } else return res.json();
      })
      .then((json) => {
        if (json.results.length === 0) {
          throw new Error("no results");
        } else {
          let dataTesting = json.results;
          console.log(dataTesting);
          json.results.forEach((card) => {
            let cardTitle = card.title;
            let cardPopularity = card.popularity;
            let cardOverview = card.overview;
            let cardPoster = card.poster_path;
            let cardDate = card.release_date;
            console.log(cardTitle);
            console.log(cardPopularity);
            console.log(cardOverview);
            let poster = `https://image.tmdb.org/t/p/w500${cardPoster}`;
            console.log(poster);
            console.log(cardDate);
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Trending Cards</h1>
      <h1>(WIP)</h1>
      {/* <button onClick={fetcher}>test</button> */}
    </div>
  );
};
export default Trending;
