import { useState , createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);



  const addToCart = (ficha, cantidad) => {
 
    
    if (isInCart(ficha.id)) {
      sumarCantidad(ficha, cantidad)
    } else {
      setCart ([...cart, {...ficha, cantidad}]);
    }
 
  };

  const isInCart = (id) => {
    return cart.some ((prod) => prod.id === id);
  };
  // sumar carrito
  const sumarCantidad = (fichaxagregar, cantidad) => {
      
      const cartUpdate = cart.map((prodCarrito) => {
        if (fichaxagregar.id === prodCarrito.id) {
          const fichaActualizada = {
            ...prodCarrito,
            cantidad: prodCarrito.cantidad + cantidad,
          };return fichaActualizada
        }else{
          return prodCarrito;
        }
      } )

      setCart(cartUpdate);
  }

  // funcion para eliminar todo
  const deleteAll = () => {
    setCart([])
  };
  //funcion para eliminar uno solo
  const deleteOne = (id) => {
    const prodfiltrados = cart.filter((prod) => prod.id !==id); //[{}]
    setCart([prodfiltrados]);
  };
  //unidades totales para el carrito
  const totalProductos = () =>{
    let count = 0
    const copiaCart = [...cart]
    copiaCart.forEach((prod)=>{
       count += prod.cantidad
    })
    return count
  };


  //stock del producto
  const stockproducto = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.cantidad
  }

  //unidades totales para el carrito
  const totalPrecio = () =>{
    let count = 0
    let total = 0
    const copiaCart = [...cart]
    copiaCart.forEach((prod)=>{
       
       //total = (count += prod.cantidad) * prod.precio
       total = count += prod.cantidad * prod.precio;
    })
    return total
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalProductos, totalPrecio, stockproducto }}>    
    {children}
    </CartContext.Provider>
  );
};

export default CartProvider;