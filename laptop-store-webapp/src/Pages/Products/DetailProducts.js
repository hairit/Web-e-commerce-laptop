import React from "react";
import details from "../../CSS/ProductsCss/details.css";
import { withRouter } from "react-router";
import axios from "axios";
class DetailProducts extends React.Component {
  
  state = {
    detail : {}
  }
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://localhost:44343/data/product/${id}`);
      this.setState({
        detail : res && res.data ? res.data : {}
      })
    }
  }
  render() {
    let { detail } = this.state;
    let isEmptyObj = Object.keys(detail).length === 0;
    return (
      <div className="single-product">
        <div className="container">
          <div className="row">
            { isEmptyObj === false &&
            <>
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h1>{ detail.ten }</h1>
              </div>
            </div>
            <div className="col-md-6 imagesPro">
              <div className="product-slider">
                <div id="slider" className="flexslider">
                  <ul className="slides">
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                  </ul>
                </div>
                <div id="carousel" className="flexslider">
                  <ul className="slides">
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                    <li>
                      <img src={ detail.nameimage } />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <h4>{ detail.ten }</h4>
                <h6>{detail.gia} VNĐ</h6>
                <p>{ detail.moTaLaptop }</p>
                <span>trong kho</span>
                <form action method="get">
                  <label htmlFor="quantity">{ detail.namsx }:</label>
                  <input
                    name="quantity"
                    type="quantity"
                    className="quantity-text"
                    id="quantity"
                    onfocus="if(this.value == '1') { this.value = ''; }"
                    onblur="if(this.value == '') { this.value = '1';}"
                    defaultValue={1}
                  />
                  <input
                    type="submit"
                    className="button"
                    defaultValue="Order Now!"
                  />
                </form>
              </div>
            </div>
            </>
  }
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(DetailProducts);
