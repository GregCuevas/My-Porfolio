import React from "react";
import "./App.css";
import Client from "./pages/Client";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/Me" Component={Me}></Route>
        <Route path="/services" Component={Services}></Route>
        <Route path="/work" Component={Work}></Route>
        <Route path="/client" Component={Client}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </Router>
  );
}

export default App;
