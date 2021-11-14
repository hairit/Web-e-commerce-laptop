import React, { Component } from "react";
import heart32px from "../../../Images/heart32px.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Solver from "../../../Classes/Solver";
import axios from "axios";

export default function ListProductLaptop({ pros , reLoad , idUser}) {
  const history = useHistory();
  const solver = new Solver();
  function handleViewDetails(detail) {
    history.push(`/laptop/${detail.id}`);
  }
  function addCardHandleClick  (idProduct , price){
    console.log(idProduct + "log" + price + idUser);
    axios.get(`https://localhost:44343/data/carddetail/add/iduser=${idUser}/idproduct=${idProduct}/tongtien=${price}`,null)
      .then(res => {
        if(res.status === 201){
           reLoad();
        }
        else alert("không thể thêm vào giỏ hàng");
      }).catch(err => console.log("Add card failed"))
  }
  return (
    <div className="row prolst">
      {pros.map((pro, index) => {
        return (
          <div className="col-md-4 col-sm-6 lstpro " key={index}>
            <div className="products">
              <div className="thumbnail">
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
              <div className="button_group">
                <button
                  className="button add-cart" onClick={() => addCardHandleClick(pro.id,pro.gia)}
                  // onClick={() => handleAddCard()}
                >
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
