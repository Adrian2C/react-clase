import React from "react";

const ListaProductos = ({ productos }) => {
    return (
        <ol>
            {
           productos.map((producto,index) => (
                <li key={index}>
                    {producto}
                </li>
           ))}
        </ol>
    );
};

export default ListaProductos;