
export const Main = (props) => {

    return (
        <main className="text-center py-5 mx-5">
        <div className="container">
            <h2 className="titulo pb-3">NUESTROS MARCAS</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 px-2">
                    <div style={{ display: "flex", objectFit:"cover"}}>
                        <img src="https://www.mazda.cl/_nuxt/img/mazda_logo.ba78b4a.png" className="img-fluid vehiculospeugeot" alt=""/>
                    </div>
                </div >
                <div className="col-lg-3 col-md-6 col-sm-12 px-2">
                    <div style={{display: "flex", width: 150, objectFit:"cover"}}>
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/peugeot-logo-5.png" className="img-fluid d-flex flex-column justify-content-between vehiculospeugeot" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 px-2">
                    <div style={{display: "flex", width: 190, objectFit:"cover"}}>
                        <img src="https://s3.amazonaws.com/dercocenter.cl/brands/suzuki/logo.jpg" className="img-fluid d-flex flex-column justify-content-between vehiculospeugeot" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 px-2">
                    <div style={{display: "flex" ,width: 200, objectFit:"cover"}}>
                        <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012014/haval-logo.png?itok=NrYWA0Gp" className="img-fluid d-flex flex-column justify-content-between vehiculospeugeot" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
