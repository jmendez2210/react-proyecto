import React from 'react'

import Button from '../Ejemplos/Button';

const Items = ({productos}) => {
  return (
    <div className={'row'}>
                     <div className={''}>
                         <div className="card" style={{width:" 18rem", justifyContent:'center'}}>
                                 <img src={productos.img} className="card-img-top" alt={productos.modelo} />
                                 <div className="card-body">
                                     <h4 className="card-title">{productos.modelo}</h4>
                                     <p className="card-text">{productos.version}</p>
                                     <h4 className="card-text">$ {productos.precio}</h4>
                                 </div>
                                 <div className='card-footer'>
                                 <Button text="Cotizar"/>
                                 </div>
                         </div>
                     </div>
    </div>
  )
}
export default Items;