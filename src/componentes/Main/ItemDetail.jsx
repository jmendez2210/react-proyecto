import React, { useState , useContext, } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import Contador from './Contador';

const ItemDetail = ({ ficha }) => {

    const [ show, setshow] = useState(true);
  
    const { addToCart, stockproducto } = useContext(CartContext);

    const onAdd = (qty) => {
       setshow(false);
      //agregar la cantidad para el content
      addToCart(ficha, qty);
    };

    const cantidad = stockproducto(ficha.id);

  return (
    <div className="card" style={{width: "auto", alignContent:'center', justifyContent:'center'}}>
    <div className="row g-0">
      <div className="col-md-6 col-sm-12">
        <img src={ficha.img} className="img-fluid rounded-start" style={{width:"700px"}} alt={ficha.modelo} />
      </div>
      <div className="col-md-6 col-sm-12 pt-5">
        <div className="card-body">
        { show 
        ? <h2>{ficha.modelo}</h2>
        : (
              <h2>mensaje de prueba</h2>
      )}
          <h2 className="card-title">{ficha.marca}</h2>
          <h3 className="card-title">{ficha.modelo}</h3>
          <p className="card-text">{ficha.version}</p>
          <h4 className="card-text">$ {ficha.precio}</h4>
        </div>
      </div>
        <div className="card-footer col-md-12 col-sm-12 " style={{ alignContent:'center', justifyContent:'center'}}>
        {show 
      ? (<Contador stock={ficha.stock} onAdd={onAdd} initial={cantidad} />)
      : (<Link to='/cart'><button type="button" className="btn btn-dark" >Ir al Carrito</button></Link>)}
        </div>
      
    </div>
  </div>
  )
}

export default ItemDetail;


