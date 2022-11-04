import React from 'react'
import Items from './Items';


const ItemList = ({items}) => {
  return (

    <div className='item-list'>
     {items.map((productos)=> {
               return <Items productos={productos} key={productos.id} />;
            
     })}
     </div>
  );
}
export default ItemList;

