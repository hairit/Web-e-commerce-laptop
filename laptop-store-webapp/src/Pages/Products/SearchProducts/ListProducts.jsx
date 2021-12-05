import React, { Component } from "react";
import heart32px from "../../../Images/heart32px.png";
import corei7 from "../../../Images/corei7.png";
import corei9 from "../../../Images/corei9.png";
import corei5 from "../../../Images/corei5.png";
import nenprice from "../../../Images/nenprice.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import "../../../CSS/ProductsCss/style.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Solver from "../../../Classes/Solver";
import axios from "axios";

export default function ListProducts({pros,addProductInCart}) {
  const history = useHistory();
  const solver = new Solver();
  function handleViewDetails(detail) {
    history.push(`/laptop/${detail.id}`);
  }
  function handleViewPriceSave(pro) {
    var pricesave = pro.giacu - pro.gia
    if(pro.giacu > pro.gia){
    return (
        <div className="price-save">
          <img src={nenprice}/>
          <div className="title-price-save">
            <p className="pricesave-title">Tiết kiệm</p>
            <p className="pricesave">{solver.formatCurrency("vi-VN", "currency", "VND", pricesave)}
            </p>
          </div>
        </div>
    )
    }
  }
  function handleCorei7(pro){
    var cpu = pro.ten
    if(cpu.includes("Core i7") === true){
    return (
      <div className="view-cpu">
        <img src={corei7}/>
      </div>
    )
    }else if(cpu.includes("Core i9") === true){
      return (
      <div className="view-cpu">
        <img src={corei9}/>
      </div>
      )
    }else if(cpu.includes("Core i5") === true){
      return(
      <div className="view-cpu">
        <img src={corei5}/>
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
                {handleCorei7(pro)}
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
                <button
                  className="button add-cart" onClick={() =>addProductInCart(pro.id,pro.gia)}>
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
withRouter(ListProducts);
