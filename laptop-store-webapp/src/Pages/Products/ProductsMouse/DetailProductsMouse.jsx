import React, { useEffect, useState } from "react";
import axios from "axios";
import details from "../../../CSS/ProductsCss/details.css";
import Solver from "../../../Classes/Solver";
import shield_24px from "../../../Images/shield_24px.png";
import replace_24px from "../../../Images/replace_24px.png";
import SanPhamKhac from "./SanPhamKhac";
import GioHangCss from "../../../CSS/GioHangCss.css";
import home from "../../../Images/home.png"
import prev_50px from "../../../Images/prev_50px.png";
import next_50px from "../../../Images/next_50px.png";
import lotchuot from "../../../Images/lotchuot.png";
import promotion_32px from "../../../Images/promotion_32px.png";
import insurance_24px from "../../../Images/insurance_24px.png";
import whatsapp_32px from "../../../Images/whatsapp_32px.png";
import edit_property_32px from "../../../Images/edit_property_32px.png";
import settings_32px from "../../../Images/settings_32px.png";
import { NavLink } from "react-router-dom";
import PostsMouse from "./PostsMouse";
export default function DetailProductsMouse({idUser, match, addProductToCart }) {
  const solver = new Solver();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://localhost:44343/data/product/type=mouse/${match.match.params.id}`
      )
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log(err + "Khong goi san pham"));
  }, []);

  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const slidePro = document.querySelector(".slide-pro");
  const slideItems = document.querySelector(".slide-item");
  const slideItemsW = document.querySelector(".col_2");

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
                    <div className="title-txt">{detail.ten} </div>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwoMCxw4lerPFrWA-_AAUYqvD4THjyBk15g&usqp=CAU" className="m2" alt="img2" />
                </div>
                <div className="dots">
                    <label for="img1"><img src={`https://localhost:44343/Images/Products/${detail.nameimage}`} className="m1" alt="img1" /></label>
                    <label for="img2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwoMCxw4lerPFrWA-_AAUYqvD4THjyBk15g&usqp=CAU" className="m2" alt="img2" /></label>
                </div>
              </div>
                <div className="col detail-pro">
                  <p>- M??u: {detail.mau}</p>

                  <p>
                    - ????n led: {detail.mouseDetail && detail.mouseDetail.led}
                  </p>
                  <p>
                    - Ki???u k???t n???i:{" "}
                    {detail.mouseDetail && detail.mouseDetail.kieuketnoi}
                  </p>
                  <p>
                    - C???ng k???t n???i:{" "}
                    {detail.mouseDetail && detail.mouseDetail.ketnoi}
                  </p>
                  <p>
                    - C???m bi???n:{" "}
                    {detail.mouseDetail && detail.mouseDetail.dangcambien}
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
                      Th????ng hi???u <a href="#">{detail.thuonghieu}</a>
                      &nbsp;&nbsp; |&nbsp;&nbsp;N??m s???n xu???t: {detail.namsx}
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
                  <div className="tt-sales">Qu?? t???ng k??m khi mua h??ng</div>
                  <div className="gift">
                    <div className="">
                      <img src={lotchuot}></img>
                      <p>x1 Mi???ng l??t chu???t</p>
                    </div>
                  </div>
                  <div className="button-gr">
                    <NavLink to="/cart">
                      <button
                        type="button"
                        className="btn btn-primary btn-buy"
                        onClick={() => addProductToCart(idUser,detail.id, detail.gia)}
                      >
                        MUA NGAY
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-cart"
                      onClick={() => addProductToCart(idUser,detail.id, detail.gia)}
                    >
                      TH??M V??O GI??? H??NG
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 colors details-rights">
              <div className="chinhsachbh cskb">
                <p className="font-cs">Ch??nh s??ch b??n h??ng</p>
                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">
                    Cam k???t h??ng ch??nh h??ng 100%
                  </div>
                </div>
                <div className="fm">
                  <img src={replace_24px} />
                  <div className="detailright-t">?????i tr??? trong v??ng 7 ng??y</div>
                </div>
              </div>
              <div className="chinhsachbh">
                <p className="font-cs">D???ch v??? kh??c</p>
                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">B???o h??nh t???i nh??.</div>
                </div>
                <div className="fms">
                  <img src={insurance_24px} />
                  <div className="detailright-t bh12t">
                    B???o h??nh {detail.baohanh} th??ng ch??nh h??ng{" "}
                    {detail.thuonghieu}
                  </div>
                </div>
                <a href="#">Xem chi ti???t</a>
              </div>
              <div class="promotion">
                <p>
                  <img src={promotion_32px} />
                  Khuy???n m??i, ??u ????i kh??c
                </p>
                <div class="promotion-tt">
                  <span>
                    <a>Gi???m 15%</a> khi mua th??m ph??? ki???n (tr??? ph??? ki???n Apple)
                  </span>
                  <span>
                    <br />
                    <br />
                    Mua ph???n m???m Microsoft Office 365 Personal ch???{" "}
                    <a>990.000??</a> (Gi?? mua l??? 1.290.000??)
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
              <p>M?? t??? s???n ph???m</p>
              <div className="mt-pro">
                <span>??ang c???p nh???t</span>
              </div>
            </div>

            <div className="col-sm-4 tb-ifdetail">
              <div className=" thongso-mt">
                <div className="line-if ">
                  <img src={settings_32px} />
                </div>
                <p>Th??ng s??? k??? thu???t</p>
              </div>
              <table class="table table-striped tb-if">
                <tbody className="fn-ttif">
                  <tr>
                    <th className="row tt-if">Th????ng hi???u</th>
                    <td>{detail.thuonghieu}</td>
                  </tr>
                  <tr>
                    <th className="row tt-if">N??m s???n xu???t</th>
                    <td>{detail.namsx}</td>
                  </tr>
                  <tr>
                    <th className="row">B???o h??nh</th>
                    <td>{detail.baohanh}&nbsp;th??ng</td>
                  </tr>
                  <tr>
                    <th className="row title-detail-pro">Th??ng tin chung</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="row">Lo???i chu???t</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.loaichuot}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">M??u s???c</th>
                    <td>{detail.mau}</td>
                  </tr>

                  <tr>
                    <th className="row title-detail-pro">C???u h??nh chi ti???t</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="row">????n led</th>
                    <td>{detail.mouseDetail && detail.mouseDetail.led}</td>
                  </tr>
                  <tr>
                    <th className="row">Ki???u k???t n???i</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.kieuketnoi}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">C???ng k???t n???i</th>
                    <td>{detail.mouseDetail && detail.mouseDetail.ketnoi}</td>
                  </tr>
                  <tr>
                    <th className="row">C???m bi???n</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.dangcambien}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">T??n c???m bi???n</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.tencambien}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">????? ph??n gi???i</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.dophangiai}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Th???i gian ph???n h???i</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.thoigianphanhoi}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">S??? n??t b???m</th>
                    <td>{detail.mouseDetail && detail.mouseDetail.sonutbam}</td>
                  </tr>
                  <tr>
                    <th className="row">K??ch th?????c</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.kichthuoc}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Kh???i l?????ng</th>
                    <td>
                      {detail.mouseDetail && detail.mouseDetail.khoiluong}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-spkhac">
            <div className="xemthem">S???n ph???m kh??c</div>
            <div className="prev-next">
              <span className="btn-prev btnnp" id="btn-prevs">
                <img src={prev_50px} />
              </span>
              <span className="btn-next btnnp" id="btn-nexts">
                <img src={next_50px} />
              </span>
            </div>
            <div className="row_10">
              <div className="slide-pro" id="pro-s">
                <SanPhamKhac />
              </div>
            </div>
            <PostsMouse />
          </div>
          <div className="info-bottom row">
            <div className="col-md-6 supports">
              <div className="info-title">
                <img src={whatsapp_32px} />
                <p>H??? tr???</p>
              </div>
              <div className="support-list">
                <ul>
                  <li>
                    <div className="left">
                      <p>G???i t?? v???n m??y - ph??? ki???n</p>
                      <span>(08:30 ??? 21:30)</span>
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
                      <p>Khi???u n???i - G??p ??</p>
                      <span>(08:30 ??? 21:30)</span>
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
                      <p>B???o h??nh - H??? tr??? k??? thu???t</p>
                      <span>(09:00 ??? 21:00)</span>
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
                      <p>G???i mua h??ng t??? xa</p>
                      <span>(09:00 ??? 21:00)</span>
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
