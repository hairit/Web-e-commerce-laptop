import React, { Component } from "react";
import heart32px from "../../Images/heart32px.png";
import new60px from "../../Images/new60px.png";
import { useState } from "react";
import CALLER from "../../API/CALL";

class ListProducts extends Component {
  

  showNew = (news) => {
    if (news === true) {
      return (
        <span className="news">
          <img src={new60px} />
        </span>
      );
    }
  };
  render() {
  //   const [products, setProducts] = useState([])
  //   useEffect(() => {
  //     CALLER('GET','lappee/product',null).then(res => setProducts(res.data)).catch(err => alert("Errol!! IMG loading failed"));
  // }, [])
    return (
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="products">
            <div className="thumbnail">
              {this.showNew(this.props.new)}
              <a href="details.html">
                <img src={this.props.image} alt="Product Name" />
              </a>
            </div>
            <div className="productname">{this.props.name}</div>
            <h4 className="price">{this.props.price}</h4>
            <div className="button_group">
              <button className="button add-cart" type="button">
                Thêm vào giỏ hàng
              </button>
              <button className="button wishlist" type="button">
                <i className="fa">
                  <img src={heart32px} />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProducts;
