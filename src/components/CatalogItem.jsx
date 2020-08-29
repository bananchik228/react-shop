import React from 'react'
import { Link } from 'react-router-dom'

export default ({product, addToCart}) => {
    const {name, description, price, img} = product

    return (
        <div className="catalog__item">
            <img src={img} alt="Телевизор SUPRA" />

            <div className="catalog__description">
                <Link to="/catalog">{name}</Link>

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