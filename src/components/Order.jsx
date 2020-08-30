import React from 'react'

import '@styles/Order.scss'

import sumKeyValues from '@helpers/sumKeyValues'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            pickup: 'Самовывоз',
            address: '',
            message: '',
            orderMessage: {
                type: false,
                title: '',
                text: ''
            }
        }
    }

    handleChange = event => {
        const el = event.target
        const type = el.id.split('-')[1]

        this.setState({
            [type]: el.value
        })
    }

    handleOptionChange = event => {
        this.setState({
            pickup: event.target.value
        })

        console.log(this.state)
    }

    sendForm = event => {
        if (this.state.name === '') {
            this.setState({
                orderMessage: {
                    type: 'error',
                    title: 'Ошибка!',
                    text: 'Имя не может быть пустым!',
                }
            })

        // eslint-disable-next-line
        } else if (!this.state.email.match(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u)) {
            this.setState({
                orderMessage: {
                    type: 'error',
                    title: 'Ошибка!',
                    text: 'Введите корректный Email!',
                }
            })

        } else if (this.state.phone !== '' &&!this.state.phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
            this.setState({
                orderMessage: {
                    type: 'error',
                    title: 'Ошибка!',
                    text: 'Введите корректный номер телефона или оставьте его пустым!',
                }
            })
        } else {
            this.setState({
                orderMessage: {
                    type: 'success',
                    title: 'Спасибо за заказ!',
                    text: 'Мы скоро свяжемся с вами для уточнения подробностей.',
                }
            })
        }

        event.preventDefault()
    }

    render() {
        const cartArray = Object.values(this.props.cartList)
        const count = sumKeyValues(cartArray, 'quantity')

        let price = 0
        for (const product of cartArray) {
            price += product.price * product.quantity
        }

        return (
            <form className="order">
                <div className="order__message order__message_info">
                    {count === 0 ? 
                        <>
                            <b>Ваша корзина пуста. </b> 
                            Перед отправкой заказа добавьте в корзину хотя бы один товар. 
                        </> : 
                            `В вашей корзине ${count} товара(ов) на общую сумму ${price} рублей. Заполните форму что бы оформить заказ.`
                    }
                </div>

                <div className="order__item">
                    <div className="order__name">
                        <label htmlFor="input-name">
                            <b>Ваше имя *</b>
                        </label>
                    </div>
                    <div className="order__input">
                        <input value={this.state.name} placeholder="Ваше имя" id="input-name" onChange={this.handleChange} />
                    </div>
                </div>

                <div className="order__item">
                    <div className="order__name">
                        <label htmlFor="input-email">
                            <b>Email *</b>
                        </label>
                    </div>
                    <div className="order__input">
                        <input value={this.state.email} placeholder="Email" id="input-email" onChange={this.handleChange} />
                    </div>
                </div>

                <div className="order__item">
                    <div className="order__name">
                        <label htmlFor="input-phone">
                            <b>Телефон</b>
                        </label>
                    </div>
                    <div className="order__input">
                        <input value={this.state.phone} placeholder="Телефон" id="input-phone" onChange={this.handleChange}/>
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
                            <input name="delivery" type="radio" value="Самовывоз" checked={this.state.pickup === 'Самовывоз'} onChange={this.handleOptionChange} /> 
                            Самовывоз
                        </p>
                        <p>
                            <input name="delivery" type="radio" value="Почта России" checked={this.state.pickup === 'Почта России'} onChange={this.handleOptionChange} /> 
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
                        <input value={this.state.address} placeholder="Адрес доставки" id="input-address" onChange={this.handleChange} />
                    </div>
                </div>

                <div className="order__item">
                    <div className="order__name">
                        <label htmlFor="input-message">
                            <b>Сообщение</b>
                        </label>
                    </div>
                    <div className="order__input">
                        <textarea value={this.state.message} placeholder="Доп. информация" id="input-message" onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="order__item">
                    <div className="order__name" />
                    <div className="order__input">
                        {this.state.orderMessage.type ? 
                            <div className={`order__message order__message_${this.state.orderMessage.type}`}>
                                <b>{this.state.orderMessage.title}</b> {this.state.orderMessage.text}
                            </div>
                        : null}
                    </div>
                </div>

                <div className="order__item">
                    <div className="order__name" />
                    <div className="order__input">
                        <button className="order__submit" disabled={count === 0 ? true: false} onClick={this.sendForm}>Отправить заказ</button>
                    </div>
                </div>
            </form>
        )
    }
}