import React from "react";
import "../../CSS/LaptopPanel.css";
import "../../CSS/Layout10.css";
import call from "../../API/API";
import URL from "../../DATA/URL";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Solver from "../../Classes/Solver";
const solver = new Solver();
const renderLaptopItem = (pro, index ,addProductToCart) => {
  return (
    <NavLink to={`/laptop/${pro.id}`} className="col-10-no-padding c-10-2 laptop-item" key={index}>
      <div  className="laptop-infor">
        <div className="laptop-image">
          <img className="laptop-image-img" src={URL + `/Images/Products/${pro.nameimage}`} alt={pro.nameimage} /></div>
        <div className="laptop-detail">
          <div  className="laptop-detail-item laptop-name">{pro.ten}</div>
          <div className="laptop-detail-item laptop-price">
            <div className="laptop-price-value" >
              {solver.formatCurrency("vi-VN", "currency", "VND", pro.gia)}
            </div>
            <div className="laptop-old-price-value old-price">{solver.formatCurrency("vi-VN", "currency", "VND", pro.giacu)}</div>
          </div>
        </div>
        <div className="laptop-gift"><p>{pro.uudai}</p></div>
        <div className="laptop-btn-group">
          <button className="laptop-btn laptop-buy">Mua ngay</button>
          <button className="laptop-btn laptop-addCart" onClick={()=>addProductToCart(pro.id,pro.gia)}>Thêm vào giỏ</button>
        </div>
      </div>
    </NavLink>
  );
};
export default function Laptop({addProductToCart}) {
  const [pros, setPros] = useState([]);
  useEffect(() => {
    call("GET", "data/product/type=laptop/enable", null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log("Errol!! when try to get laptop product" + err));
  }, []);
  return (
    <div className="laptop-panel">
      {/* <div className="laptop-panel-header">
        <div className="laptop-panel-header-logo">
          <p>Top các sản phẩm bán chạy</p>
        </div>
      </div> */}
      <div className="laptop-panel-header">
         <h3 className="laptop-panel-header-title">Laptop nổi bật nhất</h3>
         <div className="laptop-panel-header-menu">
             <NavLink to={`/laptop/brand/DELL`} className="laptop-panel-header-menu-item"><p>DELL</p></NavLink>
             <NavLink to={`/laptop/brand/ASUS`} className="laptop-panel-header-menu-item"><p>ASUS</p></NavLink>
             <NavLink to={`/laptop/brand/HP`} className="laptop-panel-header-menu-item"><p>ACER</p></NavLink>
             <NavLink to={`/laptop/brand/ACER`} className="laptop-panel-header-menu-item"><p>HP</p></NavLink>
             <NavLink to={`/laptop/brand/LENOVO`} className="laptop-panel-header-menu-item"><p>LENOVO</p></NavLink>
         </div>
      </div>
      <div className="container10Col wide">
        <div className="row-10-no-margin">
          {pros.map((pro, index) => renderLaptopItem(pro, index , addProductToCart))}
        </div>
      </div>
    </div>
  );
}
