import React, { useState } from 'react'
import '../css/buscador.css'


const Buscador = ({setInputValue}) => {
  // console.log(setInputValue + 'soy clic letra');

  // const [tituloAdicional, setTituloAdicional] = useState(false);
  const [value, setValue] = useState('');

  // const tituloApoyo=(e)=>{
  //   e.preventDefault()
  //     setTituloAdicional(!tituloAdicional)
  // }

  const handlelick=()=>{
    setInputValue(value);
    setValue('');
    // if(setValue.length=0){
    //   return <p className='titulo-apoyo'>Please add a link</p>
    // }
    console.log('soy soy'+setValue(value));
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
            {/* <span className={`titulo-apoyo ${value ?'ActivarTexto':''}`}>Please add a link</span> */}
            <button className='empezar' onClick={handlelick}>Shorten It!</button>
        </div>
    </div>
  )
}

export default Buscador

// export default function Buscador({setInputValue}) {

//   console.log(setInputValue);
//   const [tituloAdicional, setTituloAdicional] = useState(false);
// const [value, setValue] = useState('');

//   // const tituloApoyo=(e)=>{
//   //   e.preventDefault()
//   //     setTituloAdicional(!tituloAdicional)
//   // }

//   const handlelick=(e)=>{
//     e.preventDefault();
//     setInputValue(value);
//     setValue('');
  
//   }

  
//   return (
//     <div className='contenedor-global-buscador'>
//         <form className='contenedor-buscador' >
//             <input 
//             type="text" 
//             placeholder='Shorten a link here...' 
//             className='buscador-links' 
//             value={value}
//             onChange={e=>setValue(e.target.value)}
//             />
//             <span className={`titulo-apoyo ${tituloAdicional ?'ActivarTexto':''}`}>Please add a link</span>
//             <button className='empezar' onClick={handlelick}>Shorten It!</button>
//         </form>
//     </div>
//   )
// }
