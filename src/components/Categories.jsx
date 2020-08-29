import React from 'react'
import { Link } from 'react-router-dom'

import '@styles/Categories.scss'

export default () => {
    return (
        <div className="categories">
            <div className="categories__item categories__item_select">
                <Link to="/catalog">Все категории</Link>
            </div>

            <div className="categories__item">
                <Link to="/catalog">Телевизоры</Link>
            </div>

            <div className="categories__item">
                <Link to="/catalog">Ноутбуки</Link>
            </div>

            <div className="categories__item">
                <Link to="/catalog">Планшеты</Link>
            </div>
        </div>
    )
}