import card1 from '../assets/Peugeot/modal-pgt/cardNuevo_3008-2.jpg'
import Button from '../componentes/Button'


export const Main = (props) => {
    //console.log(props)
    return (
        <main className="container-fluid" style={{display:'flex' , justifyContent:'center'}}>
        <div className={'row'}>
                   <h2>{props.marcas}</h2>
             <div className="card" style={{width:" 18rem", justifyContent:'center'}}>
                     <img src={card1} className="card-img-top" alt="..."/>
                     <div className="card-body" >
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <Button text="Cotizar"/>
                     </div>
             </div>
             <div className="card" style={{width:" 18rem", justifyContent:'center'}}>
                     <img src={card1} className="card-img-top" alt="..."/>
                     <div className="card-body" >
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <Button text="Cotizar"/>
                     </div>
             </div>
             <div className="card" style={{width:" 18rem", justifyContent:'center'}}>
                     <img src={card1} className="card-img-top" alt="..."/>
                     <div className="card-body" >
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <Button text="Cotizar"/>
                     </div>
             </div>
         </div>
     </main>
    );
}
