import React from 'react'
import '../css/footer.css'

export default function Footer() {
  return (
    <div className='container-footer'>

        <div className="logo-footer">
            <img src="logo.svg" alt="Logo no disponible" srcset="" />
        </div>
        <div className="contenedor-prueba">
            <div className="caracteristicas">
                <ul className='menu-caract'>
                    <h3 className='titulos-caracteristicas'>Feactures</h3>
                    <ul className='opciones-caract'>Link Shortening</ul>
                    <ul className='opciones-caract'>Branded Links</ul>
                    <ul className='opciones-caract'>Analytics</ul>
                </ul>

                <ul className='menu-caract'>
                    <h3 className='titulos-caracteristicas'>Resource</h3>
                    <ul className='opciones-caract'>Blog</ul>
                    <ul className='opciones-caract'>Developers</ul>
                    <ul className='opciones-caract'>Support</ul>
                </ul>

                <ul className='menu-caract'>
                    <h3 className='titulos-caracteristicas'>Company</h3>
                    <ul className='opciones-caract'>About</ul>
                    <ul className='opciones-caract'>Our Team</ul>
                    <ul className='opciones-caract'>Careers</ul>
                    <ul className='opciones-caract'>Contact</ul>
                </ul>
            
            </div>

            <div className="redes-sociales">
                <img className='logo-redes' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919553/seedem/icon-facebook_lakb9a.svg" alt="redes sociales no disponibles" srcset="" />
                <img className='logo-redes' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919555/seedem/icon-twitter_vf5qym.svg" alt="redes sociales no disponibles" srcset="" />
                <img className='logo-redes' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919554/seedem/icon-pinterest_b6rnns.svg" alt="redes sociales no disponibles" srcset="" />
                <img className='logo-redes' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919554/seedem/icon-instagram_eviadk.svg" alt="redes sociales no disponibles" srcset="" />
            </div>
        </div>

    </div>
  )
}
