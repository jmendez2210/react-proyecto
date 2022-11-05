
export const Main = (props) => {
    //console.log(props)
    return (
        <main className="text-center py-5 mx-5">
        <div className="container-fluid">
            <h2 className="titulo pb-3">NUESTROS MARCAS</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 px-2">
                    <div>
                        <img src="https://www.peugeot.cl/content/dam/peugeot/master/b2c/our-range/new-3008-suv/s/PEUGEOT_3008PHEV_2020_025_FR.jpg?imwidth=1920" className="img-fluid vehiculospeugeot" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 px-2">
                    <div>
                        <img src="https://s3.amazonaws.com/dercocenter.cl/uploads/sites/9/2019/07/2019-mazda-3-hatchback.jpg" className="img-fluid d-flex flex-column justify-content-between vehiculospeugeot" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 px-2">
                    <div>
                        <img src="https://dercocenter-api.s3.us-east-1.amazonaws.com/images/carcontent/1662411112-ncpLbfp8Xt.webp" className="img-fluid d-flex flex-column justify-content-between vehiculospeugeot" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
