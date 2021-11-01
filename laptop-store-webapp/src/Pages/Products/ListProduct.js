import React, { Component } from "react";
import heart32px from "../../Images/heart32px.png";
import new60px from "../../Images/new60px.png";
import { useState } from "react";
import CALLER from "../../API/CALL";
export default function ListProduct({pros}) {
  return (
    <div className="row">
        {
          pros.map((pro,index) => {
            return(
                  <div className="col-md-4 col-sm-6" key={index}>
                  <div className="products">
                    <div className="thumbnail">
                      <a href="details.html">
                        <img src={`https://localhost:44343/Images/Products/${pro.nameimage}`} alt="Product Name" />
                      </a>
                    </div>
                    <div className="productname">{pro.ten}</div>
                    <h4 className="price">{pro.gia+"đ"}</h4>
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
          )
          })
        }
    </div>
  )
}

      
    