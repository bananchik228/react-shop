import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Categories from './Categories'
import Catalog from './Catalog'
import Product from './Product'
import Cart from './Cart'
import Order from './Order'

export default ({categories, catalogList, cartList, addToCart, addOneToCart, removeToCart}) => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/catalog">
                    <Categories categories={categories} />
                    <Catalog catalogList={catalogList} addToCart={addToCart} />
                </Route>

                <Route exact path="/catalog/:category/:number">
                    <Product catalogList={catalogList} addToCart={addToCart} />
                </Route>
                
                <Route exact path="/cart">
                    <Cart cartList={cartList} addOneToCart={addOneToCart} removeToCart={removeToCart} />
                </Route>
                
                <Route exact path="/order">
                    <Order cartList={cartList} />
                </Route>

                <Redirect to="/catalog" />
            </Switch>
        </div>
    )
}