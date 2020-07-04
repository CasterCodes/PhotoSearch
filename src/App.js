import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import PhotosState from "./context/photos/PhotosState";
import Searched from "./components/Searched";
import NotFound from "./components/NotFound";
function App() {
  return (
    <PhotosState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/searched/:search_word' component={Searched} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PhotosState>
  );
}

export default App;
