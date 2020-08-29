import React from 'react'

import '@styles/Categories.scss'

import CategoriesItem from './CategoriesItem'
import { Link, useLocation } from 'react-router-dom'

export default ({categories}) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const category = params.get('category')
    const select = category === null ? 'categories__item_select' : null

    return (
        <div className="categories">

            <div className={`categories__item ${select}`}>
                <Link to={`/catalog`}>Все категории</Link>
            </div>

            {categories.map(name => (
                <CategoriesItem 
                    name={name} 
                    queryCategory={category}
                    key={name}
                />
            ))}

        </div>
    )
}