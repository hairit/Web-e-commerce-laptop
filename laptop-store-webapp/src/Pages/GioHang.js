import axios from "axios";
import React from "react";
import Solver from "../Classes/Solver";
import bootstrap from "../CSS/ProductsCss/bootstrap.css";
import GioHangCss from "../CSS/GioHangCss.css";
import { NavLink } from "react-router-dom";

import no_shopping_cart from "../Images/no_shopping_cart.png";
import { useEffect, useState } from "react";
export default function GioHang({ idUser }) {
  const solver = new Solver();

  const [cardDetails, setCardDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:44343/data/carddetail/iduser=${idUser}`, null)
      .then((res) => {
        if (res.status === 200) {
          setCardDetails(res.data);
        }
      })
      .catch((err) => console.log("Get card failed" + err));
  }, []);
  console.log("123", cardDetails);
  return (
    <div className="page">
      {/* {CartItems.length === 0 && (
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
      )} */}

      <div className="container width">
        <div className="title-cart">
          <strong className="title-text">Giỏ hàng của bạn</strong>
        </div>
        <div className="center-card">
          <div className="carts">
            {cardDetails.map((item, index) => {
              return (
                <div className="info-cart" key={index}>
                  <div className="info-donhang">
                    <div className="info-chitiet">
                      <div className="info-image">
                        <div className="img-name">
                          <a>
                            <div className="imag">
                              <img
                                src={`https://localhost:44343/Images/Products/${item.nameimage}`}
                              />
                            </div>
                          </a>
                          <div className="name">
                            <a href="#">{}</a>
                            <div className="id-item">ID: {item.idProduct}</div>
                          </div>
                        </div>
                      </div>
                      <div className="info-editquantity">
                        <button
                          type="button"
                          class="btn btn-outline-info btnedit"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          class="form-control input-edit"
                          placeholder={item.soluong}
                        ></input>
                        <button type="button" class="btn btn-outline-info">
                          +
                        </button>
                      </div>
                      <div className="info-price">
                        <strong>
                          {solver.formatCurrency(
                            "vi-VN",
                            "currency",
                            "VND",
                            item.tongtien
                          )}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="payment">
            <div className="pay-info">
              <div className="thanhtoan">
                <strong>Thanh toán</strong>
              </div>
              <div className="tamtinh-thanhtien">Tạm tính</div>
              <div className="tamtinh-thanhtien">Thành tiền</div>
              <button className="btn-pay btn btn-outline-primary">
                Tiếp tục thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
