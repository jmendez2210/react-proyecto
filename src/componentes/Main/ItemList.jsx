import React, { memo }from 'react';
import Items from './Items';


const ItemList = memo(
  ({items}) => {
  
    return (
  
      <div className='item-list'>
       {items.map((productos)=> {
                 return <Items productos={productos} key={productos.id} />;
              
       })}
       </div>
    );
  }, (a,b) => a.items === b.items);
export default memo(ItemList);

