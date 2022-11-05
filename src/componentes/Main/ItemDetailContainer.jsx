import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const {idproductos} = useParams();
    console.log(idproductos);
    console.log(typeof idproductos);

  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer;
