import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from '../components/Main'
/* import { productsList } from '../utils/data' */
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import loading from '../assets/loading.gif'
import NotFound from '../components/NotFound'

const Home = ({cart,handleAddToCart, isCartOpen,setCartOpen,borrarProducto, vaciarCarrito }) => {

  const [productos,setProductos] = useState([])
  const [carga, setCarga] = useState(true)
  const [error, setError] = useState(false)

    const cartCount = cart.length

    useEffect(()=>{

      fetch('https://6812b137129f6313e20f46e7.mockapi.io/productos-ecommerce/productos')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos)
        setCarga(false)
      })
      .catch((error) => {
        console.error('Error:', error)
        setCarga(false)
        setError(true)
      });


    },[])

    if(error){
      return <NotFound/>
    }
   
  return (
    <>
      <Header/>
      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/>
      <Main />
      {
        carga ? <img src={loading} alt='loading' /> :
      <ProductList products={productos} addToCart={handleAddToCart}/>
      }
      <Cart cartItems={cart}/>
      
      <Footer/>
    </>
  )
}

export default Home
