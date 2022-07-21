import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../css/linkcorto.css';

export default function LinkCorto({inputValue}) {
  const [linkRecontado, setLinkRecontado] = useState('')//soy el link ingresado para recortar
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [guardado, setGuardado] = useState([])
  const prueba=guardado
  const peticionesUrl = async()=>{
    try{
      setLoading(true);
      const res= await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setLinkRecontado(res.data.result.full_short_link);
      setGuardado(inputValue,linkRecontado)
    }catch(err){
        setError(err);
    }finally{
        setLoading(false);
    }

  } 

  useEffect(() => {
    if(inputValue.length>0){
      peticionesUrl()
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inputValue])


  useEffect(() => {
    const timer= setTimeout(() => {
      setCopied(false)
    }, 1000);

    return ()=>clearTimeout(timer);
  }, [copied])

  if(loading){
    return <p className='espera'>Loading...</p>
  }
  if(error){
    return <p className='espera'>Something wne t wrong</p>
  }

  return (
    <>
    {linkRecontado && (
      <div className='contenedor-link'>
        <p className='link-cortar'>{inputValue}</p>
        <hr className='linea-link-corto'/>
        <span className='link-resultado'>{linkRecontado}</span>
        <CopyToClipboard 
          text={linkRecontado}
          onCopy={()=>setCopied(true)}>
          <button className={`boton-copiar ${copied? 'copied':''}`}>Copy!</button>
        </CopyToClipboard>
        <p className='link-cortar'>{prueba.inputValue}</p>
        <span className='link-resultado'>{prueba.linkRecontado}</span>
      </div>
    )
  }
  
  </>
)
};
