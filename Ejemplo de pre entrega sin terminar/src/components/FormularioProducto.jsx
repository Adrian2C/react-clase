import React, { useState } from 'react'

const FormularioProducto = ({ onAgregar }) => {
    const [producto, setProductos] = useState({
        nombre: '',
        precio: '',
        descripcion: ''

    })

    /* aca creamos la funcion para manejar los errores, y marcamos q el useStae van a ser obejctos */
    const [errores, setErrores] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target
        /* Aca deicmos que cada elemento(representado por name), le asignamos el valor que digamos */
        setProductos({...setProductos, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
/* le enviamos el producto, mediante la funcion para enviarle al back */
        onAgregar(producto)
        /* una vez que se envia el producto, luego se vacian los elementos */
        setProductos({
            nombre: '',
            precio: '',
            descripcion: ''

        })
    }

    return (
        <div>

        </div>
    )
}

export default FormularioProducto
