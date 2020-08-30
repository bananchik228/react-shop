import React from 'react'

export default ({name, product, addOneToCart, removeToCart}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{product.category}</td>
            <td>
                <ul>{product.selects.length ? product.selects.map(({name, value}) => (
                        <li key={name}>{name}: {value}</li>
                    )) : 'Пусто'}
                </ul>
            </td>
            <td>{product.price} руб.</td>
            <td>
                <span className="remove" onClick={() => removeToCart(name)}>-</span>
                {product.quantity}
                <span className="add" onClick={() => addOneToCart(name)}>+</span>
            </td>
            <td>
                {product.quantity * product.price} руб. 
                <span className="removeСompletely" onClick={() => {
                    if(window.confirm(`Удалить товар "${name}" из корзины?`)) {
                        removeToCart(name, true)
                    }
                }}>×</span>
            </td>
        </tr>
    )
}