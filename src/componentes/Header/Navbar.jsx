import React from "react";
import logo from "../assets/logo/logo-gray.png";
import CartWidget from './CartWidget';
import {  Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";



const Nav = () => {
    const [secmenu, setMenu] = useState ([]);



useEffect(() => {
  const marCollection = collection(db, 'marca')

  getDocs(marCollection)
  .then((res) => {

      const secciones = res.docs.map((prod) => {
          return {
              id: prod.id,
              ...prod.data(),
          };
      });
      setMenu(secciones);
  })
  .catch((error) => {
      console.log(error);
  });
}, []);



  return (
    <nav className="navbar bg-light navbar-expand-lg bg-dark navbar-dark fixed-top ">
      <div className="container-fluid">
        <NavLink to="/">
            <img src={logo} alt="Logo Dumay" className="img-fluid kenburns-top d-block navbar-brand"/>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'end'}}>
          <ul className="navbar-nav ml-auto">
            {secmenu.map((secm) => ( 
                <NavLink key={secm.id} className="nav-item" to={`/marca/${secm.path}`}> {secm.marca} </NavLink>
            ))
            }

          </ul>
          <ul><Link className='nav-item' to="/Cart"> <CartWidget /></Link></ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;


