import React from 'react'

import './App.scss'

import Header from '@components/Header'
import Content from '@components/Content'

import MyImage from '@images/tv_supra.jpg'

export default class extends React.Component {
    state = {
        categories: ['Телевизоры'],
        catalogList: [
            {
                name: 'Телевизор SUPRA',
                category: 'Телевизоры',
                description: 'Full HD телевизор для вашего дома.',
                price: 30000,
                currency: '₽',
                img: MyImage
            }
        ],
        cartList: []
    }

    render() {
        const {cartList, catalogList, categories} = this.state

        return (
            <>
                <Header count={cartList.length} />
                <Content categories={categories} catalogList={catalogList} />
            </>
        )
    }
}