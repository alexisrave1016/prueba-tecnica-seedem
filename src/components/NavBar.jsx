import React, { useState } from 'react'
import '../css/navBar.css'

export default function NavBar() {

    const [menu, setMenu] = useState(false)

    const clickMenu=()=>{
        setMenu(!menu)
    }
  return (
    <div className='container-navBar'>

        <div className="container-opciones">
            <div className="logo">
                <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919555/seedem/logo_naj2id.svg" alt="Logo no disponible" srcset="" />
            </div>
        </div>

        <button className="hamburguesa" onClick={clickMenu}>
            <img className='logo-hamburguesa' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1658242207/seedem/descarga1_kdb39e.svg" alt="" srcset="" />
        </button>

        <div className= {`contenedor-prueba ${menu ?'isActive':''}`}>
            <div className='opciones'>
                <h2 className='seleccion-opciones'>Feactures</h2>
                <h2 className='seleccion-opciones'>Princing</h2>
                <h2 className='seleccion-opciones'>Resources</h2>
            </div>
            <hr className='linea-menu'/>
            <div className='login-registro'>
                <div className='login'>Login</div>
                <div className='login registro'>Sign Up</div>
            </div>
        </div>
       
    </div>
  )
}
