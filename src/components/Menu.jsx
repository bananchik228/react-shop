import React from 'react'

import '@styles/Menu.scss'

import MenuItem from './MenuItem'

export default ({count}) => {
    return (
        <div className="menu">
            <MenuItem path="/catalog" name="Каталог" />
            <MenuItem path="/cart" name="Корзина" count={count} />
            <MenuItem path="/order" name="Оформление заказа" />
        </div>
    )
}