import React from "react";
import "../../CSS/LaptopPanel.css";
import "../../CSS/Layout10.css";
import call from "../../API/API";
import URL from "../../DATA/URL";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Solver from "../../Classes/Solver";
import axios from "axios";
const solver = new Solver();
const renderLaptopItem = (pro, index ,addCart,history) => {
  return (
    <div to={`/laptop/${pro.id}`} className="col-10-no-padding c-10-2 laptop-item" key={index}>
      <div  className="laptop-infor">
        <div className="laptop-image">
          <NavLink to={`/laptop/${pro.id}`}><img className="laptop-image-img" src={URL + `/Images/Products/${pro.nameimage}`} alt={pro.nameimage} /></NavLink>
          </div>
          <div className="laptop-detail">
            <NavLink to={`/laptop/${pro.id}`}  className="laptop-detail-item laptop-name">{pro.ten}</NavLink>
            <div className="laptop-detail-item laptop-price">
              <div className="laptop-price-value" >
                {solver.formatCurrency("vi-VN", "currency", "VND", pro.gia)}
              </div>
              <div className="laptop-old-price-value old-price">{solver.formatCurrency("vi-VN", "currency", "VND", pro.giacu)}</div>
            </div>
          </div>
          <div className="laptop-gift"><p>{pro.uudai}</p></div>
          <div className="laptop-btn-group">
            <button className="laptop-btn laptop-buy" onClick={()=>{
                    addCart(pro.id,pro.gia);
                    history.push('/cart');
            }}>Mua ngay</button>
            <button className="laptop-btn laptop-addCart" onClick={()=>addCart(pro.id,pro.gia)}>Thêm vào giỏ</button>
          </div>
      </div>
    </div>
  );
};
export default function Laptop({addCart}) {
  const history = useHistory();
  const [pros, setPros] = useState([]);
  const [laptopQuantity, setLaptopQuantity] = useState(0);
  useEffect(() => {
    call("GET", "data/product/type=laptop/enable", null)
      .then((res) => setPros(res.data))
      .catch((err) =>{
             console.log("Errol!! when try to get laptop product" + err);
             setPros([]);
      });
  }, []);
  useEffect(() => {
    call("GET", "data/product/type=laptop/", null)
      .then((res) => setLaptopQuantity(res.data.length))
      .catch((err) =>{
             console.log("Errol!! when try to get laptop product" + err);
             setLaptopQuantity(0);
      });
  }, []);
  return (
    <div className="laptop-panel">
      <div className="laptop-panel-header">
         <p className="laptop-panel-header-title">Laptop nổi bật nhất</p>
         <div className="laptop-panel-header-menu">
             <NavLink to={`/laptop`} className="laptop-panel-header-menu-item active"><p>Xem tất cả {laptopQuantity} sản phẩm</p></NavLink>
             <NavLink to={`/laptop/brand/DELL`} className="laptop-panel-header-menu-item"><p>DELL</p></NavLink>
             <NavLink to={`/laptop/brand/ASUS`} className="laptop-panel-header-menu-item"><p>ASUS</p></NavLink>
             <NavLink to={`/laptop/brand/HP`} className="laptop-panel-header-menu-item"><p>ACER</p></NavLink>
             <NavLink to={`/laptop/brand/ACER`} className="laptop-panel-header-menu-item"><p>HP</p></NavLink>
             <NavLink to={`/laptop/brand/LENOVO`} className="laptop-panel-header-menu-item"><p>LENOVO</p></NavLink>     
         </div>
      </div>
      <div className="container10Col wide">
        <div className="row-10-no-margin">
          {pros.map((pro, index) => renderLaptopItem(pro,index,addCart,history))}
        </div>
      </div>
    </div>
  );
}
