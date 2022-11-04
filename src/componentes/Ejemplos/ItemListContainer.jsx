import React, { useEffect, useState }from 'react'


const ItemListContainer = () => {
    const [ count, setCount] = useState (0);
    const [ texto, setTexto] = useState ('Fran');

    useEffect (() =>{
        //codigo que se ejecuta LUEGO del render y SIMPRE que se renderice el componente
            console.log('Me renderizo SIEMPRE');
    });

    useEffect (() =>{
        //codigo que se ejecuta LUEGO del render y UNA sola vez
        // llamadas asincrónicas
        console.log('Me renderizo 1 sola vez');
    }, []);

    useEffect (() =>{
        //codigo que se ejecuta LUEGO del render y UNA sola vez y CADA VEZ QUE CAMBIE LA DEPENDENCIA
        console.log('Me renderizo 1 sola vez y cada vez que cambie el texto');
    }, [texto]);

    //console.log('Primer Render')

    const sumar = () => {
        setCount (count + 1)
    }

    const cambiarTexto = () => {
        setTexto ('Jorge');
    }

  return (

    <div>
            <p onClick={sumar}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati a quaerat consequuntur non repudiandae impedit, ullam, dignissimos asperiores omnis repellat deleniti, sunt quod voluptas qui illo delectus maxime natus?</p>
            <h1>{texto}</h1>
            <button type="button" className="btn btn-primary" onClick={cambiarTexto}> Cambiar Texto</button>
    </div>
  )
}


export default ItemListContainer 