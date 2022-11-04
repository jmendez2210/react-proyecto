import { useState } from 'react'

const State =() => {
    const [texto, setTexto] = useState ('Jorge')

    const cambiarTexto = () => {
        if (texto === 'Jorge' ) {
            setTexto ('Hola Mundo');
        }else{
            setTexto ('Jorge');
        }
    }

  return (
    <div style={{ 
        padding: '40px'}}>
            
        <h1>{texto} </h1>
        <button type="button" className="btn btn-primary" onClick={cambiarTexto}> Cambiar Texto</button>
    </div>
  )
}

export default State;