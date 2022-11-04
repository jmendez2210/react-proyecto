import logo from '../assets/logo/logo-gray.png'

const Footer = () => {
    return (
    <footer  >
        <div className={'container-fluid'} >
            <div className={"row"}>
                <a href="https://getbootstrap.com/docs/5.2/components/card/"><img src={logo} alt=""/></a>
            </div>
            <div>
                <p >Dumay. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    );
}
export default Footer;