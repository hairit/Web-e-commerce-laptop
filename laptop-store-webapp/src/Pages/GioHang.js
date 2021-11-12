import React from "react";
import { NavLink } from "react-router-dom";
import GioHangCss from "../CSS/GioHangCss.css";
import no_shopping_cart from "../Images/no_shopping_cart.png";

export default function GioHang() {
  return (
    <div className="container">
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
    </div>
  );
}
