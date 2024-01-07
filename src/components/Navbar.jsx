import { Link } from "react-router-dom";
import { HiHome, HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <div className="container_navbar">
      <ul>
        <li>
          <Link to="/">
            <HiHome className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/Me">
            <FaUser className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/Services">
            <MdMiscellaneousServices className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/Work">
            <MdWork className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/client">
            <BiMessageDetail className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <HiOutlineMail className="icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
