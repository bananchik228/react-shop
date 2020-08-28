import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default ({path, name}) => {
    const location = useLocation()
    const select = location.pathname === path ? "menu__item_select" : ""

    return (
        <div className={`menu__item ${select}`}>
            <Link to={path}>{name}</Link>
        </div>
    )
}