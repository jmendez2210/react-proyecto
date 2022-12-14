import React, {useState , useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import SquareLoader from "react-spinners/SquareLoader";
import { getDoc, doc } from 'firebase/firestore';
import { collectionVh } from '../../services/firebaseConfig';


const ItemDetailContainer = () => {
  const [items , setItems] = useState ({});
  const [loading, setloading] = useState(true);
  const { idprod } = useParams();


  useEffect (() =>  {
   
      //collectionVh 
    const ref = doc(collectionVh, idprod);

    getDoc(ref)
      .then((res)=>{
     
        setItems({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=>{
        setloading(false)
      });
   
  }, [ idprod]);

  if (loading) {
    return (
      <div className='container' style={{ alignContent:'center', textAlign:'center'}}>
      {loading
      ? <SquareLoader 
      size={150} 
      />  : <ItemDetail ficha={items} />
      }
        
    </div>
    );
  }

  return (
    <div className='container'>
      {loading
      ? <h1>Cargando...</h1> : <ItemDetail ficha={items} />
      }
        
    </div>
  )
}

export default ItemDetailContainer;