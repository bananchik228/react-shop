import React from 'react'
import { Link } from 'react-router-dom'

export default ({product, number, addToCart}) => {
    const {name, category, description, price, img} = product

    return (
        <div className="catalog__item">
            <img src={img} alt={name} />

            <div className="catalog__description">
                <Link to={`/catalog/${category}/${number}`}>{name}</Link>

                <p>{description}</p>
                <b>{price}₽</b>

                <button onClick={() => {
                    addToCart(product)
                    alert(`Товар "${name}" добавлен в корзину!`)
                }}>Добавить в корзину</button>
            </div>
        </div>
    )
}