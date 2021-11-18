import React from "react";
import Order from "../CSS/Order.css";

export default function ThanhToan() {
  return (
    <div className="wrapper order">
      <div className="container-order">
        <div className="center-order">
          <div className="info-orderUser">
            <div className="info-orderRight">
              <div className="info-ordertitle">
                <p>Nhận hàng tại nhà</p>
              </div>
              <div className="info-orderDataUser">
                <div className="info-user">
                  <div className="info-nhanhang">Thông tin nhận hàng</div>
                  <div className="info-receive">
                    <div className="info-nameUser">
                      <p>Huỳnh Phạm Quốc Đạt</p>
                      <img />
                    </div>
                    <div className="phone-adress">0392392071</div>
                    <div className="phone-adress">
                      Hòa do 1B, phường Cam Phúc Bắc, thành phố Cam Ranh, tỉnh
                      Khánh Hòa
                    </div>
                  </div>
                  <div className="info-addAdress">Thêm địa chỉ</div>
                </div>
              </div>
              <div className="info-delivery"></div>
            </div>
            <div className="info-orderNote"></div>
          </div>
          <div className="info-orderPro"></div>
        </div>
      </div>
    </div>
  );
}
