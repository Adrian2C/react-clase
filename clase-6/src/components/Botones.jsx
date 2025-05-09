import React from 'react'

const Botones = ({texto, color}) => {

    let estilo = {backgroundColor:color, color:'white', border:'none', padding:'10px 20px', borderRadius:'5px', with:'100px'}

  return (
    <button className='btn' style={estilo}>{texto}</button>
  )
}

export default Botones
