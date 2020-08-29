import React from 'react'
import { Link } from 'react-router-dom'

export default ({name, description, price, currency, img}) => {
    return (
        <div className="catalog__item">
            <img src={img} alt="Телевизор SUPRA" />

            <div className="catalog__description">
                <Link to="/catalog">{name}</Link>

                <p>{description}</p>
                <b>{price}{currency}</b>

                <button onClick={() => {
                    alert(`Товар "${name}" добавлен в корзину!`)
                }}>Добавить в корзину</button>
            </div>
        </div>
    )
}