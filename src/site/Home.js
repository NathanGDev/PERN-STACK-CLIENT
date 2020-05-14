import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Card from "../components/Card";
import SearchFetcher from "../components/SearchFetcher";
import Favorites from "./Favorites";
import Search from "../components/Search";
import NavBar from "./NavBar";

export default function Home(props) {
  return (
    <Router>
      <div className="main">
        <NavBar clearToken={props.clearToken} />
        <div className="mainDiv">
          <div>
            <Switch>
              <Route exact path="/favorites">
                <Favorites token={props.token} />
              </Route>
              <Route exact path="/">
                <Search token={props.token} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
