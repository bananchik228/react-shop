import React from 'react'
import { Link } from 'react-router-dom'

export default ({name, queryCategory}) => {
    const select = name === queryCategory ? 'categories__item_select' : null

    return (
        <div className={`categories__item ${select}`}>
            <Link to={`/catalog?category=${name}`}>{name}</Link>
        </div>
    )
}