import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";
//import swal from "sweetalert";

const Formulario = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Email, setEmail] = useState("");
  const [Email2, setEmail2] = useState("");
  const [orderId, setOrderId] = useState("");

  //const [ data, setDatos] = useState ({ nombre:'', apellido:'', telefono:'', email:''})
  const { cart, totalPrecio, deleteAll } = useContext(CartContext);

  const enviarDatos = (e) => {
    e.preventDefault();
    // console.log({Nombre, Apellido, Telefono, Direccion, Email, Email2})
    const Pedidos = {
      Cliente: {
        Nombre,
        Apellido,
        Telefono: 123456789,
        Direccion: "calle siempre viva 123",
        Email: "Prueba@prueba.cl",
      },
      articulos: cart,
      total: totalPrecio(),
      fecha: serverTimestamp(),
    };
    const pedidosCollection = collection(db, "OC");
    //
    addDoc(pedidosCollection, Pedidos)
      .then((res) => {
        setOrderId(res.id);
        console.log(orderId);
        deleteAll();
      })
      .catch((error) => {
        console.log("Existe un error", error);
      });
    //.finally(() => {

    //})
  };

  const handleNombre = (e) => setNombre(e.target.value);
  const handleApellido = (e) => setApellido(e.target.value);
  const handleTelefono = (e) => setTelefono(e.target.value);
  const handleDireccion = (e) => setDireccion(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleEmail2 = (e) => setEmail2(e.target.value);

  if (orderId) {
    return (
            <div className="container" style={{ alignContent:"center", alignItems:"center", textAlign:"center"}}>
                  <div className="card" style={{ alignContent:"center", alignItems:"center", textAlign:"center", margin: 40}}>
                      <div className="card-body">
                        <h5 className="card-title">Orden de Compra Recibida!</h5>
                        <p className="card-text">Gracias por tu compra, tu numero de seguimiento es: ${orderId}</p>
                        <Link to='/' ><button type="button" className="btn btn-dark">Volver a Inicio</button></Link>
                      </div>
                  </div>              
            </div>
    );
  }

  return (
    <div className="container">
      <form action="" onSubmit={enviarDatos}>
        <div>
          <h2
            className="titd1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            COMPLETA EL FORMULARIO
          </h2>
          <div className="mb-3">
            <label className="form-label">Nombre :</label>
            <input
              type="text"
              className="form-control"
              id="IngreseNombre"
              name="Nombre"
              onChange={handleNombre}
              value={Nombre}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido :</label>
            <input
              type="text"
              className="form-control"
              id="IngreseApellido"
              name="Apellido"
              onChange={handleApellido}
              value={Apellido}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono :</label>
            <input
              type="tel"
              className="form-control"
              id="Ingresetelefono"
              name="Telefono"
              onChange={handleTelefono}
              value={Telefono}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Direccion:</label>
            <input
              type="tel"
              className="form-control"
              id="Ingresetelefono"
              name="address"
              onChange={handleDireccion}
              value={Direccion}
            />
          </div>
          <div className="mb-3">
            <div className="col-6" style={{ display: "inline-flex" }}>
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="Email"
                onChange={handleEmail}
                value={Email}
              />
            </div>
            <div className="col-6" style={{ display: "inline-flex" }}>
              <label className="form-label">Confirme Email:</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                name="Email2"
                onChange={handleEmail2}
                value={Email2}
              />
            </div>
            <div id="emailHelp" className="form-text">
              Nunca compartiremos su correo electrónico con nadie más.
            </div>
          </div>
          <div className="col-6" style={{ display: "inline-flex" }}>
            <Link to="/">
              <button type="button" className="btn btn-dark">
                Volver a Inicio
              </button>
            </Link>
          </div>
          <div className="col-6" style={{ display: "inline-flex" }}>
            <button type="submit" className="btn btn-dark">
              Enviar
            </button>
          </div>
          {/* <h1> Orden de Compra Recibida! {orderId} </h1> */}
          {/* disabel={Email !== Email2} */}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
