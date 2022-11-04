import React from 'react'
import Items from './Items';


const ItemList = ({items}) => {
  return (
    <>
     {items.map((productos)=> {
         return (
            <div className='item-list'>
                <Items productos={productos} key={productos.id}/>
            </div>
         )
     })
 }
    </>
  )
}
export default ItemList;

