import  {useState} from 'react'



function Contador({ stock }) {
    

    const [ cantidad, setCantidad] = useState (0);


    //let x = 0;
    const sumar =() =>{
        //VALIDAR SALDO CANTIDAD
        if (cantidad < stock) {
            setCantidad (cantidad + 1 );
            
        }
    }

    const restar = () =>{
        if (cantidad > 1 ) {
            setCantidad(cantidad - 1);
        }
    };

    const   reset = () => {
        setCantidad (0);
    }

    return (
    
    <div style={{ 
                    display: 'flex',
                    justifyContent : 'center',
                    alignItems: 'center',
                    minHeight:'80vh'}}>
        
        <button disabled={cantidad === 1} onClick={restar} type="button" className="btn btn-primary">-</button>
        <p> {cantidad} </p>
        <button disabled={cantidad === stock} onClick={sumar} type="button" className="btn btn-primary">+</button>
        <p></p>
        <button onClick={reset} type="button" className="btn btn-primary">Volver a 0</button>
    </div>
  )
}

export default Contador;