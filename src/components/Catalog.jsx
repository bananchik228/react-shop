import React from 'react'
import { useLocation } from 'react-router-dom'

import '@styles/Catalog.scss'

import filterByKeys from '@helpers/filterByKeys'

import CatalogItem from './CatalogItem'

export default ({catalogList, addToCart}) => {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)
    const queryCategory = urlParams.get('category')

    if (queryCategory) {
        catalogList = filterByKeys(catalogList, {category: queryCategory})
    }

    return (
        <div className="catalog">
            {catalogList.map(product => (
                <CatalogItem 
                    product={product}
                    addToCart={addToCart}
                    key={product.name} 
                />
            ))}
        </div>
    )
}