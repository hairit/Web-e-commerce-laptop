import React, { useEffect, useState } from "react";
import axios from "axios";
import details from "../../../CSS/ProductsCss/details.css";
import Solver from "../../../Classes/Solver";
import { withRouter } from "react-router";
import SanPhamKhac from "./SanPhamKhac";
import prev_50px from "../../../Images/prev_50px.png";
import next_50px from "../../../Images/next_50px.png";
import freeshipping_4px from "../../../Images/freeshipping_4px.png";
import freeshippingcs_24px from "../../../Images/freeshippingcs_24px.png";
import shield_24px from "../../../Images/shield_24px.png";
import replace_24px from "../../../Images/replace_24px.png";
import settings_24px from "../../../Images/settings_24px.png";
import monitor_24px from "../../../Images/monitor_24px.png";
import prev_60px from "../../../Images/prev_60px.png";
import next_60px from "../../../Images/next_60px.png";
import promotion_32px from "../../../Images/promotion_32px.png";
import insurance_24px from "../../../Images/insurance_24px.png";
import whatsapp_32px from "../../../Images/whatsapp_32px.png";
import edit_property_32px from "../../../Images/edit_property_32px.png";
import settings_32px from "../../../Images/settings_32px.png";
import { NavLink } from "react-router-dom"
// function renderGoiypro() {
//   useEffect(() => {
//     axios
//       .get("https://localhost:44343/data/Product/type=laptop", null)
//       .then((res) => {
//         console.log(res);
//         setDetail(res.data);
//       })
//       .catch((err) => console.log(err + "Khong goi san pham"));
//   }, []);
// };

