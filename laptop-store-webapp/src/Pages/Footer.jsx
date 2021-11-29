import React from 'react'
import '../CSS/Footer.css'
import LogoFT from "../Images/LogoFT.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";
export default function Footer({adminMode}) {
    return (
        <div className={adminMode === false ? "footer" : "footer-hide"}>
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
                  <strong> Về chúng tôi</strong>
                </h4>
                <div className="col-md-6 icon-aboutUs">
                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100073251952343" target="_blank" className="linkedin"><img src={facebook} /></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCfhHU5X0EeyFhEVCg6DrwEg"target="_blank" className="twitter"><img src={youtube} /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="twitter"><img src={linkedin} /></a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="facebook"><img src={twitter} /></a>
                  </li>
                </ul>
              </div>
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
              
            </div>
          </div>
        </div>
      
      
      
      </div>
    )
}
