import React from 'react'
import Contador from './Contador';
const ItemDetail = () => {
    const onAdd = (qty) => console.log(qty);
  return (
    <div>
        <img src="./logo192.png" alt="" />
        <div>
            <h2>Prueba</h2>
            <p>agregar card de auto</p>
            <h3>precio</h3>
            <Contador stock={10} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail