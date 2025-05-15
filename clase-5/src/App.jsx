import React, {useState,useEffect} from 'react'
import './App.css'
import Home from './layout/Home'
import NotFound from './components/NotFound'




function App() {

  const [cart, setCart] = useState([])
  console.log(cart);
  
  
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart =(product)=>{
    const productExist = cart.find(item => item.id === product.id)

    if(productExist){
      // alert('El producto ya esta en el carrito')
      setCart(cart.map((item) => item.id === product.id ? {...item, cantidad:item.cantidad+1}: item ))
    }else{
      setCart([...cart,product ])
    }
  }

  const borrarProducto=(product)=>{

    setCart(preVCart =>{
      return preVCart.map(item => {
        if(item.id=== product.id){
          if(item.cantidad > 1){
            return {...item,cantidad:item.cantidad-1}
          }else{
            return null
          }
        }else{
          return item
        }
      }).filter(item=> item != null)
    })

  }

  const vaciarCarrito=()=>{
    setCart([])
  }

  return (
    <>
      <Home cart={cart} vaciarCarrito={vaciarCarrito} handleAddToCart={handleAddToCart} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/>
    </>
  )
}

export default App
