import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Categories from './Categories'
import Catalog from './Catalog'
import Cart from './Cart'
import Order from './Order'

export default () => {
    return (
        <div className="content">
            <Route path="/">
                <Redirect to="/catalog" />
            </Route>

            <Route exact path="/catalog">
                <Categories />
                <Catalog />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/order">
                <Order />
            </Route>
        </div>
    )
}