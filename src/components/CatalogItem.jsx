import React from 'react'
import { Link } from 'react-router-dom'

import MyImage from '@images/tv_supra.jpg'

export default () => {
    return (
        <div className="catalog__item">
            <img src={MyImage} alt="Телевизор SUPRA" />
            <div className="catalog__description">
                <Link to="/catalog">Телевизор SUPRA</Link>
                <p>Full HD телевизор для вашего дома.</p>
                <b>30000₽</b>
                <button onClick={() => {
                    alert('Товар "Телевизор SUPRA" добавлен в корзину!')
                }}>Добавить в корзину</button>
            </div>
        </div>
    )
}