import React from 'react'
import { useParams } from 'react-router-dom'

import '@styles/Product.scss'

import filterByKeys from '@helpers/filterByKeys'

export default ({catalogList, addToCart}) => {
    const { category, number } = useParams()
    const productsList = filterByKeys(catalogList, {category: category})
    const product = productsList[number - 1]

    console.log(product)

    return (
        <div className="product">
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}₽</p>
        </div>
    )
}