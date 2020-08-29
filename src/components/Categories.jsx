import React from 'react'

import '@styles/Categories.scss'

import CategoriesItem from './CategoriesItem'

export default ({categories}) => {
    return (
        <div className="categories">

            <CategoriesItem name="Все категории" />

            {categories.map(name => (
                <CategoriesItem 
                    name={name} 
                    key={name}
                />
            ))}

            
        </div>
    )
}