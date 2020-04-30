import React from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import TrendingFetcher from "./components/TrendingFetcher";

function App() {
  return (
    <Container>
      <TrendingFetcher />
    </Container>
  );
}

export default App;
