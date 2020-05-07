import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./login/Auth";
import Home from "./site/Home";
import APIURL from "./helpers/environment";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [status, setStatus] = useState("");

  const componentDidMount = () => {
    fetch(`${APIURL}/api/movies`)
      .then((response) => response.json())
      .then((movies) => setStatus({ movies }));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log("updateToken -> newToken", newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken();
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Home token={sessionToken} clearToken={clearToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };
  return <>{protectedViews()}</>;
}

export default App;
