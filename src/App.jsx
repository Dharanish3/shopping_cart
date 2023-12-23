import React ,{useState}  from 'react'
import Topbar from './Component/Topbar'
import Header from './Component/Header'
import Card from './Component/Card'
import Footer from './Component/Footer'

function App() {
  const [cart , setCart] = useState(0)

   
  return (
    <>
    <Topbar cart={cart} setCart={setCart}/>
    <Header/>
    <Card cart={cart} setCart={setCart}  />
    <Footer/>
    </>
   
  )
}

export default App
