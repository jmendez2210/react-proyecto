import hero1 from '../assets/hero-peugeot.jpg'


const Header = () => {
        return (
            <header id="principal">
        <div className="container-fluid pt-5 px-0">
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hero1} className="d-block w-100 h-10" alt="principal-hero"/>
                        </div>
                        <div className="carousel-item">
                            <img src={hero1} className="d-block w-100 h-10" alt="principal-hero"/>
                        </div>
                        <div className="carousel-item">
                            <img src={hero1} className="d-block w-100 h-10" alt="principal-hero"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Siguiente</span>
                    </a>
                </div>

            </div>
        </div>
    </header>
        );
}
export default Header;