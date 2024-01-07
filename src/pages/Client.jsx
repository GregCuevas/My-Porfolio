import React from "react";
import Redes from "../components/Redes";
import Navbar from "../components/Navbar";
import "../style/client.css";
import Slider from "../components/Slider";
const Client = () => {
  return (
    <div className="cont-client">
      <h1>
        <span className="bold">Gregory </span> Cuevas
      </h1>
      <Redes />

      <div className="conts_title">
        <Slider />
      </div>
      <Navbar />
    </div>
  );
};

export default Client;
