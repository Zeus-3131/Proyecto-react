import React from 'react'

const Item = ({id,nombre,precio,imagen}) => {
  return (
    <div>
        <img src={imagen} alt={nombre} />
        <h3>nombre:{nombre} </h3>
        <p>precio:{precio}</p>
        <p>id:{id}</p>
        <button>ver detalles</button>
    </div>
  )
}

export default Item