import React from "react";
import details from "../../CSS/ProductsCss/details.css";
import { withRouter } from "react-router";
import { useEffect, useState } from "react";

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
      console.log("acb", this.props);
    }
  }

  render() {
    let { detail } = this.state;
    let isEmptyObj = Object.keys(detail).length === 0;

    // const [pros, setPros] = useState([]);
    // useEffect(() => {

    return (
      <div className="single-product">
        <div className="container">
          <div className="row">
            {isEmptyObj === false && (
              <>
                <div className="col-md-12">
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
                <div className="col-md-6">
                  <div className="right-content">
                    <h4>
                      {detail.ten} {detail.id} {}
                    </h4>
                    <h6>{detail.gia} VNĐ</h6>
                    <p>{detail.moTaLaptop}</p>
                    <span>trong kho</span>
                    <form action method="get">
                      <label htmlFor="quantity">{detail.namsx}:</label>
                    </form>
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
