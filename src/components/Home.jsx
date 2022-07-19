import React from 'react'
import '../css/home.css'

export default function Home() {
  return (
    <div className='container-home'>
        <article className="container-contenido">
            <h1 className='titulo-home'>More than just shorter links</h1>
            <p className='parrafo-home'>buil your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className='empezar'>Get Started</button>
        </article>

        <img className='imagen-home' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919556/seedem/illustration-working_peogt8.svg" alt="Imagen no disponible" />
    </div>
  )
}
