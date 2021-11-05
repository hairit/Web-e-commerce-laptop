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
import Solver from "../../Classes/Solver";

export default function ListProductLaptop({ pros }) {
  const history = useHistory();
  const solver = new Solver();
  function handleViewDetails(detail) {
    history.push(`/sanpham/${detail.id}`);
  }
  return (
    <div className="row prolst">
      {pros.map((pro, index) => {
        console.log(pro);
        return (
          <div className="col-md-4 col-sm-6 lstpro" key={index}>
            <div className="products">
              <div className="thumbnail">
                <a className="af" onClick={() => handleViewDetails(pro)}>
                  <img
                    src={`https://localhost:44343/Images/Products/${pro.nameimage}`}
                    alt="Product Name"
                  />
                </a>
              </div>
              <div className="productname">
<<<<<<< HEAD:laptop-store-webapp/src/Pages/Products/ListProductLaptop.js
                <p>{pro.ten}</p>
=======
                <p>
                  {pro.ten} {pro.id}
                  {/* <br />( {pro.laptopDetail.cpu} {pro.laptopDetail.ram}{" "}
                  {pro.laptopDetail.vga} {pro.laptopDetail.manhinh} ) */}
                </p>
>>>>>>> 0ac71d9ba6555cc576f90b189a0e355e640ad06c:laptop-store-webapp/src/Pages/Products/ListProduct.js
              </div>
              <h4 className="price">
                {solver.formatCurrency("vi-VN", "currency", "VND", pro.gia)}
              </h4>
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
withRouter(ListProductLaptop);
