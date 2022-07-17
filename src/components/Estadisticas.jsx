import React from 'react'
import '../css/estadisticas.css'

export default function Estadisticas() {
  return (
    <div className='contedor-estadisticas'>
        
        <div className="titulo-estaditicas">
            <h2 className='titulo-principal-est'>Advanced Statistics</h2>
            <p className='parrafo-titulo'>track how your links are performing across the web with our advanced statistics dasboard.</p>
        </div>

        <div className="bloque-estadista">
            <div className="indicadores">
                <div className="logo-estadisticas">
                    <img className='emoticon' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919553/seedem/icon-brand-recognition_w6tbra.svg" alt="logo no disponible" srcset="" />
                </div>
                <div className="estadisticas">
                    <h3 className='titulo-estadistas'>Brand Recogition</h3>
                    <p className='detalles-estadistas'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
            </div>

            <div className="detalles">
                <div className="logo-estadisticas">
                    <img className='emoticon' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1658014524/seedem/icon-detailed-records_htuqru.svg" alt="logo no disponible" srcset="" />
                </div>
                <div className="estadisticas">
                    <h3 className='titulo-estadistas'>Detailed Records</h3>
                    <p className='detalles-estadistas'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
            </div>

            <div className="perzonalizacion">
                <div className="logo-estadisticas">
                    <img className='emoticon' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1657919554/seedem/icon-fully-customizable_h2dagk.svg" alt="logo no disponible" srcset="" />
                </div>
                <div className="estadisticas">
                    <h3 className='titulo-estadistas'>Fully Customizable</h3>
                    <p className='detalles-estadistas'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>

        
        </div>
        <hr className='linea'/>

        <div className="enlances">
            <h2 className='titulo-enlances'>Boost your links today</h2>
            <button className='empezar'>Get Started</button>
        </div>
        
    </div>
  )
}
