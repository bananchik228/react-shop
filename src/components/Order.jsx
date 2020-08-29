import React from 'react'

import '@styles/Order.scss'

export default () => {
    return (
        <form className="order">
            <div className="order__message order__message_info">
                <b>Ваша корзина пуста.</b> Перед отправкой заказа добавьте в корзину хотя бы один товар.
            </div>

            <div className="order__item">
                <div className="order__name">
                    <label htmlFor="input-name">
                        <b>Ваше имя *</b>
                    </label>
                </div>
                <div className="order__input">
                    <input type="text" placeholder="Ваше имя" id="input-name" />
                </div>
            </div>

            <div className="order__item">
                <div className="order__name">
                    <label htmlFor="input-email">
                        <b>Email *</b>
                    </label>
                </div>
                <div className="order__input">
                    <input type="text" placeholder="Email" id="input-email" />
                </div>
            </div>

            <div className="order__item">
                <div className="order__name">
                    <label htmlFor="input-phone">
                        <b>Телефон</b>
                    </label>
                </div>
                <div className="order__input">
                    <input type="text" placeholder="Телефон" id="input-phone" />
                </div>
            </div>

            <div className="order__item">
                <div className="order__name" />
                <div className="order__input">
                    <div className="order__message order__message_warning">
                        <b>Важно!</b> Укажите номер, что бы мы связались с вами раньше.
                    </div>
                </div>
            </div>

            <div className="order__item">
                <div className="order__name">
                    <label htmlFor="input-phone">
                        <b>Способ доставки</b>
                    </label>
                </div>
                <div className="order__input">
                    <p>
                        <input name="delivery" type="radio" value="pickup" /> 
                        Самовывоз
                    </p>
                    <p>
                        <input name="delivery" type="radio" value="postOffice" /> 
                        Почта России (300 руб.)
                    </p>
                </div>
            </div>

            <div className="order__item">
                <div className="order__name">
                    <label htmlFor="input-address">
                        <b>Адрес доставки</b>
                    </label>
                </div>
                <div className="order__input">
                    <input type="text" placeholder="Адрес доставки" id="input-address" />
                </div>
            </div>

            <div className="order__item">
                <div className="order__name">
                    <label htmlFor="input-message">
                        <b>Сообщение</b>
                    </label>
                </div>
                <div className="order__input">
                    <textarea type="text" placeholder="Доп. информация" id="input-message" />
                </div>
            </div>

            <div className="order__item">
                <div className="order__name" />
                <div className="order__input">
                    <button className="order__submit">Отправить заказ</button>
                </div>
            </div>
        </form>
    )
}