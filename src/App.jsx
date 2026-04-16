

import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import Products from './Components/Products/Products'
import Statas from './Components/Statas/Statas'

const getProducts =async ()=>{
  const res = await fetch ('/Data.json')
  return res.json()
}

const productsPromise = getProducts();

function App() {

  return (
    <>
     <NavBar/>
     <Banner/>
     <Statas/>
     <Products  productsPromise={productsPromise} />
    </>
  )
}

export default App
