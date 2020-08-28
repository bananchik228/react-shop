import React from 'react'

import '@styles/Menu.scss'

export default function(props) {
    return (
        <div className="menu">
            <div className="menu__item menu__item_select">
                <a href="/">Главная</a>
            </div>
            <div className="menu__item">
                <a href="/cart">Корзина</a>
            </div>
            <div className="menu__item">
                <a href="/order">Оформление заказа</a>
            </div>
        </div>
    )
}