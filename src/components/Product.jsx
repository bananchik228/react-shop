import React from 'react'
import { useParams } from 'react-router-dom'

import '@styles/Product.scss'

import filterByKeys from '@helpers/filterByKeys'

export default ({catalogList, addToCart}) => {
    const { category, number } = useParams()
    const productsList = filterByKeys(catalogList, {category: category})
    const product = productsList[number - 1]

    return (
        <div className="product">
            <h1>{product.name}</h1>

            <div className="product__info">
                <img src={`../../${product.img}`} alt={product.name} />
                <div className="product__description">
                    <h3>Категория</h3>
                    <p>{product.category}</p>
                    <h3>Описание</h3>
                    <p>{product.description}</p>

                    {product.params ? product.params.map(param => (
                        <React.Fragment key={param.name}>
                            <h3>{param.name}</h3>
                            <p>{param.description}</p>
                        </React.Fragment>
                    )) : null}

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

                    <button onClick={event => {
                        addToCart(product, event)
                    }}>
                        Добавить в корзину ({product.price}₽)
                    </button>
                </div>
            </div>
        </div>
    )
}