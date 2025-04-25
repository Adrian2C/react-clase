import React from 'react'

const Gallery = () => {
//componente avanzado
let estilo ={display:'flex',gap:'10px',justifyContent:'center',marginTop:'10px'}
const images = [
    "https://placehold.co/400", //crea imagenes grises con numero
    "https://placehold.co/400",
    "https://placehold.co/400"
];

  return (
    <section style={estilo}>
        {
            images.map((src,index) =>( //cada elemento va a representarse con src, y el index
                <img src={src} alt={`imagen ${index+1}`}/>//por cada elemento que analiza, crea una img, donde el item src va a ser el sourev de la imagen
            )) 
            
        }
    </section>
  )
}

export default Gallery
