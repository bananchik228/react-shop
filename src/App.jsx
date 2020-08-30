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
                        description: 'Экран: 15.6\'; разрешение экрана: 1920×1080; тип матрицы: TN; процессор: AMD Ryzen 3 2200u; частота: 2.1 ГГц (3.7 ГГц, в режиме Turbo); память: 4096 Мб, DDR4; SSD: 256 Гб; AMD Radeon Vega 8; WiFi; Bluetooth; HDMI; WEB-камера; Free DOS'
                    }
                ],
                selects: [
                    {
                        name: 'Цвет',
                        values: ['Белый', 'Чёрный', 'Красный']
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
                price: 80000,
                img: 'images/ipad.jpg'
            }
        ],
        cartList: {}
    }

    addToCart = product => {
        let cartItem = this.state.cartList[product.name]

        if (cartItem) {
            this.setState(state => ({
                cartList: {
                    ...state.cartList,
                    [product.name]: {
                        ...state.cartList[product.name],
                        quantity: state.cartList[product.name].quantity + 1
                    }
                }
            }))
        } else {

            this.setState(state => ({
                cartList: {
                    ...state.cartList,
                    [product.name]: {
                        category: product.category,
                        price: product.price,
                        quantity: 1
                    }
                }
            }))
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