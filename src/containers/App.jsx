import React, { useState } from 'react'
import Buscador from '../components/Buscador'
import Estadisticas from '../components/Estadisticas'
import Footer from '../components/Footer'
import Home from '../components/Home'
import LinkCorto from '../components/LinkCorto'
import NavBar from '../components/NavBar'
import '../css/app.css'
import '../css/buscador.css'

export default function App() {

  const [inputValue, setInputValue] = useState('')
  
  return (
    <div className='contenedor-app'>
        <NavBar/>
        <Home/>
        <Buscador setInputValue={setInputValue}/>
        <LinkCorto inputValue={inputValue}/>
        <Estadisticas/>
        <Footer/> 
    </div>
  )
}
