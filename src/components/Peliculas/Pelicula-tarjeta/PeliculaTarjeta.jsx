import React from 'react'
import './PeliculaTarjeta.css'

const PeliculaTarjeta = (props) => {
  return (
    <div>
         <div className='pelicula-tarjeta'>
            <img src={props.url} alt='peliculas'/>
            <h2>{props.name}</h2>
        </div>
    </div>
  )
}

export default PeliculaTarjeta
