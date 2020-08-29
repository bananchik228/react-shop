import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default ({path, name, count}) => {
    const location = useLocation()
    const select = location.pathname === path ? "menu__item_select" : ""

    return (
        <div className={`menu__item ${select}`}>
            <Link to={path}>
                {name}
                {count ? 
                    <div className="menu__count" data-small={count > 9}>{count}</div> : null}
            </Link>
        </div>
    )
}