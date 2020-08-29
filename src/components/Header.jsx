import React from 'react'

import Menu from './Menu'

import '@styles/Header.scss'

export default ({count}) => {
    return (
        <div className="header">
            <h1>Мой интернет-магазин</h1>
            <p>Самый лучший интернет-магазин по продаже техники!</p>
            <Menu count={count} />
        </div>
    )
}