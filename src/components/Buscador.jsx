import React, { useState } from 'react'
import '../css/buscador.css'

export default function Buscador({setInputValue}) {

  console.log(setInputValue);
  const [tituloAdicional, setTituloAdicional] = useState(false);
const [value, setValue] = useState('');

  // const tituloApoyo=(e)=>{
  //   e.preventDefault()
  //     setTituloAdicional(!tituloAdicional)
  // }

  const handlelick=(e)=>{
    e.preventDefault();
    setInputValue(value);
    setValue('');
  
  }

  
  return (
    <div className='contenedor-global-buscador'>
        <form className='contenedor-buscador' >
            <input 
            type="text" 
            placeholder='Shorten a link here...' 
            className='buscador-links' 
            value={value}
            onChange={e=>setValue(e.target.value)}
            />
            <span className={`titulo-apoyo ${tituloAdicional ?'ActivarTexto':''}`}>Please add a link</span>
            <button className='empezar' onClick={handlelick}>Shorten It!</button>
        </form>
    </div>
  )
}
