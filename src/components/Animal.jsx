import React from 'react'

const Animal = ({ animal }) => {
    return (
        <article>
            <img src={animal.img} alt={animal.nombre} />
            <p>{animal.nombre} (ID: {animal.id})</p>
            <i>likes: {animal.likes}</i>
        </article>
    )
}

export default Animal
