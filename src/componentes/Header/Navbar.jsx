import React from "react";
import logo from "../assets/logo/logo-gray.png";
import Button from '../Ejemplos/Button'
import {  NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar bg-light navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/">
            <img src={logo} alt="Logo Dumay" className="img-fluid kenburns-top d-block navbar-brand"/>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'end'}}>
          <ul className="navbar-nav ml-auto">
            <NavLink className="nav-item" to="/marca/Peugeot"> PEUGEOT</NavLink>
            <NavLink className="nav-item" to="/marca/Mazda">MAZDA</NavLink>
            <NavLink className="nav-item" to="/marca/Suzuki">SUZUKI</NavLink>
            <NavLink className="nav-item" to="/marca/Haval">HAVAL</NavLink>
            <Button text="+ Informacion"/>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;


