import axios from "axios";
import React from "react";
import Solver from "../Classes/Solver";
import bootstrap from "../CSS/ProductsCss/bootstrap.css";
import GioHangCss from "../CSS/GioHangCss.css";
import LogoFT from "../Images/LogoFT.png";
import { NavLink } from "react-router-dom";

import tk_shopping_img from "../Images/tk_shopping_img.png";
import { useEffect, useState } from "react";
export default function GioHang({ idUser, addCardHandleClick, deleteItemCart,deleteQuantityCart}) {
  const solver = new Solver();
  const [tongtien, setTongtien] = useState(0);
  const [cardDetails, setCardDetails] = useState([]);
  const [reload, setReload] = useState(0);
  const reLoad = () =>{
    if(reload === 0) setReload(1);
    else setReload(0);
  }
  useEffect(() => {
    if (idUser !== null) {
      axios
        .get(`https://localhost:44343/data/carddetail/iduser=${idUser}`, null)
        .then((res) => {
          if (res.status === 200) {
            setCardDetails(res.data);   
          }
        })
        .catch((err) => setCardDetails([]) );
    }
  }, [reload]);
  function checktien (e,gia,quantity) {
    if (e.target.checked) {
      setTongtien(tongtien + gia*quantity);
    } else {
      setTongtien(tongtien - gia*quantity);
    }
  }
  console.log(cardDetails);


console.log(cardDetails);
    if(cardDetails.length > 0) return(
      <div className="page">
        <div className="container width">
          <div className="title-cart">
            <strong className="title-text">Giỏ hàng của bạn</strong>
          </div>
          {/* <div className="center-logo">
          <input class="check-item" type="checkbox" value=""  />
          <img src={LogoFT}/>
          </div> */}
          <div className="center-card">
            <div className="carts">
              {cardDetails.map((item, index) => {
                return (
                  <div className="info-cart" key={index}>
                    <div className="info-donhang">
                      <div className="info-chitiet">
                      <div className="info-check">
                        <input class="check-item" type="checkbox"  name="hobby[]"  id="check-item" 
                        onChange={(e)=> {
                          checktien(e, item.idProductNavigation.gia,item.soluong)
                        }}  value={item.id}/>
                        </div>
                        <div className="info-image">
                          <div className="img-name">
                            <a>
                              <div className="imag">
                                <img
                                  src={`https://localhost:44343/Images/Products/${item.idProductNavigation.nameimage}`}
                                alt=""/>
                              </div>
                            </a>
                            <div className="name">
                              <a href="#">{item.idProductNavigation.ten}</a>
                              <div className="id-item">ID: {item.idProduct}</div>
                            </div>
                          </div>
                        </div>
                        <div className="info-editquantity">
                          <div className="btn-quantity">
                          <button type="button"class="btn-tru" name="btn-giam" onClick={() => deleteQuantityCart(idUser,item.idProduct,item.idProductNavigation.gia,item.soluong)}>
                             -
                          </button>
                          <input type="text" class="finput-edit" placeholder={item.soluong} disabled />
                          <button type="button" name="btn-tang" className="btn-cong"
                          onClick={() => addCardHandleClick(item.idProduct,item.idProductNavigation.gia )}> + </button>
                          </div>
                          <div className="delet">
                            <button type="button" className="btn-del" onClick={() => deleteItemCart(idUser,item.idProduct)}>Xóa</button>
                          </div>
                        </div>
                        <div className="info-price">
                          <strong className="tongtien-price">
                            {solver.formatCurrency("vi-VN","currency","VND",item.tongtien)}
                          </strong>
                          <strong className="giagoc">
                            {solver.formatCurrency("vi-VN","currency","VND", item.idProductNavigation.gia)}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="payment">
              <div className="payment-sum">
                <strong>Tổng tiền</strong>
                <p id="settongtien">{solver.formatCurrency("vi-VN","currency","VND",tongtien)}</p>
              </div>
              <div className="pay-info">
                <div className="thanhtoan">
                  <strong>Thanh toán</strong>
                </div>
                <div className="tamtinh-thanhtien ">
                  <p className="txt-left">Giảm giá</p>
                  <p className="tamtinh">{solver.formatCurrency("vi-VN","currency","VND",0)}</p>
                </div>
                <div className="tamtinh-thanhtien">
                  <p className="txt-left">Thành tiền</p>
                  <p className="thanhtien">{solver.formatCurrency("vi-VN","currency","VND",tongtien)}</p>
                </div>
                <button className="btn-pay btn btn-outline-primary" >
                  Tiếp tục thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    else return (
      <div className="centerp">
        <div className="center-car">
        <div className="product-none">
          <img src={tk_shopping_img} />
          <p> Bạn chưa có sản phẩm trong giỏ hàng</p>
        </div>
        <div className="btn-backhome">
          <NavLink className="btn-backhome" to="/">
            <button type="button" className="btn btn-home">
              Tiếp tục mua sắm
            </button>
          </NavLink>
        </div>
        </div>
      </div>
    )
  }

