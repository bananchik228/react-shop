import React from 'react'
import { Link } from 'react-router-dom'

export default ({name}) => {
    return (
        <div className="categories__item">
            <Link to="/catalog">{name}</Link>
        </div>
    )
}