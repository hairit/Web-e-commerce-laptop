import React, { Component } from "react";
import heart32px from "../../Images/heart32px.png";
import new60px from "../../Images/new60px.png";
import { useState } from "react";
import CALLER from "../../API/CALL";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function ListProduct({ pros }) {
  function format_curency(price) {
    price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return price;
  }
  const history = useHistory();

  function handleViewDetails(detail) {
    history.push(`/sanpham/${detail.id}`);
  }
  return (
    <div className="row">
      {pros.map((pro, index) => {
        return (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="products">
              <div className="thumbnail">
                <a className="af" onClick={() => handleViewDetails(pro)}>
                  <img
                    src={`https://localhost:44343/Images/Products/${pro.nameimage}`}
                    alt="Product Name"
                  />
                </a>
              </div>
              <div className="productname">{pro.ten}</div>
              <h4 className="price">{format_curency(pro.gia)} VNĐ</h4>
              <div className="button_group">
                <button className="button add-cart" type="button">
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
withRouter(ListProduct);
