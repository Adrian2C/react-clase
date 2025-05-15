import React from "react";
import Botones from "./Botones";

function Tarjeta({ titulo,img, descripcion, botonTexto, botonColor }) {

    const estilo = {width: '300px', heigth: '100px !important', backgroundColor: 'white', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' };

    return (
      <div className='promos' style={estilo}>
        <h2>{titulo}</h2>
        <img src={img} alt="Imagen de la tarjeta" />
        <p>{descripcion}</p>
        <Botones  texto={botonTexto} color={botonColor}/>
      </div>
    );
  }

  export default Tarjeta;