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

                <div className="selects">

                    {product.selects ? product.selects.map(param => (
                        <select key={param.name}>
                            <option value={param.name}>{param.name}</option>
                            {param.values.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>
                    )) : null}

                </div>

                <b>{price}₽</b>

                <button onClick={event => {
                    addToCart(product, event)
                }}>Добавить в корзину</button>
            </div>
        </div>
    )
}