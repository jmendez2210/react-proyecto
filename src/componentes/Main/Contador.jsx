import  {useState} from 'react'



function Contador({ stock, onAdd, initial }) {
    

    const [ cantidad, setCantidad] = useState (initial=1);


    //let x = 0;
    const sumar =() =>{
        //condicion ternario
        cantidad < stock && setCantidad (cantidad + 1);
      
    }

    const restar = () =>{
        if (cantidad > 1 ) {
            setCantidad(cantidad - 1);
        }
    };


    const agregar = () => {
        onAdd(cantidad);
    };

    return (
    
    <div style={{ 
                    display: 'flex',
                    justifyContent : 'center',
                    alignItems: 'center',
                    minHeight:'20vh'}}>
        
        <button disabled={cantidad === 1} onClick={restar} type="button" className="btn btn-dark"> - </button>
        <p> {cantidad} </p>
        <button disabled={cantidad === stock} onClick={sumar} type="button" className="btn btn-dark"> + </button>
        <p></p>
        <button type="button" className="btn btn-dark" onClick={agregar}>Agregar al Carrito</button>
    </div>
  )
}

export default Contador;