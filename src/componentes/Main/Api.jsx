import React, { useEffect }  from 'react'
import { useState } from 'react';

const  Api = () => {
    const [data, setData] = useState ([])
    useEffect(() => {
        fetch ('https://fakestoreapi.com/products')
            .then ((respuesta) => respuesta.json())
            .then ((respuesta) => setData(respuesta))
            .catch ((error) => {
                console.log(error)
        });
    }, []);



  return (
<div>
    {data.map ((producto) =>
    <div key={producto.id} className={'row'}>
        <div className="card" style={{width:" 18rem", justifyContent:'center'}}>
                <img src={producto.image} className="card-img-top" alt="producto.title"/>
                <div className="card-body">
                    <h4 className="card-title">{producto.title}</h4>
                    <h4 className="card-text">$ {producto.price}</h4>
                </div>
        </div>

    </div>
    )}
</div>

    
  )
}

export default Api