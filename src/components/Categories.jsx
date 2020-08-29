import React from 'react'

import '@styles/Categories.scss'

import CategoriesItem from './CategoriesItem'
import { Link, useLocation } from 'react-router-dom'

export default ({categories}) => {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)
    const queryCategory = urlParams.get('category')
    const select = queryCategory === null ? 'categories__item_select' : null

    return (
        <div className="categories">

            <div className={`categories__item ${select}`}>
                <Link to={`/catalog`}>Все категории</Link>
            </div>

            {categories.map(name => (
                <CategoriesItem 
                    name={name} 
                    queryCategory={queryCategory}
                    key={name}
                />
            ))}

            
        </div>
    )
}