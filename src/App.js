import './App.css';
import Nav from './componentes/Header/Navbar';
import Header from './componentes/Header/Header';
import {Main} from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/Main/ItemListContainer';
import ItemDetailContainer from './componentes/Main/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './componentes/Form/Formulario';
import Cart from './componentes/Cart/Cart';
import CartProvider from './Context/CartContext';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from './services/firebaseConfig';
// import {productos} from './mock/Productos';


// const subirprod = collection(db, 'productos');

// productos.forEach((prod) => addDoc(subirprod, prod)) 


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
          <Nav/>
          <Header/>
          <Main marcas='Nuestras Marcas'/>
                <Routes>
                  <Route path='/' element={ <ItemListContainer />} />
                  <Route path='/marca/:marcamodelo' element={<ItemListContainer/>} />
                  <Route path='/Detail/:idprod' element={ <ItemDetailContainer />} />
                    {/* <Api/> */}
                    {/* <State/> */}
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Form />} />
                </Routes> 
      </CartProvider>
         <Footer/>
    </BrowserRouter>
  );
}

export default App;
