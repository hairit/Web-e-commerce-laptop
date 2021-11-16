import axios from "axios";
import React from "react";
import Solver from "../Classes/Solver";
import bootstrap from "../CSS/ProductsCss/bootstrap.css";
import GioHangCss from "../CSS/GioHangCss.css";
import LogoFT from "../Images/LogoFT.png";
import { NavLink } from "react-router-dom";

import no_shopping_cart from "../Images/no_shopping_cart.png";
import { useEffect, useState } from "react";
export default function GioHang({ idUser }) {
  const solver = new Solver();
  const [tongtien, setTongtien] = useState(0);
  const [cardDetails, setCardDetails] = useState([]);
  useEffect(() => {
    if (idUser !== null) {
      axios
        .get(`https://localhost:44343/data/carddetail/iduser=${idUser}`, null)
        .then((res) => {
          if (res.status === 200) {
            setCardDetails(res.data);
          }
        })
        .catch((err) => console.log("Get card failed" + err));
    }
  }, []);

  function checktien (e,gia,quantity) {
    if (e.target.checked) {
      setTongtien(tongtien + gia*quantity);
    } else {
      setTongtien(tongtien - gia*quantity);
      

    }
  }

 function checksoluong(e,tien){
  if(e.target.name == "btn-cong"){
    setTongtien(tongtien+tien)
  }
 }

    if(cardDetails.length >= 0) return(
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
                          setTimeout(checktien(e,item.tongtien,item.soluong), 3000)
                        }}  value={item.id}/>
                        </div>
                        <div className="info-image">
                          <div className="img-name">
                            <a>
                              <div className="imag">
                                <img
                                  src={`https://localhost:44343/Images/Products/${item.idProductNavigation && item.idProductNavigation.nameimage}`}
                                />
                              </div>
                            </a>
                            <div className="name">
                              <a href="#">{item.idProductNavigation && item.idProductNavigation.ten}</a>
                              <div className="id-item">ID: {item.idProduct}</div>
                            </div>
                          </div>
                        </div>
                        <div className="info-editquantity">
                          <div className="btn-quantity">
                          <button type="button"class="btn-tru" name="btn-giam" onClick={(e) => checksoluong(e,item.gia)}>
                            -
                          </button>
                          <input type="text" class="finput-edit" defaultValue={item.soluong} disabled></input>
                          <button type="button" name="btn-tang" class="btn-cong" onclick={(e) => checksoluong(e,item.gia)}>
                            +
                          </button>
                          </div>
                          <div className="delet"><button className="btn-del">Xóa</button></div>
                        </div>
                        <div className="info-price">
                          <strong>
                            {solver.formatCurrency("vi-VN","currency","VND",item.tongtien)}
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
                <p id="settongtien">{solver.formatCurrency(
                      "vi-VN",
                      "currency",
                      "VND",
                      tongtien)}</p>
              </div>
              <div className="pay-info">
                <div className="thanhtoan">
                  <strong>Thanh toán</strong>
                </div>
                <div className="tamtinh-thanhtien">Tạm tính</div>
                <div className="tamtinh-thanhtien">Thành tiền</div>
                <button className="btn-pay btn btn-outline-primary"  >
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
        <div className="product-none">
          <img src={no_shopping_cart} />
          <p> Có 0 sản phẩm trong giỏ hàng</p>
        </div>
        <div className="btn-backhome">
          <NavLink className="btn-backhome" to="/">
            <button type="button" className="btn btn-home">
              Quay về trang chủ
            </button>
          </NavLink>
        </div>
      </div>
    )
  }

