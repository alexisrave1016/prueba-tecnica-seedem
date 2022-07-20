import React, { useState } from 'react'
import '../css/buscador.css'

export default function Buscador() {

  const [tituloAdicional, setTituloAdicional] = useState(false)
  const tituloApoyo=(e)=>{
    e.preventDefault()
      setTituloAdicional(!tituloAdicional)
  }

  
  return (
    <div className='contenedor-global-buscador'>
        <form className='contenedor-buscador' onSubmit={tituloApoyo}>
            <input type="text" placeholder='Shorten a link here...' className='buscador-links' />
            <span className={`titulo-apoyo ${tituloAdicional ?'ActivarTexto':''}`}>Please add a link</span>
            <button className='empezar'>Shorten It!</button>
        </form>
    </div>
  )
}
