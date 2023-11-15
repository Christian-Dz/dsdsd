
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import { Header } from './components/Header'
import './App.css'
import { Menu } from './components/Menu'
import { Error404 } from './pages/Error404'
import { Productos } from "./pages/Productos"
import { ProductoDetalle } from "./pages/ProductoDetalle"
import { useState } from "react"
import { Services } from "./pages/Services"
import { ServiciosGarantia } from "./pages/ServiciosGarantia"
import { ServiciosHome } from "./pages/ServiciosHome"
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas"
import { ServiciosListas } from "./pages/ServiciosListas"
import { ServicioDetalle } from "./pages/ServicioDetalle"



function App() {
  const [productos, setProductos] = useState([
    {id: 1, nombre:"Producto 1", precio:100},
    {id: 2, nombre:"Producto 2", precio:200},
    {id: 3, nombre:"Producto 3", precio:300},
    {id: 4, nombre:"Producto 4", precio:400},
    {id: 5, nombre:"Producto 5", precio:500}
])

const [servicios, setServicios] = useState([
  {id: 1, nombre:"Servicio 1", precio:100},
  {id: 2, nombre:"Servicio 2", precio:200},
  {id: 3, nombre:"Servicio 3", precio:300},
  {id: 4, nombre:"Servicio 4", precio:400},
  {id: 5, nombre:"Servicio 5", precio:500}
])

  return (
    <>
    <Header/>
     <BrowserRouter>
     <Menu/>
      <Routes>

        {/* element puede recibir jsx o un componente que es preferible. */}
        <Route path='/' element={<Home/>}/>  
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/productos' element={<Productos productos={productos}/>}/>

        {/* Rutas anidadas. */}
        <Route path="/services" element={<Services/>}>

          <Route index element={<ServiciosHome/>}/>
          <Route path="warranty" element={<ServiciosGarantia/>}/>
          <Route path="politics" element={<ServiciosPoliticas/>}/>
          <Route path="lists" element={<ServiciosListas servicios={servicios}/>}/>
          <Route path=":id" element={
          <>
          <ServiciosListas servicios={servicios}/>
          <ServicioDetalle servicios={servicios}/>
          </>}/>

        </Route>

        {/* Rutas dinámicas. */}
        <Route path='/productos/:id' element={<ProductoDetalle productos={productos}/>}/>

        {/* Redirecciones. */}
        <Route path='/redirection' element={<Navigate to="/about"/>}/>

        {/* Ruta para cualquier otro destino que no se encuentre en la pagina */}
        <Route path='*' element={<Error404/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
