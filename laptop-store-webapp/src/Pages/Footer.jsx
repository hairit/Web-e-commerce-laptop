import React from 'react'
import '../CSS/Footer.css'
import LogoFT from "../Images/LogoFT.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";
import Shipper from "../Images/Shipper.png";
import exchange from "../Images/exchange.png";
import cardPay from "../Images/cardPay.png";
import chat from "../Images/chat.png";
export default function Footer({adminMode}) {
    return (
        <div className={adminMode === false ? "footer" : "footer-hide"}>
        <div className="footer-info">
          <div className="footer-info-top">
            <div className="footer-top">
                <div className="ft-item">
                  <img src={Shipper}/>
                  <div className="txt-ft">
                    <strong>CHÍNH SÁCH GIAO HÀNG</strong>
                    <p>Nhận hàng và thanh toán tại nhà</p>
                  </div>
                </div>
                <div className="ft-item">
                <img src={exchange}/>
                  <div className="txt-ft">
                    <strong>ĐỔI TRẢ DỄ DÀNG</strong>
                    <p>1 đổi 1 trong 15 ngày</p>
                  </div>
                </div>
                <div className="ft-item">
                <img src={cardPay}/>
                  <div className="txt-ft">
                    <strong>THANH TOÁN TIỆN LỢI</strong>
                    <p>Trả tiền mặt, CK, trả góp 0%</p>
                  </div>
                </div>
                <div className="ft-item">
                <img src={chat}/>
                  <div className="txt-ft">
                    <strong>HỖ TRỢ NHIỆT TÌNH</strong>
                    <p>Tư vấn, giải đáp mọi thắc mắc</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="container ft">
            
            <div className="row">
              <div className="col-md-3 col-logo">
                <div className="footer-logo">
                  <a href="#">
                    <img src={LogoFT} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 ft-center">
                <h4 className="title">
                <strong>Chính sách </strong>
                  chung
                </h4>
                <ul className="support">
                  <li>
                    <a href="#">Chính sách, quy định chung</a>
                  </li>
                  <li>
                    <a href="#">Chính sách vận chuyển</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo hành</a>
                  </li>
                  <li>
                    <a href="#">Chính sách cho doanh nghiệp</a>
                  </li>
                  <li>
                    <a href="#">Chính sách hàng chính hãng</a>
                  </li>
                  <li>
                    <a href="#">Bảo mật thông tin khách hàng</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 ft-center">
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
              <div className="col-md-3 col-sm-6 ft-center">
                <h4 className="title">
                  Cộng đồng
                  <strong> LAPPEE</strong>
                </h4>
                <ul className="support">
                  <li>
                    <a href="#">Lappee Việt Nam</a>
                  </li>
                  <li>
                    <a href="#">Lappee Media</a>
                  </li>
                  <li>
                    <a href="#">Ngày hội Lappee</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 p ft-center">
                <h4 className="title">
                  Thông tin
                  <strong> liên hệ</strong>
                </h4>
                <p>273, An Dương Vương, phường 3, quận 5, TP Hồ Chí Minh</p>
                <p>Call Us : 0988 777 666</p>
                <p>Email : info@gmail.com</p>
              </div>
              <div className="col-md-3 p ft-center">
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
