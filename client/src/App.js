import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Swich, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
