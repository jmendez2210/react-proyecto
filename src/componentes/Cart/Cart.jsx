import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const Cart = () => {

  const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext); //cart = []

  if (cart.length === 0)  return <h1>No se han cargado Articulos en el carrito de compras... Revisa nuestro cátalogo <Link to='/' ><button type="button" className="btn btn-dark">Volver a Inicio</button></Link></h1>;
  return (
    <div className='container' style={{ alignContent:"center", alignItems:"center", textAlign:"center"}}>
      {cart.map((ficha) => (
        <div key={ficha.id} className="card" style={{ alignContent:"center", alignItems:"center", textAlign:"center"}}>
          <div className="row">
            <div className='col-md-4' >
                  <img src={ficha.img} alt={ficha.modelo} className="card-img-top"/>
            </div>
            <div className='col-md-8'>
              <div className="card-body">
                    <h1 className="card-title">{ficha.modelo}</h1>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Version: {ficha.version}</li>
                      <li className="list-group-item">Cantidad: {ficha.cantidad}</li>
                      <li className="list-group-item">Precio: $ {ficha.precio}</li>
                    </ul>
                    <button type="button" className="btn btn-dark" onClick={() => deleteOne(ficha.id)}>Eliminar Producto</button>
              </div>
            </div>

          </div>
        </div>
      ))}
          <div className='card'>
            <div>
              <h2 className='card-title'> Total: $ {totalPrecio ()} </h2>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-dark" onClick={deleteAll} style={{ margin:20}}>Vaciar Carrito</button>
              <Link to="/checkout" ><button type="button" className="btn btn-dark" style={{ margin:20}} >Checkout</button></Link>

            </div>
              

          </div>
    </div>
    );
};

export default Cart;