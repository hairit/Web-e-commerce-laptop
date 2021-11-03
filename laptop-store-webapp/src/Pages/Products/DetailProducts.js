import React from "react";
import details from "../../CSS/ProductsCss/details.css";
import { withRouter } from "react-router";
import { useEffect, useState } from "react";
import FormatCurrency from "../../Function/FormatCurrency";

import axios from "axios";
class DetailProducts extends React.Component {
  state = {
    detail: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://localhost:44343/data/product/${id}`);
      this.setState({
        detail: res && res.data ? res.data : {},
      });
      console.log("acb", this.props.detail);
    }
  }
  render() {
    let { detail } = this.state;
    let isEmptyObj = Object.keys(detail).length === 0;
    console.log("123", detail);

    // function format_curency(price) {
    //   price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    //   return price;
    // }

    // const [pros, setPros] = useState([]);
    // useEffect(() => {

    return (
      <div className="single-product">
        <div className="container">
          <div className="row">
            {isEmptyObj === false && (
              <>
                <div className="col-md-12 colors tops">
                  <div className="section-heading">
                    <div className="line-dec" />
                    <h1>{detail.ten}</h1>
                  </div>
                </div>
                <div className="col-md-6 imagesPro">
                  <div className="product-slider">
                    <div id="slider" className="flexslider">
                      <ul className="slides">
                        <li>
                          <img
                            src={`https://localhost:44343/Images/Products/${detail.nameimage}`}
                          />
                        </li>
                      </ul>
                    </div>
                    <div id="carousel" className="flexslider">
                      <ul className="slides">
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
                  </div>
                </div>
                <div className="col-md-6 colors">
                  <div className="right-content">
                    <h4>
                      {detail.ten} {detail.id} ({" "}
                      {detail.moTaLaptop.detailmanhinh}{" "}
                      {detail.moTaLaptop.detailram})
                    </h4>
                    <div className="tt">
                      <div className="thuonghieuL">
                        Thương hiệu <a href="#">{detail.thuonghieu}</a>
                      </div>
                      <div className="thuonghieuR">
                        <p>|</p> <p>Năm sản xuất: {detail.namsx}</p>
                      </div>
                    </div>
                    <div className="tt-price">
                      {FormatCurrency("vi-VN", "currency", "VND", detail.gia)}{" "}
                    </div>
                    <div className="tt-sales">Qùa tặng kèm khi mua hàng</div>
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
export default withRouter(DetailProducts);
