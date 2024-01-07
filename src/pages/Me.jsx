import React, { useState } from "react";
import "../style/me.css";
import Navbar from "../components/Navbar";
import Redes from "../components/Redes";

const Me = () => {
  // Iconos Shield.io
  const HTML = "https://img.shields.io/badge/-HTML5-black?logo=HTML5";
  const CSS =
    "https://img.shields.io/badge/CSS-black?style=flat&logo=CSS3&logoColor=blue";
  const JS = "https://img.shields.io/badge/Javascript-black?logo=javascript";
  const REACT = "https://img.shields.io/badge/React-black?logo=React";
  const NPM = "https://img.shields.io/badge/NPM-black?logo=NPM";
  const GIT = "https://img.shields.io/badge/GIT-black?logo=GIT";
  const BS = "https://img.shields.io/badge/Bootstrap-black?logo=Bootstrap";

  //Skills
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [showExperienceText, setShowExperienceText] = useState(false);
  const [showCredentialsText, setShowCredentialsText] = useState(false);

  const handleParagraphClick = () => {
    setShowSecondParagraph(!showSecondParagraph);
    setShowExperienceText(false); // Asegúrate de ocultar el texto de experiencia al hacer clic en Skills
    setShowCredentialsText(false); // Asegúrate de ocultar el texto de credenciales al hacer clic en Skills
  };

  const handleExperienceClick = () => {
    setShowExperienceText(!showExperienceText);
    setShowSecondParagraph(false); // Asegúrate de ocultar el segundo párrafo al hacer clic en Experience
    setShowCredentialsText(false); // Asegúrate de ocultar el texto de credenciales al hacer clic en Experience
  };

  const handleCredentialsClick = () => {
    setShowCredentialsText(!showCredentialsText);
    setShowSecondParagraph(false); // Asegúrate de ocultar el segundo párrafo al hacer clic en Credentials
    setShowExperienceText(false); // Asegúrate de ocultar el texto de experiencia al hacer clic en Credentials
  };
  return (
    <div className="cont_me">
      <h1>
        <span className="bold">Gregory </span> Cuevas
      </h1>
      <Redes />
      <div className="description">
        <h2 className="desp-h2">
          Captivating <span className="bold">stories</span> <br /> birth
          magnificent <br /> designs
        </h2>
        <p className="text-pro">
          Soy un apasionado desarrollador Front-End con tres años de experiencia
          en la creación de experiencias web cautivadoras. Mi pasión por el
          diseño y la programación se fusionan para crear interfaces atractivas
          y funcionales que hacen que las ideas cobren vida en la webs.
        </p>
      </div>
      <div className="complete">
        <p>
          <span className="bolds">3+ </span> <br /> YEARS OF EXPERCIENCE
        </p>
        <div className="vertical-line"></div>
        <p>
          <span className="bolds">59+</span> <br />
          SASTISFIED CLIENTS
        </p>
        <div className="vertical-line"></div>
        <p>
          <span className="bolds">50+</span> <br /> FINISHED PROJECTS
        </p>
      </div>
      <div className="skill">
        <p onClick={handleParagraphClick}>Skills</p>
        <p onClick={handleExperienceClick}>Experience</p>
        <p onClick={handleCredentialsClick}>Certificates</p>
      </div>
      <div className="secondtext">
        {showSecondParagraph && (
          <p>
            Web Development <br />
            <br />
            <img src={HTML} alt="HTML" />
            <img src={CSS} alt="CSS" />
            <img src={JS} alt="JS" />
            <img src={REACT} alt="React" />
            <img src={NPM} alt="NPM" />
            <img src={GIT} alt="GIT" />
            <img src={BS} alt="BS" />
          </p>
        )}
      </div>
      <div className="secondtext">
        {showExperienceText && (
          <p>ST - Junta Central Electoral - 2022-2023 Internship</p>
        )}
      </div>
      <div className="secondtext">
        {showCredentialsText && (
          <ul className="prompt">
            <li>The Complete 2023 Web Development Bootcamp - Udemy</li>
            <li>Bootcamp de ciberseguridad y competencia CTF - Cyber4Dev</li>
          </ul>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Me;
