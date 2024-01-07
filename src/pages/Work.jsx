import React from "react";
import Redes from "../components/Redes";
import Navbar from "../components/Navbar";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import "../style/work.css";
const Work = () => {
  return (
    <div className="conts_work">
      <h1>
        <span className="bold">Gregory </span> Cuevas
      </h1>
      <Redes />
      <div className="conts_title">
        <h2>
          My <span className="bold">Work</span>
        </h2>
        <p className="title_texts">
          Explora mi portafolio de proyectos excepcionales que reflejan mi
          pasión por la creatividad y la excelencia. Cada trabajo es un
          testimonio de mi habilidad para transformar ideas en soluciones
          impactantes. Descubre cómo mi experiencia y dedicación pueden llevar
          tu próximo proyecto al siguiente nivel.
        </p>
      </div>
      <div className="pro-imgs">
        <a href="https://instalacionescuevas.netlify.app/">
          <img className="pro4" src={project4} alt="Proyecto-4" />
        </a>
        <img className="pro" src={project2} alt="Proyecto-2" />
        <img className="pro" src={project3} alt="Proyecto-3" />
        <img className="pro" src={project1} alt="Proyecto-1" />
      </div>
      <Navbar />
    </div>
  );
};

export default Work;
