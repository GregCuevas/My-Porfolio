import React from "react";
import "../style/services.css";
import Redes from "../components/Redes";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className="cont_services">
      <h1>
        <span className="bold">Gregory </span> Cuevas
      </h1>
      <Redes />
      <div className="cont_title">
        <h2>
          My Servi<span className="bold">ces</span>
        </h2>
        <p className="title_text">
          En mi sección de servicios, te ofrezco soluciones digitales completas.
          Desde desarrollo web personalizado hasta asesoría tecnológica
          estratégica y diseño creativo, estoy listo para potenciar tu presencia
          en línea. Con enfoque en la calidad y la estética, mi objetivo es
          llevar tus proyectos digitales al siguiente nivel.
        </p>
      </div>

      <div className="cards">
        <div className="serv-card">
          <img src="/ordenador.png" alt="PC" />
          <div className="plan-titles">Desarrollo Web</div>
          <p className="plan-title">
            Convierto tu visión en una experiencia web excepcional que atraerá a
            tus clientes.
          </p>
        </div>
        <div className="serv-card">
          <img src="/pintura.png" alt="DISEÑO" />
          <div className="plan-titles">Diseño</div>
          <p className="plan-title">
            Transformo tu visión en un sitio web impresionante que atrae y
            retiene a tus visitantes.
          </p>
        </div>
        <div className="serv-card">
          <img src="/job.png" alt="JOB" />
          <div className="plan-titles">Asesor Tecnológico</div>
          <p className="plan-title">
            Experto en tecnología para guiar tu negocio hacia la eficiencia y el
            éxito digital.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Services;
