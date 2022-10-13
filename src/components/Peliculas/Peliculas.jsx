import React from 'react'
import PeliculaTarjeta from './Pelicula-tarjeta/PeliculaTarjeta'
import './Peliculas.css'

const Peliculas = () => {
  return (
    <div className='contenedor-peliculas'>
        <PeliculaTarjeta url='https://www.themoviedb.org/t/p/w220_and_h330_face/lGIkv9fQ3i7yVcJXDvG0Vry00LI.jpg' name='Bestia'/>

        <PeliculaTarjeta url='https://www.themoviedb.org/t/p/w220_and_h330_face/nn7prZXNz3dgCV5jeShqqfHcU9F.jpg' name='Avatar'/>

        <PeliculaTarjeta url='https://www.themoviedb.org/t/p/w220_and_h330_face/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg' name='Minions'/>

        <PeliculaTarjeta url='https://www.themoviedb.org/t/p/w220_and_h330_face/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg' name='Rick and Morty'/>
    </div>
  )
}

export default Peliculas
