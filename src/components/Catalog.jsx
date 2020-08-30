import React from 'react'
import { useLocation } from 'react-router-dom'

import '@styles/Catalog.scss'

import filterByKeys from '@helpers/filterByKeys'

import CatalogItem from './CatalogItem'

export default ({catalogList, addToCart}) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const сategory = params.get('category')

    let filter = false
    if (сategory) {
        catalogList = filterByKeys(catalogList, {category: сategory})
   } else {
       filter = true
   }

    return (
        <div className="catalog">
            {catalogList.map((product, index) => (
                <CatalogItem 
                    product={product}
                    number={filter ? (catalogList.filter(car => car.category === product.category).findIndex(el => el.name === product.name) + 1) : index + 1}
                    addToCart={addToCart}
                    key={product.name} 
                />
            ))}
        </div>
    )
}