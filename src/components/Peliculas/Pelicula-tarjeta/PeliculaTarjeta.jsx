import React from 'react'
import './PeliculaTarjeta.css'

const PeliculaTarjeta = (props) => {
  return (
    <div>
         <div className='pelicula-tarjeta' key={props.id}>
            <img src={props.url} alt='peliculas'/>
            <h2>{props.name}</h2>
            <p>Esta pelicula es buena</p>
        </div>
    </div>
  )
}

export default PeliculaTarjeta
