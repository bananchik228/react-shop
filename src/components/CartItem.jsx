import React from 'react'

export default ({name, product, addOneToCart, removeToCart}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{product.category}</td>
            <td>Пусто</td>
            <td>{product.price} руб.</td>
            <td>
                <span class="remove" onClick={() => removeToCart(name)}>-</span>
                {product.quantity}
                <span class="add" onClick={() => addOneToCart(name)}>+</span>
            </td>
            <td>
                {product.quantity * product.price} руб. 
                <span class="removeСompletely" onClick={() => {
                    if(window.confirm(`Удалить товар "${name}" из корзины?`)) {
                        removeToCart(name, true)
                    }
                }}>×</span>
            </td>
        </tr>
    )
}