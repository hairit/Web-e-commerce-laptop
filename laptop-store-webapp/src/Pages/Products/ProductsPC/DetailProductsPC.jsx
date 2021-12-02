import React, { useEffect, useState } from "react";
import axios from "axios";
import details from "../../../CSS/ProductsCss/details.css";
import Solver from "../../../Classes/Solver";
import shield_24px from "../../../Images/shield_24px.png";
import replace_24px from "../../../Images/replace_24px.png";
import SanPhamKhac from "./SanPhamKhac"
import GioHangCss from "../../../CSS/GioHangCss.css";
import home from "../../../Images/home.png"
import prev_50px from "../../../Images/prev_50px.png";
import next_50px from "../../../Images/next_50px.png";
import promotion_32px from "../../../Images/promotion_32px.png";
import insurance_24px from "../../../Images/insurance_24px.png";
import whatsapp_32px from "../../../Images/whatsapp_32px.png";
import edit_property_32px from "../../../Images/edit_property_32px.png";
import settings_32px from "../../../Images/settings_32px.png";
import { NavLink } from "react-router-dom"
export default function DetailProductsPC({idUser, match, addProductToCart}) {
  const solver = new Solver();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://localhost:44343/data/product/type=pc/${match.match.params.id}`
      )
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log(err + "Khong goi san pham"));
  }, []);

  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const slidePro = document.querySelector(".slide-pro");
  let positionX = 0;
  let index = 0;
  btnNext &&
    btnNext.addEventListener("click", function () {
      changeSlide(1);
    });
  btnPrev &&
    btnPrev.addEventListener("click", function () {
      changeSlide(-1);
    });

  function changeSlide(direction) {
    if (direction === 1) {
      if (index >= 5) {
        index = 5;
        btnNext.style = "visibility: hidden;";
        return;
      }
      positionX = positionX - 242;
      slidePro.style = `transform: translateX(${positionX}px)`;
      console.log(index);
      index++;
    } else if (direction === -1) {
      btnNext.style = "visibility: none;";

      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + 242;
      slidePro.style = `transform: translateX(${positionX}px)`;
      console.log(index);
      index--;
    }
  }
  console.log(detail);
  return (
    <div className="single-product">
      <div className="container">
        <div className="row row-top">
        
          <div className="ttchung">
          <div className="col-md-15 tops">
              <div className="home-icon">
                <NavLink to="/" className="img-backhome">
                  <img className="icon-home"  src={home}/>
                  </NavLink>
                  <p> {">"} </p>
                  <div className="title-carticon">
                    <div className="title-txt">{detail.ten} {" "} {detail.pcdetail && detail.pcdetail.detailcpu} </div>
                  </div>
              </div>
            </div>
            <div className=" row imagesPro">
              <div className="col-md-6 product-slider imgsl">
              <div className="slider">
                <div className="images">
                    <input type="radio" name="slide" id="img1" />
                    <input type="radio" name="slide" id="img2" />
                    <input type="radio" name="slide" id="img3" />
                    <img src={`https://localhost:44343/Images/Products/${detail.nameimage}`} className="m1" alt="img1" />
                </div>
                <div className="dots">
                    <label for="img1"><img src={`https://localhost:44343/Images/Products/${detail.nameimage}`} className="m1" alt="img1" /></label>
                </div>
              </div>
                <div className="col detail-pro">
                  <p>
                    - Loại PC: {detail.pcdetail && detail.pcdetail.typepc}
                  </p>

                  <p>
                    - Main board: {detail.pcdetail && detail.pcdetail.mainboard}
                  </p>
                  <p>
                    - Loại CPU: {detail.pcdetail && detail.pcdetail.cputype}
                  </p>
                  <p>
                    - CPU: {detail.pcdetail && detail.pcdetail.cpu}
                  </p>
                  <p>
                    - Chi tiết CPU: {detail.pcdetail && detail.pcdetail.detailcpu}
                  </p>
                  <p>
                    - Ram: {detail.pcdetail && detail.pcdetail.ram}
                  </p>
                  <p>
                    - VGA: {detail.pcdetail && detail.pcdetail.vgatype}
                  </p>
                 
                </div>
              </div>
              <div className="col-md-6 colors ttdetail">
                <div className="right-content ">
                  <h4>
                    {detail.ten} {detail.id}
                  </h4>
                  <div className="tt">
                    <div className="thuonghieuL">
                      Thương hiệu <a href="#">{detail.thuonghieu}</a>
                      &nbsp;&nbsp; |&nbsp;&nbsp;Năm sản xuất: {detail.namsx}
                    </div>
                  </div>
                  <div className="tt-price">
                    <p className="price-new">
                    {solver.formatCurrency(
                      "vi-VN",
                      "currency",
                      "VND",
                      detail.gia
                    )}
                    </p>
                    <p className="price-old">
                    {solver.formatCurrency(
                      "vi-VN",
                      "currency",
                      "VND",
                      detail.giacu
                    )}
                    </p>
                  </div>
                  {/* <div className="tt-sales">Quà tặng kèm khi mua hàng</div>
                  <div className="gift">
                    <div className="">
                      <img src="https://lh3.googleusercontent.com/8TYtx-F0wLPEsufDd-N2y4txkDy3dxxjipjA6k5DjccQhwtdK_6Mx0YPuSUZF3bOEGG5-hP8-MFNReb4X0k=rw"></img>
                      <p>x1 Túi đựng laptop</p>
                    </div>
                  </div> */}
                  <div className="button-gr">
                    <NavLink to="/cart">
                    <button type="button" className="btn btn-primary btn-buy" onClick={() =>addProductToCart(idUser,detail.id,detail.gia)}>
                      MUA NGAY
                    </button>
                    </NavLink>
                    <button type="button" className="btn btn-outline-primary btn-cart" onClick={() =>addProductToCart(idUser,detail.id,detail.gia)}>
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 colors details-rights">
              <div className="chinhsachbh cskb">
                <p className="font-cs">Chính sách bán hàng</p>
                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">
                    Cam kết hàng chính hãng 100%
                  </div>
                </div>
                <div className="fm">
                  <img src={replace_24px} />
                  <div className="detailright-t">Đổi trả trong vòng 7 ngày</div>
                </div>
              </div>
              <div className="chinhsachbh">
                <p className="font-cs">Dịch vụ khác</p>
                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">Bảo hành tại nhà.</div>
                </div>
                <div className="fms">
                  <img src={insurance_24px} />
                  <div className="detailright-t bh12t">
                    Bảo hành {detail.baohanh} tháng chính hãng {detail.thuonghieu}
                  </div>
                </div>
                <a href="#">Xem chi tiết</a>
              </div>
              <div class="promotion">
                <p>
                  <img src={promotion_32px} />
                  Khuyến mãi, ưu đãi khác
                </p>
                <div class="promotion-tt">
                  <span>
                    <a>Giảm 15%</a> khi mua thêm phụ kiện (trừ phụ kiện Apple)
                  </span>
                  <span>
                    <br />
                    <br />
                    Mua phần mềm Microsoft Office 365 Personal chỉ{" "}
                    <a>990.000đ</a> (Giá mua lẻ 1.290.000đ)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row bt-if colors">
            <div className="col-sm-8 info-detail thongso-mt">
              <div className="line-if">
                <img src={edit_property_32px} />
              </div>
              <p>Mô tả sản phẩm</p>
              <div className="mt-pro">
                <span>Đang cập nhật</span>
              </div>
            </div>

            <div className="col-sm-4 tb-ifdetail">
              <div className=" thongso-mt">
                <div className="line-if ">
                  <img src={settings_32px} />
                </div>
                <p>Thông số kỹ thuật</p>
              </div>
              <table class="table table-striped tb-if">
                <tbody className="fn-ttif">
                  <tr>
                    <th className="row tt-if">Thương hiệu</th>
                    <td>{detail.thuonghieu}</td>
                  </tr>
                  <tr>
                    <th className="row tt-if">Năm sản xuất</th>
                    <td>{detail.namsx}</td>
                  </tr>
                  <tr>
                    <th className="row">Bảo hành</th>
                    <td>{detail.baohanh}&nbsp;tháng</td>
                  </tr>
                  <tr>
                    <th className="row title-detail-pro">Cấu hình chi tiết</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="row">Loại PC</th>
                    <td>{detail.pcdetail && detail.pcdetail.typepc}</td>
                  </tr>
                  <tr>
                    <th className="row">Main board</th>
                    <td>{detail.pcdetail && detail.pcdetail.mainboard}</td>
                  </tr>
                  <tr>
                    <th className="row">Loại CPU</th>
                    <td>{detail.pcdetail && detail.pcdetail.cputype}</td>
                  </tr>
                  <tr>
                    <th className="row">CPU</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.cpu}
                    </td>
                  </tr>
                  <tr>
                    <th className="row title-detail-pro">Chi tiết CPU</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.detailcpu}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Ram</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.ram}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Chi tiết Ram</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.detailram}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">VGA</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.vgatype}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Loại VGA</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.vganame}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">PSU</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.psu}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Case PC</th>
                    <td>
                    {detail.pcdetail && detail.pcdetail.casepc}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-spkhac">
            <div className="xemthem">Sản phẩm khác</div>
            <div className="prev-next">
              <span className="btn-prev btnnp"id="btn-prevs" >
                <img src={prev_50px} />
              </span>
              <span className="btn-next btnnp"id="btn-nexts">
                <img src={next_50px} />
              </span>
            </div>
            <div className="row_10">
              <div className="slide-pro" id="pro-s">
                <SanPhamKhac />
              </div>
            </div>
            {/* <PostsKeyboard /> */}
          </div>
          <div className="info-bottom row">
            <div className="col-md-6 supports">
              <div className="info-title">
                <img src={whatsapp_32px} />
                <p>Hỗ trợ</p>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>Gọi tư vấn máy - phụ kiện</p>
                      <span>(08:30 – 21:30)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>Khiếu nại - Góp ý</p>
                      <span>(08:30 – 21:30)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>Bảo hành - Hỗ trợ kỹ thuật</p>
                      <span>(09:00 – 21:00)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>Gọi mua hàng từ xa</p>
                      <span>(09:00 – 21:00)</span>
                    </div>
                    <div className="right">
                      <strong>1800.6018</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 addressm">
              <iframe className="bando" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6696584237025!2d106.68006961509548!3d10.759922362439628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2s!4v1638173238125!5m2!1svi!2s" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
