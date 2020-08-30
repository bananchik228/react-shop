import React from 'react'
import { Link } from 'react-router-dom'

import '@styles/Cart.scss'

import CartItem from './CartItem'

export default ({cartList, addOneToCart, removeToCart}) => {

    const keys = Object.keys(cartList)
    const values = Object.values(cartList)

    let price = 0
    for (const product of values) {
        price += product.price * product.quantity
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th width="17%" align="left">Название</th>
                        <th width="16%" align="left">Категория</th>
                        <th width="18%" align="left">Дополнительно</th>
                        <th width="13%" align="left">Цена</th>
                        <th width="15%" align="left">Количество</th>
                        <th width="16%" align="left">Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {keys.map(name => (
                        <CartItem 
                            name={name} 
                            product={cartList[name]} 
                            addOneToCart={addOneToCart}
                            removeToCart={removeToCart}
                            key={name}
                        />
                    ))}
                </tbody>
            </table>

            <p>Итого {price} руб.</p>

            <Link to="/order">
                <button>Оформить заказ</button>
            </Link>
        </>
    )
}