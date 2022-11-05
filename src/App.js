import './App.css';
import Nav from './componentes/Header/Navbar';
import Header from './componentes/Header/Header';
import {Main} from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
//import Contador from './componentes/Main/Contador';
//import State from './componentes/Ejemplos/State'
import ItemListContainer from './componentes/Main/ItemListContainer';
import ItemDetailContainer from './componentes/Main/ItemDetailContainer';
//import Api from './componentes/Main/Api';
//import ItemListContainer from './componentes/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
          <Nav/>
          <Header/>
          <Main marcas='Nuestras Marcas'/>
                <Routes>
                  <Route path='/' element={ <ItemListContainer />} />
                  <Route path='/marca/:marcamodelo' element={<ItemListContainer/>} />
                  <Route path='/Detail/:idproductos' element={ <ItemDetailContainer />} />
                    {/* <Api/> */}
                    {/* <State/> */}
                </Routes> 
         <Footer/>
    </BrowserRouter>
  );
}

export default App;
