import React from 'react'

import '@styles/Catalog.scss'

import CatalogItem from './CatalogItem'

export default () => {
    return (
        <div className="catalog">
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
        </div>
    )
}