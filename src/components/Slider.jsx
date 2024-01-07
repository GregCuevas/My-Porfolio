import React, { useRef, useState, useEffects } from "react";
import "../style/slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="letter-top">
        <h2>
          What clients❤️<span className="bold"> say </span>
        </h2>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ width: "85%", marginTop: "10px" }} // Ancho al 100%
        slidesPerView={1} // Mostrar solo una diapositiva
        spaceBetween={20} // Espacio entre diapositivas
      >
        <SwiperSlide>
          <div className="slider-container">
            <div className="slider-card">
              <div className="slider-img">
                <img className="photo" src="/cuevas.png" alt="Clients" />
              </div>
              <div className="text-container">
                <h2>Franklin Cuevas</h2>
                <p className="deale">Boss</p>
                <p className="p-res">
                  La página web desarrollada para Instalaciones Cuevas es
                  excepcional en funcionalidad y diseño. Una colaboración
                  altamente recomendada para mejorar su presencia en línea.
                </p>
              </div>
            </div>
            <div className="divisor"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container">
            <div className="slider-card">
              <div className="slider-img">
                <img className="photo" src="/anas.png" alt="Clients" />
              </div>
              <div className="text-ana">
                <h2 className="ana">Ana Cuevas</h2>
                <p className="deales">Psychologist</p>
                <p className="p-ana">
                  Como psicóloga, estoy encantada con la página web que se creó
                  para mi práctica. Es funcional y refleja de manera precisa mis
                  servicios. ¡Una colaboración altamente recomendada!
                </p>
              </div>
            </div>
            <div className="divisor"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-container">
            <div className="slider-card">
              <div className="slider-img">
                <img className="photo" src="/hielo.png" alt="Clients" />
              </div>
              <div className="text-hielo">
                <h2 className="ice">Hielo Vigoz</h2>
                <p className="deal">Company</p>
                <p className="p-hielo">
                  Hielo Vigoz esta agradecido, gracias a la página web que
                  desarrollo, hemos logrado un control excepcional en nuestra
                  empresa. Esta herramienta ha revolucionado nuestra gestión
                  interna, brindándonos eficiencia y control. ¡Una colaboración
                  que ha impulsado nuestro negocio a nuevos niveles!
                </p>
              </div>
            </div>
            <div className="divisor"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
