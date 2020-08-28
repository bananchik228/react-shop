import React from 'react'

import Menu from './Menu'

import '@styles/Header.scss'

export default function() {
    return (
        <div className="header">
            <h1>Мой интернет-магазин</h1>
            <p>Самый лучший интернет-магазин по продаже техники!</p>
            <Menu />
        </div>
    )
}