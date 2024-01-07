import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
const Redes = () => {
  return (
    <div className="container_redes">
      <div className="contred">
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100053452181582">
              <SlSocialFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gregory_junior_/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gregory-cuevas/">
              <BiLogoLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:gregoryjunior2101@gmail.com">
              <MdOutlineMailOutline />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Redes;
