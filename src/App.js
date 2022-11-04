import './App.css';
import Nav from './componentes/Header/Navbar';
import Header from './componentes/Header/Header';
import {Main} from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import Contador from './componentes/Main/Contador';
import State from './componentes/Ejemplos/State'
//import ItemListContainer from './componentes/Main/ItemListContainer';
import Api from './componentes/Main/Api';

//import ItemListContainer from './componentes/ItemListContainer';




function App() {
  return (
    <>
        <Nav/>
        <Header/>
        <Main marcas='Nuestras Marcas'/>
        {/* <ItemListContainer /> */}
        <Api/>
        <Contador stock={10} />
        <State/>
        <Footer/>
    </>
  );
}

export default App;
