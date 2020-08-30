import React from 'react'
import { Link } from 'react-router-dom'

import '@styles/Cart.scss'

import CartItem from './CartItem'

export default ({cartList, addOneToCart, removeToCart}) => {

    const keys = Object.keys(cartList)
    console.log(keys)
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
                        <th width="25%" align="left">Название</th>
                        <th width="21%" align="left">Категория</th>
                        <th width="17%" align="left">Цена</th>
                        <th width="17%" align="left">Количество</th>
                        <th width="20%" align="left">Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {keys.map(name => (
                        <CartItem 
                            name={name} 
                            product={cartList[name]} 
                            addOneToCart={addOneToCart}
                            removeToCart={removeToCart}
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