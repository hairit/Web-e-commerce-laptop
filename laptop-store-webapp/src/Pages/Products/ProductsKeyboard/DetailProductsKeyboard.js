import React, { useEffect, useState } from "react";
import axios from "axios";
import details from "../../../CSS/ProductsCss/details.css";
import Solver from "../../../Classes/Solver";
import freeshipping_4px from "../../../Images/freeshipping_4px.png";
import freeshippingcs_24px from "../../../Images/freeshippingcs_24px.png";
import shield_24px from "../../../Images/shield_24px.png";
import replace_24px from "../../../Images/replace_24px.png";
import settings_24px from "../../../Images/settings_24px.png";
import monitor_24px from "../../../Images/monitor_24px.png";
import SanPhamKhac from "../ProductsKeyboard/SanPhamKhac";
import prev_60px from "../../../Images/prev_60px.png";
import next_60px from "../../../Images/next_60px.png";
import promotion_32px from "../../../Images/promotion_32px.png";
import insurance_24px from "../../../Images/insurance_24px.png";
import whatsapp_32px from "../../../Images/whatsapp_32px.png";
import edit_property_32px from "../../../Images/edit_property_32px.png";
import settings_32px from "../../../Images/settings_32px.png";

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

export default function DetailProductsKeyboard({ match }) {
  const solver = new Solver();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://localhost:44343/data/product/type=keyboard/${match.match.params.id}`
      )
      .then((res) => {
        // console.log(res);
        setDetail(res.data);
      })
      .catch((err) => console.log(err + "Khong goi san pham"));
  }, []);

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
                    - Đèn: {detail.keyboardDetail && detail.keyboardDetail.den}
                  </p>

                  <p>
                    - Mô tả đèn:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.motaden}
                  </p>
                  <p>
                    - Kiểu switch:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.typeswitch}
                  </p>
                  <p>
                    - Switch:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.motaswitch}
                  </p>
                  <p>
                    - Layout:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.layout}
                  </p>
                  <p>
                    - Kết nối:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.ketnoi}
                  </p>

                  <p>
                    - Size:{" "}
                    {detail.keyboardDetail && detail.keyboardDetail.size}
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
                    <button type="button" className="btn btn-primary btn-buy">
                      MUA NGAY
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-cart"
                    >
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 colors details-rights">
              {/* <div className="ship">
                <img src={freeshipping_4px} />
                <div className="shipfree">Sản phẩm được giao hàng miễn phí</div>
              </div> */}
              <div className="chinhsachbh cskb">
                <p className="font-cs">Chính sách bán hàng</p>
                {/* <div className="fm">
                  <img src={freeshippingcs_24px} />
                  <div className="detailright-t">
                    Miễn phí giao hàng cho đơn hàng từ 900K
                  </div>
                </div> */}
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
                    <td>{detail.baohanh}&nbsp;năm</td>
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
                    <th className="row">kết nối</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.ketnoi}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Đèn</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.den}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Loại đèn</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.motaden}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Switch</th>
                    <td>
                      {detail.keyboardDetail &&
                        detail.keyboardDetail.typeswitch}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Nhãn hiệu Switch</th>
                    <td>
                      {detail.keyboardDetail &&
                        detail.keyboardDetail.brandswitch}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Mô tả Switch</th>
                    <td>
                      {detail.keyboardDetail &&
                        detail.keyboardDetail.motaswitch}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Layout</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.layout}
                    </td>
                  </tr>
                  <tr>
                    <th className="row">Kích thước</th>
                    <td>
                      {detail.keyboardDetail && detail.keyboardDetail.size}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel-spkhac">
            <div className="xemthem">Sản phẩm khác</div>
            <div className="row_10">
              <SanPhamKhac />
              <span className="btn-prev btnnp">
                <img src={prev_60px} />
              </span>
              <span className="btn-next btnnp">
                <img src={next_60px} />
              </span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669726937899!2d106.6800696146224!3d10.759917092332737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2s!4v1636380798827!5m2!1svi!2s"
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
