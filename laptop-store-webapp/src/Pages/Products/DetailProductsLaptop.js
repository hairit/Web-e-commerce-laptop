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
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://localhost:44343/data/product/type=laptop/${id}`);
      this.setState({
        detail: res && res.data ? res.data : {},
      });
      console.log("acb", this.props.detail);
    }
  }
  render() {
    let { detail } = this.state;
    let isEmptyObj = Object.keys(detail).length === 0;
    const solver = new Solver();
    console.log("123", detail);

    return (
      <div className="single-product">
        <div className="container">
          <div className="row">
            {isEmptyObj === false && (
              <>
                <div className="col-md-15 colors tops">
                  <div className="section-heading">
                    <div className="line-dec" />
                    <h1>{detail.ten}</h1>
                  </div>
                </div>
                <div className=" imagesPro">
                  <div className="col-4 product-slider imgsl">
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
                      <p>- CPU: {detail.moTaLaptop.detailcpu}</p>
                      <p>- Màn hình: {detail.moTaLaptop.detailmanhinh}</p>
                      <p>- RAM: {detail.moTaLaptop.detailram}</p>
                      <p>- VGA: {detail.moTaLaptop.detailvga}</p>
                      <p>- Lưu trữ: {detail.moTaLaptop.ocung}</p>
                      <p>- Hệ điều hành: {detail.moTaLaptop.hdh}</p>
                      <p>- Pin: {detail.moTaLaptop.pin}</p>
                    </div>
                  </div>
                  <div className="col-6 colors ttdetail">
                    <div className="right-content ">
                      <h4>
                        {detail.ten} {detail.id} ({" "}
                        {detail.moTaLaptop.detailmanhinh}{" "}
                        {detail.moTaLaptop.detailram})
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
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(DetailProductsLaptop);
