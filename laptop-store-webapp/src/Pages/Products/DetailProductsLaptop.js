import React from "react";
import details from "../../CSS/ProductsCss/details.css";
import { withRouter } from "react-router";
import freeshipping_4px from "../../Images/freeshipping_4px.png";
import freeshippingcs_24px from "../../Images/freeshippingcs_24px.png";
import shield_24px from "../../Images/shield_24px.png";
import replace_24px from "../../Images/replace_24px.png";
import settings_24px from "../../Images/settings_24px.png";
import monitor_24px from "../../Images/monitor_24px.png";

import axios from "axios";
import Solver from "../../Classes/Solver";
class DetailProductsLaptop extends React.Component {
  state = {
    detail: {},
  };
  async componentDidMount() {
<<<<<<< HEAD
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios
        .get(`https://localhost:44343/data/product/type=laptop/${id}`)
        .then((res) =>
          this.setState({
            detail: res.data ? res.data : {},
          })
        )
        .catch((err) => {
          console.log("1123123", err);
        });
=======
    if (this.props.match && this.props.match.params){
      const res = await axios.get(`https://localhost:44343/data/product/type=laptop/${this.props.match.params.id}`);
      this.setState({
        detail: res && res.data ? res.data : {},
      });
>>>>>>> 82ea05dbc55ff15ee5520c7a2443d3a9776131a5
    }
  }
  render() 
  {
    let { detail } = this.state;
<<<<<<< HEAD
    console.log(this.props.match);
    console.log("đâsdasd", detail);
    let isEmptyObj = Object.keys(detail).length === 0;
    const solver = new Solver();

    return (
=======
    console.log("Hai dep trai");
    console.log(this.state.detail.moTaLaptop.detailcpu);
    //console.log(detail.moTaLaptop.detailcpu);
    // let isEmptyObj = Object.keys(detail).length === 0;
    const solver = new Solver();
    return(
>>>>>>> 82ea05dbc55ff15ee5520c7a2443d3a9776131a5
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
                    {/* <p>- CPU: {detail.moTaLaptop.detailcpu}</p>
                    <p>- Màn hình: {detail.moTaLaptop.detailmanhinh}</p>
                    <p>- RAM: {detail.moTaLaptop.detailram}</p>
                    <p>- VGA: {detail.moTaLaptop.detailvga}</p>
                    <p>- Lưu trữ: {detail.moTaLaptop.ocung}</p>
                    <p>- Hệ điều hành: {detail.moTaLaptop.hdh}</p>
                    <p>- Pin: {detail.moTaLaptop.pin}</p> */}
                  </div>
                </div>
                <div className="col-md-6 colors ttdetail">
                  <div className="right-content ">
                    <h4>
                      {/* {detail.ten} {detail.id} ( {detail.moTaLaptop.detailram} ) */}
                    </h4>
                    <div className="tt">
                      <div className="thuonghieuL">
                        {/* Thương hiệu <a href="#">{detail.thuonghieu}</a>
                        &nbsp;&nbsp; |&nbsp;&nbsp;Năm sản xuất: {detail.namsx} */}
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
                <div className="ship">
                  <img src={freeshipping_4px} />
                  <div className="shipfree">
                    Sản phẩm được giao hàng miễn phí
                  </div>
                </div>
                <div className="chinhsachbh">
                  <p className="font-cs">Chính sách bán hàng</p>
                  <div className="fm">
                    <img src={freeshippingcs_24px} />
                    <div className="detailright-t">
                      Miễn phí giao hàng cho đơn hàng từ 800K
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
                      Đổi trả trong vòng 10 ngày
                    </div>
                  </div>
                </div>
                <div className="chinhsachbh">
                  <p className="font-cs">Dịch vụ khác</p>
                  <div className="fm">
                    <img src={settings_24px} />
                    <div className="detailright-t">
                      Sửa chữa đồng giá 150.000đ.
                    </div>
                  </div>
                  <div className="fm">
                    <img src={monitor_24px} />
                    <div className="detailright-t">
                      Vệ sinh máy tính, laptop.
                    </div>
                  </div>
                  <div className="fm">
                    <img src={shield_24px} />
                    <div className="detailright-t">Bảo hành tại nhà.</div>
                  </div>
                  <a href="#">Xem chi tiết</a>
                </div>
              </div>
            </div>
            <div className="row bt-if colors">
              <div className="col-sm-8 info-detail"></div>

              <div className="col-sm-4 tb-ifdetail">
                <div className=" thongso-kt ">
                  <div className="line-if "></div>
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
                    {/* <tr>
                      <th className="row">Thế hệ CPU</th>
                      <td>{detail.moTaLaptop.detailcpu}</td>
                    </tr>
                    <tr>
                      <th className="row">Chip đồ họa</th>
                      <td>{detail.moTaLaptop.detailvga}</td>
                    </tr> */}
                    {/* <tr>
                      <th className="row">RAM</th>
                      <td>{detail.moTaLaptop.detailram}</td>
                    </tr>
                    <tr>
                      <th className="row">Màn hình</th>
                      <td>{detail.moTaLaptop.detailmanhinh}</td>
                    </tr>
                    <tr>
                      <th className="row">Công xuất hình</th>
                      <td>{detail.moTaLaptop.congxuathinh}</td>
                    </tr>
                    <tr>
                      <th className="row">Lưu trữ</th>
                      <td>{detail.moTaLaptop.ocung}</td>
                    </tr>
                    <tr>
                      <th className="row">Kiểu lọt khe</th>
                      <td>{detail.moTaLaptop.kieukhe}</td>
                    </tr>
                    <tr>
                      <th className="row">Cổng kết nối</th>
                      <td>{detail.moTaLaptop.congketnoi}</td>
                    </tr>
                    <tr>
                      <th className="row">Hệ điều hành</th>
                      <td>{detail.moTaLaptop.hdh}</td>
                    </tr>
                    <tr>
                      <th className="row">Kích thước</th>
                      <td>{detail.moTaLaptop.size}</td>
                    </tr>
                    <tr>
                      <th className="row">Pin</th>
                      <td>{detail.moTaLaptop.pin}</td>
                    </tr>
                    <tr>
                      <th className="row">Thông tin khác</th>
                    </tr>
                    <tr>
                      <th className="row">Kết nối không dây</th>
                      <td>{detail.moTaLaptop.ketnoikhongday}</td>
                    </tr>
                    <tr>
                      <th className="row">Khối lượng</th>
                      <td>{detail.moTaLaptop.khoiluong}</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
            {/* </>
            )} */}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(DetailProductsLaptop);
