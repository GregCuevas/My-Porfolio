import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Redes from "../components/Redes";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import "../style/contact.css";

const Contact = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSuccessClick = () => {
    Swal.fire("Success", "Your action has been completed.", "success");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    const { user_name, user_email, message } = form.current;
    if (!user_name.value || !user_email.value || !message.value) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    emailjs
      .sendForm(
        "service_ivccmrg",
        "template_4aeqr4i",
        form.current,
        "w1ww-apNX3IXA91X2"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleSuccessClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputClassName = isFormValid ? "item" : "item invalid";

  return (
    <div className="cont-emial">
      <h1>
        <span className="bold">Gregory </span> Cuevas
      </h1>
      <Redes />
      <div className="letter-tops">
        <h2>
          Let's <span className="bold"> connect </span>
        </h2>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="page-container">
          <div className="center-container">
            <div className="container-form">
              <div className="input-group">
                <input
                  placeholder="Nombre"
                  className={inputClassName}
                  type="text"
                  name="user_name"
                />
                <input
                  placeholder="Email"
                  className={inputClassName}
                  type="email"
                  name="user_email"
                />
              </div>
              <textarea
                className={inputClassName}
                placeholder="Mensaje"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              {!isFormValid && (
                <p className="error-message">
                  Por favor, llene todos los campos.
                </p>
              )}
            </div>
            <input className="btn" type="submit" value="Let's talk" />
          </div>
        </div>
      </form>
      <Navbar />
    </div>
  );
};

export default Contact;
