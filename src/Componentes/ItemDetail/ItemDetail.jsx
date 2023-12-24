import React from 'react'

const ItemDetail = ({nombre,precio,id,imagen}) => {
  return (
    <div>
            <h2>nombre: {nombre}</h2>
            <p>precio: {precio}</p>
            <p>id:{id}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non autem ipsam repellendus consequatur, quas aut! Vero quaerat sint esse cum aliquam sed, ex atque, ducimus in perspiciatis praesentium. Id, sit.</p>
            <img src={imagen} alt={nombre} />
    </div>
  )
}

export default ItemDetail