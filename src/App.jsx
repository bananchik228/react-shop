import React from 'react'

import './App.scss'

import Header from '@components/Header'
import Content from '@components/Content'

import sumKeyValues from '@helpers/sumKeyValues'

import MyImage from '@images/tv_supra.jpg'
import MyImage1 from '@images/notebook_lenovo.jpg'
import MyImage2 from '@images/ipad.jpg'

export default class extends React.Component {
    state = {
        categories: ['Телевизоры', 'Ноутбуки', 'Планшеты'],
        catalogList: [
            {
                name: 'Телевизор SUPRA',
                category: 'Телевизоры',
                description: 'Full HD телевизор для вашего дома.',
                price: 30000,
                img: MyImage
            },
            {
                name: 'Ноутбук Lenovo',
                category: 'Ноутбуки',
                description: 'Мощный офисный ноутбук.',
                price: 50000,
                img: MyImage1
            },
            {
                name: 'Ноутбук Lenovo v2',
                category: 'Ноутбуки',
                description: 'Оочень ощный офисный ноутбук.',
                price: 80000,
                img: MyImage1
            },
            {
                name: 'Apple Ipad',
                category: 'Планшеты',
                description: 'Очень дорогой планшет.',
                price: 80000,
                img: MyImage2
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

    render() {
        const count = sumKeyValues(Object.values(this.state.cartList), 'quantity')

        return (
            <>
                <Header count={count} />
                <Content 
                    {...this.state}
                    addToCart={this.addToCart}
                />
            </>
        )
    }
}