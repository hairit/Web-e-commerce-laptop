import React, { Component } from "react";
import heart32px from "../../../Images/heart32px.png";

import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Solver from "../../../Classes/Solver";

export default function ListProductScreen({ pros,addProductInCart }) {
  const history = useHistory();
  const solver = new Solver();
  function handleViewDetails(detail) {
    history.push(`/screen/${detail.id}`);
  }
  function handleViewPriceSave(pro) {
    var pricesave = pro.giacu - pro.gia
    if(pro.giacu > pro.gia){
    return (
        <div className="price-save">
          <img src="https://mondaycareer.com/wp-content/uploads/2020/11/background-%C4%91%E1%BA%B9p-3-1024x682.jpg"/>
          <div className="title-price-save">
            <p className="pricesave-title">Tiết kiệm</p>
            <p className="pricesave">{solver.formatCurrency("vi-VN", "currency", "VND", pricesave)}
            </p>
          </div>
        </div>
    )
    }
  }
  return (
    <div className="row prolst">
      {pros.map((pro, index) => {
        return (
          <div className="col-md-4 col-sm-6 lstpro " key={index}>
            <div className="products">
              <div className="thumbnail">
                {handleViewPriceSave(pro)}
                <a className="af" onClick={() => handleViewDetails(pro)}>
                  <img
                    className="img-pro"
                    src={`https://localhost:44343/Images/Products/${pro.nameimage}`}
                    alt="Product Name"
                  />
                </a>
              </div>
              <div className="productname">
                <p>{pro.ten}</p>
              </div>
              <h4 className="price">
                {solver.formatCurrency("vi-VN", "currency", "VND", pro.gia)}
              </h4>
              <p className=" gia-cu">
                {solver.formatCurrency("vi-VN", "currency", "VND", pro.giacu)}
              </p>
              <div className="button_group">
                <button className="button add-cart" type="button" onClick={() => addProductInCart(pro.id,pro.gia)}>
                  Thêm vào giỏ hàng
                </button>
                <button className="button wishlist" type="button">
                  <i className="fa">
                    <img src={heart32px} />
                  </i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
withRouter(ListProductScreen);
