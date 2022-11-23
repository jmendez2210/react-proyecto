import React from 'react';
import { useContext } from 'react';
import { AiOutlineCarryOut } from "react-icons/ai"; 
import { CartContext } from '../../Context/CartContext';


const CartWidget = () => {
    const {totalProductos} = useContext (CartContext);
    return (
        <div className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineCarryOut size={40}/>
            <span>Articulo Carrito {totalProductos() !== 0 &&  totalProductos() }</span>
        </div>
    );
};

export default CartWidget;