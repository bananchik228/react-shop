import React from 'react'

import './App.scss'

import Header from '@components/Header'
import Content from '@components/Content'

import sumKeyValues from '@helpers/sumKeyValues'

export default class extends React.Component {
    state = {
        categories: ['Телевизоры', 'Ноутбуки', 'Планшеты'],
        catalogList: [
            {
                name: 'Телевизор SUPRA',
                category: 'Телевизоры',
                description: 'Full HD телевизор для вашего дома.',
                price: 30000,
                img: 'images/tv_supra.jpg'
            },
            {
                name: 'Ноутбук Lenovo',
                category: 'Ноутбуки',
                description: 'Мощный офисный ноутбук.',
                params: [
                    {
                        name: 'Характеристики',
                        description: 'Экран: 15.6\'; разрешение экрана: 1920×1080; тип матрицы: TN; процессор: AMD Ryzen 3 2200u; частота: 2.1 ГГц (3.7 ГГц, в режиме Turbo); память: 4096 Мб, DDR4; AMD Radeon Vega 8; WiFi; Bluetooth; HDMI; WEB-камера; Free DOS'
                    }
                ],
                selects: [
                    {
                        name: 'Диск',
                        values: ['1TB HDD', '256GB SSD']
                    }
                ],
                price: 50000,
                img: 'images/notebook_lenovo.jpg'
            },
            {
                name: 'Ноутбук Lenovo v2',
                category: 'Ноутбуки',
                description: 'Оочень мощный офисный ноутбук.',
                price: 80000,
                img: 'images/notebook_lenovo.jpg'
            },
            {
                name: 'Apple Ipad',
                category: 'Планшеты',
                description: 'Очень дорогой планшет.',
                selects: [
                    {
                        name: 'Цвет',
                        values: ['Белый', 'Чёрный', 'Красный']
                    }
                ],
                price: 80000,
                img: 'images/ipad.jpg'
            }
        ],
        cartList: {}
    }

    addToCart = (product, event) => {
        const selects = event.target.parentElement.getElementsByTagName('select')

        let noParams = false
        const addSelects = []

        for(let i = 0; i < selects.length; i++) {
            if (selects[i].value === product.selects[i].name) {
                alert('Пожалуйста выберите все параметры!')
                noParams = true
                break
            } else {
                addSelects.push({name: product.selects[i].name, value: selects[i].value})
            }
        }

        if (!noParams) {

            const selects = []
            for (let select of addSelects) {
                selects.push(select.value)
            }
            const selectsName = ` (${selects.join(', ')})`
            
            const name = `${product.name}${selectsName !== ' ()' ? selectsName : ''}`

            const cartItem = this.state.cartList[name]

            if (cartItem && JSON.stringify(cartItem.selects) === JSON.stringify(addSelects)) {
                this.setState(state => ({
                    cartList: {
                        ...state.cartList,
                        [name]: {
                            ...state.cartList[name],
                            quantity: state.cartList[name].quantity + 1
                        }
                    }
                }))

                alert(`Товар "${name}" добавлен в корзину!`)
                return false
            }

            this.setState(state => ({
                cartList: {
                    ...state.cartList,
                    [name]: {
                        category: product.category,
                        selects: addSelects,
                        price: product.price,
                        quantity: 1
                    }
                }
            }))

            alert(`Товар "${product.name}" добавлен в корзину!`)
            return true
        }
    }

    addOneToCart = name => {
        this.setState(state => ({
            cartList: {
                ...state.cartList,
                [name]: {
                    ...state.cartList[name],
                    quantity: state.cartList[name].quantity + 1
                }
            } 
        }))
    }

    removeToCart = (name, remove) => {
        if (this.state.cartList[name].quantity > 1 && !remove) {
            this.setState(state => ({
                cartList: {
                    ...state.cartList,
                    [name]: {
                        ...state.cartList[name],
                        quantity: state.cartList[name].quantity - 1
                    }
                } 
            }))
        } else {
            const cartList = {...this.state.cartList}
            delete cartList[name]

            this.setState({
                cartList: cartList
            })
        }
    }

    render() {
        const count = sumKeyValues(Object.values(this.state.cartList), 'quantity')

        return (
            <>
                <Header count={count} />
                <Content 
                    {...this.state}
                    addToCart={this.addToCart}
                    addOneToCart={this.addOneToCart}
                    removeToCart={this.removeToCart}
                />
            </>
        )
    }
}