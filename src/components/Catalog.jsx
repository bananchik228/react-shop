import React from 'react'

import '@styles/Catalog.scss'

import CatalogItem from './CatalogItem'

export default ({catalogList}) => {
    return (
        <div className="catalog">
            {catalogList.map(product => (
                <CatalogItem 
                    {...product}
                    key={product.name} 
                />
            ))}
        </div>
    )
}