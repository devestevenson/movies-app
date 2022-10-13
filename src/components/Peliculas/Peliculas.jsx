import React from 'react'
import PeliculaTarjeta from './Pelicula-tarjeta/PeliculaTarjeta'
import './Peliculas.css'

const peliculasInfo = [
{
  id:'1',
  name:'Black Adam',
  urlImagen:'https://www.themoviedb.org/t/p/w220_and_h330_face/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg'
},
{
  id:'2',
  name:'EO',
  urlImagen:'https://www.themoviedb.org/t/p/w220_and_h330_face/1MK86Vr2nf1GSYOtRd8pFvA5RM8.jpg'
},
{
  id:'3',
  name:'Survivors Choice',
  urlImagen:'https://www.themoviedb.org/t/p/w220_and_h330_face/clbZJFNNlfX0Sh9MKRRpH13J8bA.jpg'
},
{
  urlImagen:'/src/imagenes/imagenn.jpg'
}
]

const Peliculas = () =>  {
  return (
    <div className='contenedor-peliculas'>
      {
        peliculasInfo.map(pelicula=>(
          <PeliculaTarjeta url={pelicula.urlImagen} name={pelicula.name}/>
        ))
      }
    </div>
  )
}

export default Peliculas