export default function DetailProductsScreen({ match, addCardHandleClick ,history}) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);
  const solver = new Solver();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://localhost:44343/data/product/type=screen/${match.match.params.id}`
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
      if (index >= 9) {
        index = 9;
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
        <div className="row">
          {/* {isEmptyObj === false && (
              <> */}
          <div className="ttchung">
            <div className="col-md-15 colors tops">
              <div className="section-heading">
                <div className="line-dec" />
                <h1>{detail.ten}</h1>
              </div>
            </div>
            <div className=" row imagesPro">
              <div className="col-md-6 product-slider imgsl">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                  </ul>
                </div>
                <div id="carousel" className="flexslider bdbt">
                  <ul className="slides ">
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                    <li>
                      <img
                        src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col detail-pro">
                  <p>
                    - Kiểu màn hình:{" "}
                    {detail.screenDetail && detail.screenDetail.kieumanhinh}
                  </p>
                  <p>
                    - Kích thước:{" "}
                    {detail.screenDetail && detail.screenDetail.kichthuoc}
                  </p>
                  <p>
                    - Độ phân giải:{" "}
                    {detail.screenDetail && detail.screenDetail.dophangiai}{" "}
                    {detail.screenDetail && detail.screenDetail.dophangiaipixel}
                  </p>
                  <p>
                    - Tấm nền:{" "}
                    {detail.screenDetail && detail.screenDetail.tamnen}
                  </p>

                  <p>
                    - Tần số: {detail.screenDetail && detail.screenDetail.tanso}{" "}
                    Hz
                  </p>
                  <p>
                    - Màu hiển thị:{" "}
                    {detail.screenDetail && detail.screenDetail.mauhienthi}
                  </p>
                  <p>
                    - Công nghệ màn hình:{" "}
                    {detail.screenDetail && detail.screenDetail.bemat}
                  </p>
                </div>
              </div>
              <div className="col-md-6 colors ttdetail">
                <div className="right-content ">
                  <h4>
                    {detail.ten} {detail.id} ({" "}
                    {detail.laptopDescription &&
                      detail.laptopDescription.detailram}{" "}
                    )
                  </h4>
                  <div className="tt">
                    <div className="thuonghieuL">
                      Thương hiệu <a href="#">{detail.thuonghieu}</a>
                      &nbsp;&nbsp; |&nbsp;&nbsp;Năm sản xuất: {detail.namsx}
                    </div>
                  </div>
                  <div className="tt-price">
                    {solver.formatCurrency(
                      "vi-VN",
                      "currency",
                      "VND",
                      detail.gia
                    )}{" "}
                  </div>
                  <div className="tt-sales">Quà tặng kèm khi mua hàng</div>
                  <div className="gift">
                    <div className="">
                      <img src="https://lh3.googleusercontent.com/8TYtx-F0wLPEsufDd-N2y4txkDy3dxxjipjA6k5DjccQhwtdK_6Mx0YPuSUZF3bOEGG5-hP8-MFNReb4X0k=rw"></img>
                      <p>x1 Túi đựng laptop</p>
                    </div>
                  </div>
                  <div className="button-gr">
                    <NavLink to="/card">
                    <button type="button" className="btn btn-primary btn-buy" onClick={() => addCardHandleClick(detail.id,detail.gia)}>
                      MUA NGAY
                    </button>
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-cart" onClick={() => addCardHandleClick(detail.id,detail.gia)}>
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 colors details-rights">
              <div className="ship">
                <img src={freeshipping_4px} />
                <div className="shipfree">Sản phẩm được giao hàng miễn phí</div>
              </div>
              <div className="chinhsachbh">
                <p className="font-cs">Chính sách bán hàng</p>
                <div className="fm">
                  <img src={freeshippingcs_24px} />
                  <div className="detailright-t">
                    Miễn phí giao hàng cho đơn hàng từ 900K
                  </div>
                </div>
                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">
                    Cam kết hàng chính hãng 100%
                  </div>
                </div>
                <div className="fm">
                  <img src={replace_24px} />
                  <div className="detailright-t">
                    Đổi trả trong vòng 14 ngày
                  </div>
                </div>
              </div>
              <div className="chinhsachbh">
                <p className="font-cs">Dịch vụ khác</p>

                <div className="fm">
                  <img src={shield_24px} />
                  <div className="detailright-t">Bảo hành tại nhà.</div>
                </div>
                <div className="fm">
                  <img src={insurance_24px} />
                  <div className="detailright-t">
                    Bảo hành 12 tháng chính hãng {detail.thuonghieu}
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
                {/* <img
                  src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                /> */}
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
                    <th className="row">Bảo hành</th>
                    <td>{detail.baohanh}&nbsp;tháng</td>
                  </tr>
                  <tr>
                    <th className="row">Thông tin chung</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="row">Màu sắc</th>
                    <td>{detail.mau}</td>
                  </tr>
                  <tr>
                    <th className="row">Mã sản phẩm</th>
                    <td>{detail.id}</td>
                  </tr>
                  <tr>
                    <th className="row">Cấu hình chi tiết</th>
                  </tr>
                  <tr>
                    <th className="row">Kiểu màng hình</th>
                    <td>
                      {detail.screenDetail && detail.screenDetail.kieumanhinh}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Kích thước</th>
                    <td>
                      {detail.screenDetail && detail.screenDetail.kichthuoc}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Tỷ lệ</th>
                    <td>{detail.screenDetail && detail.screenDetail.tile}</td>
                  </tr>
                  <tr>
                    <th className="row">Độ phân giải</th>
                    <td>
                      {detail.screenDetail && detail.screenDetail.dophangiai}{" "}
                      {detail.screenDetail &&
                        detail.screenDetail.dophangiaipixel}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Tấm nền</th>
                    <td>{detail.screenDetail && detail.screenDetail.tamnen}</td>
                  </tr>
                  <tr>
                    <th className="row">Tần số</th>
                    <td>{detail.screenDetail && detail.screenDetail.tanso}</td>
                  </tr>
                  <tr>
                    <th className="row">Màu hiển thị</th>
                    <td>
                      {detail.screenDetail && detail.screenDetail.mauhienthi}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Thời gian phản hồi</th>
                    <td>
                      {detail.screenDetail &&
                        detail.screenDetail.thoigianphanhoi}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Độ sáng</th>
                    <td>{detail.screenDetail && detail.screenDetail.dosang}</td>
                  </tr>
                  <tr>
                    <th className="row">Góc nhìn</th>
                    <td>
                      {detail.screenDetail && detail.screenDetail.gocnhin}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Công nghệ màn hình</th>
                    <td>{detail.screenDetail && detail.screenDetail.bemat}</td>
                  </tr>
                  <tr>
                    <th className="row">Công xuất</th>
                    <td>
                      {detail.screenDetail && detail.screenDetail.congxuat}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Thông tin khác</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="row">HDR</th>
                    <td>{detail.screenDetail && detail.screenDetail.hdr}</td>
                  </tr>
                  <tr>
                    <th className="row">Khối lượng</th>
                    <td>
                      {detail.screenDetail && detail.screenDetail.khoiluong}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-spkhac">
            <div className="xemthem">Sản phẩm khác</div>
            <div className="prev-next">
              <span
                className="btn-prev btnnp"
                id="btn-prevs"
                // onClick={changeSlide(-1)}
              >
                <img src={prev_50px} />
              </span>
              <span
                className="btn-next btnnp"
                id="btn-nexts"
                // onClick={changeSlide(1)}
              >
                <img src={next_50px} />
              </span>
            </div>
            <div className="row_10 ">
              <div className="slide-pro" id="pro-s">
                <SanPhamKhac />
              </div>
            </div>
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
              <iframe
                className="bando"
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3918.2315764536306!2d106.5962233!3d10.8699833!3m2!1i1024!2i768!4f13.1!2m1!1zMTUvMSDhuqRwIENow6FuaCAyLCB4w6MgVMOibiBYdcOibiwgSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1636881359200!5m2!1svi!2s"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
