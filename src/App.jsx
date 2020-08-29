import React from 'react'

import './App.scss'

import Header from '@components/Header'
import Content from '@components/Content'

export default class extends React.Component {
    state = {
        cartList: Array(5)
    }

    render() {
        const cartList = this.state.cartList
        return (
            <>
                <Header count={cartList.length} />
                <Content />
            </>
        )
    }
}