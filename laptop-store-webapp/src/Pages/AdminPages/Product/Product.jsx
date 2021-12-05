import React from 'react';
import ListProduct from './ListProduct';
import AddProduct from './AddProduct/AddProduct';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./Product.css"
import EditProduct from './EditProduct/EditProduct';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Product({ idUser }) {
    const [pros, setPros] = useState("");
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`https://localhost:44343/data/product/${pros}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [pros])

    const clickEditProduct = (id) => {
        setPros(id);
        console.log(pros);
    }
    return (
        <Router>
            <div className="admin-product">
                <div className="product-layout">
                    <div className="product-title"> <div className="product-title-text"> Trang sản phẩm</div> </div>
                    <Route path="/admin/:iduser/product/list" exact component={() => <ListProduct idUser={idUser} clickEditProduct={clickEditProduct} />}></Route>
                    <Route path="/admin/:iduser/product/add" exact component={() => <AddProduct />}></Route>
                    <Route path="/admin/:iduser/product/edit/:idproduct" exact component={() => <EditProduct product={product} />}></Route>
                </div>
            </div >
        </Router>

    )
}
