import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)

    //barra de busqueda de elementos
    const [busqueda, setBusqueda] = useState(' ')

    useEffect(() => {
        fetch('https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })

    }, [])

    const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))
    const handleAddToCart = (product) => {

        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {

            setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: product.cantidad } : item));
        } else {
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    } else {
                        return null; // Si quantity es 1, marcamos para eliminar
                    }
                } else {
                    return item; // Si no es el producto, lo dejamos igual
                }
            }).filter(item => item !== null); // Quitamos los productos nulos
        });
    };

    return (
        <CartContext.Provider
            value={

                { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuth,productosFiltrados }
            }>
            {children}
        </CartContext.Provider>
    )
}