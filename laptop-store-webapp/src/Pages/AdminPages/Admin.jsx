import React from 'react';
import { useEffect } from 'react';
import Customer from './Customer/Customer';
import Order from './Order/Order';
import Product from './Product/Product';
import User from './User/User';
import Sidebar from './Sidebar/Sidebar';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default function Admin({changeAdminMode}) {
    useEffect(() => {
        changeAdminMode('on');
    }, [])
    return (
        <Router>
            <Sidebar />
            <div className="admin-home">
                <Route path="/admin/customer" component={() => <Customer />}></Route>
                <Route path="/admin/order" component={() => <Order />}></Route>
                <Route path="/admin/product" component={() => <Product />}></Route>
                <Route path="/admin/user" component={() => <User />}></Route>
            </div>
        </Router>
    )
}
