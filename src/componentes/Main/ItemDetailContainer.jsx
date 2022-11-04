import { productos } from "../../mock/Productos";

const getProductos = () => {
    return  new Promise((respuesta,rej) => {

        //productos.find (() =>===prod.id){}
        setTimeout (() => {
            respuesta(productos);

        }, 2000 );
    });
}
