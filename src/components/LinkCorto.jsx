import React, { useState } from 'react'

export default function LinkCorto() {
    const [linkRecontado, setLinkRecontado] = useState('')
  return (
    <div>
        <p></p>
        <p>{linkRecontado}</p>
        <span></span>
        <button className='boton-copiar'>Copied!</button>
    </div>
  )
}
