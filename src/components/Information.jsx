import React from "react";
import Redes from "./Redes";

import "../style/information.css";
const Information = () => {
  return (
    <div className="container_information">
      <h1>
        <span className="bold">Gregory</span> Cuevas
      </h1>
      <Redes />
      <div className="text">
        <h2 className="talk-me">
          Transforming Ideas <br /> Into
          <span className="red-tex"> Digital Reality</span>
        </h2>
        <p>
          Soy un apasionado Front-end Developer con experiencia en la creación
          <br />
          de experiencias web cautivadoras y funcionales, combinando diseño y
          <br />
          código para dar vida a proyectos digitales.
        </p>
        <a href="/work">
          <img className="verify" src="/verify.png" alt="my-projects" />
        </a>
      </div>
      <div className="know">
        <img className="profile" src="/profile.png" alt="me" />
      </div>
    </div>
  );
};

export default Information;
