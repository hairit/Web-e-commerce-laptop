import React from "react";
import { NavLink } from "react-router-dom";
import GioHangCss from "../CSS/GioHangCss.css";
import no_shopping_cart from "../Images/no_shopping_cart.png";

export default function GioHang({ CartItems, handleaddCart }) {
  console.log("123", CartItems);
  return (
    <div className="page">
      <div className="container width">
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
        {CartItems.map((item) => (
          <div key={item.id}>
            <div className="title-cart">
              <strong className="title-text">Giỏ hàng của bạn</strong>
            </div>
            <div className="carts">
              <div className="info-cart">
                <div className="info-donhang">
                  <div className="info-chitiet">
                    <div className="info-image">
                      <div className="img-name">
                        <a>
                          <div className="imag">
                            <img src={item.nameimage} />
                          </div>
                        </a>
                        <div className="name">
                          <a href="#">{item.ten}</a>
                          <div className="id-item">ID: 9SD-224VN</div>
                        </div>
                      </div>
                    </div>
                    <div className="info-editquantity"></div>
                    <div className="info-price"></div>
                  </div>
                </div>
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
        ))}
      </div>
    </div>
  );
}
