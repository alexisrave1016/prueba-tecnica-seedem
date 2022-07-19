import React from 'react'
import '../css/buscador.css'

export default function Buscador() {
  
  return (
    <div className='contenedor-global-buscador'>
        <form className='contenedor-buscador' >
            <input type="text" placeholder='Shorten a link here...' className='buscador-links'/>
            <button className='empezar'>Shorten It!</button>
        </form>
    </div>
  )
}
