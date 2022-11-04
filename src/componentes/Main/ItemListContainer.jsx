import React, {useEffect, useState} from 'react';
import { productos } from '../../mock/Productos';
import ItemList from './ItemList';


const ItemListContainer = () => {

    const [items, setItems] = useState ([]);

useEffect (()=>{
    const getProductos = () => {
        return  new Promise((respuesta,rej) => {
            setTimeout (() => {
                respuesta(productos);

            }, 2000 );
        });
    }

    //console.log(task); // esto devuelve una promesa
    getProductos()
        .then((respuesta) => {
            //console.log('respuesta', respuesta);
            setItems(respuesta)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

      //  console.log(items);



  return (
    <div id="container-fluid" style={{display:'flex' , justifyContent:'center', flexWrap:'wrap'}}>
           <ItemList items={items} />
    </div>
  );
}


export default ItemListContainer 


