import React from 'react';
import ListProduct from './ListProduct';
import AddProduct from './AddProduct/AddProduct';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./Product.css"


export default function Product({ }) {
    return (
        <Router>
            <div className="admin-product">
                <div className="product-layout">
                    <div className="product-title"> <div className="product-title-text"> Trang sản phẩm</div> </div>
                    <Route path="/admin/product/list" component={() => <ListProduct />}></Route>
                    <Route path="/admin/product/add" component={() => <AddProduct />}></Route>
                </div>
            </div >
        </Router>

    )
}
