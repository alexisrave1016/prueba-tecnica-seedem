import React, { useState } from 'react';
import '../css/buscador.css'

export default function Buscador({setInputValue}) {
  const [value, setValue] = useState('');
  const handlelick=()=>{
    setInputValue(value);
    setValue('');
    
  }

  
  return (
    <div className='contenedor-global-buscador'>
        <div className='contenedor-buscador' >
            <input 
            type="text" 
            placeholder='Shorten a link here...' 
            className='buscador-links' 
            value={value}
            onChange={e=>setValue(e.target.value)}
            />
            <button className='empezar' onClick={handlelick}>Shorten It!</button>
        </div>
    </div>
  )
}
