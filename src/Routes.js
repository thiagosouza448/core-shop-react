import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ListProduct from './pages/ListProducts';
import Product from './pages/Product';


export default function () {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ListProduct} />
            <Route path="/product" component={Product} />
        </BrowserRouter>
    );
}

