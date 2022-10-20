import './App.css';
import Nav from './componentes/Navbar';
import Header from './componentes/Header';
import {Main} from './componentes/Main';
import Footer from './componentes/Footer';




function App() {
  return (
    <>
        <Nav/>
        <Header/>
        <Main marcas='Nuestras Marcas'/>
        <Footer/>
    </>
  );
}

export default App;
