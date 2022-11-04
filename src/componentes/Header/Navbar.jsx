import React from "react";
import logo from "../assets/logo/logo-gray.png";
import Button from '../Ejemplos/Button'

const Nav = () => {
  return (
    <nav className="navbar bg-light navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <a href="index.html">
            <img src={logo} alt="Logo Dumay" className="img-fluid kenburns-top d-block navbar-brand"/>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'end'}}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="https://www.peugeot.cl/">PEUGEOT</a></li>
            <li className="nav-item"><a href="https://www.mazda.cl/">MAZDA</a></li>
            <li className="nav-item"><a href="https://www.suzuki.cl/">SUZUKI</a></li>
            <li className="nav-item"><a href="https://www.haval.cl/">HAVAL</a></li>
            <Button text="+ Informacion"/>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;


