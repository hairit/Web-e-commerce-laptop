import React from 'react'
import '../CSS/Footer.css'
import LogoFT from "../Images/LogoFT.png";
export default function Footer() {
    return (
        <div className="footer">
        <div className="footer-info">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-logo">
                  <a href="#">
                    <img src={LogoFT} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 p">
                <h4 className="title">
                  Thông tin
                  <strong> liên hệ</strong>
                </h4>
                <p>273, An Dương Vương, phường 3, quận 5, TP Hồ Chí Minh</p>
                <p>Call Us : 0988 777 666</p>
                <p>Email : info@gmail.com</p>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4 className="title">
                  Chăm sóc
                  <strong> Khách hàng</strong>
                </h4>
                <ul className="support">
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="#">Phương thức thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Thông tin</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 p">
                <h4 className="title">
                  Đánh giá
                  <strong> về chúng tôi</strong>
                </h4>
                <p>*****</p>
                <form className="newsletter">
                  <input type="text" name placeholder="Type your email...." />
                  <input
                    type="submit"
                    defaultValue="SignUp"
                    className="button"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-info">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p">
                <p>
                  Copyright © 2012. Designed by
                  <a href="#"> Team SGU</a>. All rights reseved
                </p>
              </div>
              <div className="col-md-6">
                <ul className="social-icon">
                  <li>
                    <a href="#" className="linkedin"></a>
                  </li>
                  <li>
                    <a href="#" className="google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="facebook"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      
      
      </div>
    )
}
