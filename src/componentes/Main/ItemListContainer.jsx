import React, {useEffect, useState} from 'react';
import { productos } from '../../mock/Productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [items, setItems] = useState ([]);

    const valor = useParams ();
    console.log(valor.marcamodelo);

    const {marcamodelo} = useParams (); 


useEffect (() => {

    
    if (marcamodelo) {
        const getProductos = () => {
            return  new Promise((respuesta,rej) => {
                const filtromarca  = productos.filter ((prod)=>prod.marca === marcamodelo)
                setTimeout (() => {
                    respuesta(filtromarca);
    
                }, 1000 );
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
    } else {
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
    }

    
    }, [marcamodelo]);

      //  console.log(items);



  return (
    <div id="container-fluid" style={{display:'flex' , justifyContent:'center', flexWrap:'wrap'}}>
           <ItemList items={items} />
    </div>
  );
}


export default ItemListContainer 


