import React, {useEffect, useState} from 'react';
//import { productos } from '../../mock/Productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
//import SquareLoader from "react-spinners/SquareLoader";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = () => {

    const [items, setItems] = useState ([]);
    const [loading, setloading] = useState(true);
    //const valor = useParams ();
    //console.log(valor.marcamodelo);

    const {marcamodelo} = useParams (); 


useEffect (() => {

    const collectionVh = collection(db, 'productos');
    
    const menumarca = marcamodelo ? query(collectionVh, where('marca', '==', marcamodelo )) : collectionVh;
    
    getDocs(menumarca)
    .then((res) => {
        //console.log(res.docs);
        const productos = res.docs.map((prod) => {
            return {
                id: prod.id,
                ...prod.data()
            };
        });
        setItems(productos);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        setloading(false);
    });

            
        
        
            /*if (marcamodelo) {
        
            
      
       
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
            })
            .finally( () => {
                setloading(false);
              });

            return () => setloading(true);

    } else {
        const getProductos = () => {
            return  new Promise((respuesta,rej) => {
                setTimeout (() => {
                    respuesta(productos);
    
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
            })
            .finally( () => {
                setloading(false);
              });

            }
        */
          return () => setloading(true);
        
    }, [marcamodelo])

    if (loading) {
        return(
            <div className='container' style={{ alignContent:'center', textAlign:'center'}}>
                {/* <Skeleton /> */}
                <Skeleton count={10} height={50} />            
          </div>
          );
    }

      //  console.log(items);



  return (
    <div id="container-fluid" style={{display:'flex' , justifyContent:'center', flexWrap:'wrap'}}>
           <ItemList items={items} />
    </div>
  );
}


export default ItemListContainer;


