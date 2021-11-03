import React from "react";
import details from "../../CSS/ProductsCss/details.css";

export default function DetailProducts() {
  return (
    <div className="single-product">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec" />
              <h1>Tên laptop</h1>
            </div>
          </div>
          <div className="col-md-6 imagesPro">
            <div className="product-slider">
              <div id="slider" className="flexslider">
                <ul className="slides">
                  <li>
                    <img src="" />
                  </li>
                  <li>
                    <img src="" />
                  </li>
                  <li>
                    <img src="" />
                  </li>
                  <li>
                    <img src="" />
                  </li>
                </ul>
              </div>
              <div id="carousel" className="flexslider">
                <ul className="slides">
                  <li>
                    <img src="" />
                  </li>
                  <li>
                    <img src="" />
                  </li>
                  <li>
                    <img src="" />
                  </li>
                  <li>
                    <img src="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <h4>Tên latop</h4>
              <h6>Gía</h6>
              <p>
                Mô tả
              </p>
              <span>trong kho</span>
              <form action method="get">
                <label htmlFor="quantity">Quantity:</label>
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
        </div>
      </div>
    </div>
  );
}
