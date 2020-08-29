import React from 'react'

import '@styles/Header.scss'

import Menu from './Menu'

export default ({count}) => {
    return (
        <div className="header">
            <h1>Мой интернет-магазин</h1>
            <p>Самый лучший интернет-магазин по продаже техники!</p>
            <Menu count={count} />
        </div>
    )
}