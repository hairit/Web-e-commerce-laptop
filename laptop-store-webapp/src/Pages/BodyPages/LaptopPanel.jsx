import React from "react";
import "../../CSS/LaptopPanel.css";
import "../../CSS/Layout10.css";
import call from "../../API/API";
import URL from "../../DATA/URL";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Solver from "../../Classes/Solver";
const solver = new Solver();
const renderLaptopItem = (pro, index ,addProductToCart,history) => {
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
                  addProductToCart(pro.id,pro.gia)
          }}>Mua ngay</button>
          <button className="laptop-btn laptop-addCart" onClick={()=>addProductToCart(pro.id,pro.gia)}>Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
};
export default function Laptop({addProductToCart}) {
  const history = useHistory();
  const [pros, setPros] = useState([]);
  const [laptopQuantity, setLaptopQuantity] = useState(0);
  useEffect(() => {
    console.log("reload laptop");
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
             <NavLink to={`/laptop/15-dh0169tx`} className="laptop-panel-header-menu-item"><p>Laptop HP OMEN</p></NavLink>
             <NavLink to={`/laptop/GX531GM-ES004T`} className="laptop-panel-header-menu-item"><p>Laptop ASUS Zephyrus S</p></NavLink>
             <NavLink to={`/laptop/SF314-55G-76FW`} className="laptop-panel-header-menu-item"><p>Laptop Acer Swift 3</p></NavLink>
             <NavLink to={`/laptop/UX481FL-BM048T`} className="laptop-panel-header-menu-item"><p>Laptop ASUS ZenBook Duo</p></NavLink>
             <NavLink to={`/laptop/GL504GM-ES312T`} className="laptop-panel-header-menu-item"><p>ASUS ROG Strix SCAR II</p></NavLink>        
         </div>
      </div>
      <div className="container10Col wide">
        <div className="row-10-no-margin">
          {pros.map((pro, index) => renderLaptopItem(pro, index , addProductToCart,history))}
        </div>
      </div>
    </div>
  );
}
