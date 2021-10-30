import "../CSS/ProductsCss/bootstrap.css";
import "../CSS/ProductsCss/style.css";

import React from "react";
import LogoFT from "../Images/LogoFT.png";
import heart32px from "../Images/heart32px.png";
import CALLER from "../API/CALL";
import { useState, useEffect } from "react";

export default function Product() {
  return (
    <div className="wrapper">
      <div className="container_fullwidth">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="category leftbar">
                <h3 className="title">Danh mục sản phẩm</h3>
                <ul>
                  <li>
                    <a href="#">Laptop</a>
                  </li>
                  <li>
                    <a href="#">Bàn phím</a>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
              <div className="clearfix"></div>
              <div className="price-filter leftbar">
                <h3 className="title">Giá</h3>
                <form className="pricing">
                  <label>
                    $
                    <input type="number" />
                  </label>
                  <span className="separate">-</span>
                  <label>
                    $
                    <input type="number" />
                  </label>
                  <input type="submit" defaultValue="Go" />
                </form>
              </div>
              <div className="clearfix"></div>
              <div className="clolr-filter leftbar">
                <h3 className="title">Màu</h3>
                <ul>
                  <li>
                    <a href="#" className="red-bg">
                      light red
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" yellow-bg">
                      yellow"
                    </a>
                  </li>
                  <li>
                    <a href="#" className="black-bg ">
                      black
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pink-bg">
                      pink
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dkpink-bg">
                      dkpink
                    </a>
                  </li>
                  <li>
                    <a href="#" className="chocolate-bg">
                      chocolate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="orange-bg">
                      orange-bg
                    </a>
                  </li>
                  <li>
                    <a href="#" className="off-white-bg">
                      off-white
                    </a>
                  </li>
                  <li>
                    <a href="#" className="extra-lightgreen-bg">
                      extra-lightgreen
                    </a>
                  </li>
                  <li>
                    <a href="#" className="lightgreen-bg">
                      lightgreen
                    </a>
                  </li>
                  <li>
                    <a href="#" className="biscuit-bg">
                      biscuit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="chocolatelight-bg">
                      chocolatelight
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
              <div className="product-tag leftbar">
                <h3 className="title">
                  Products
                  <strong>Tags</strong>
                </h3>
                <ul>
                  <li>
                    <a href="#">Laptop Asus</a>
                  </li>
                  <li>
                    <a href="#">Laptop Dell</a>
                  </li>
                  <li>
                    <a href="#">Laptop sinh viên</a>
                  </li>
                  <li>
                    <a href="#">Laptop giá rẻ</a>
                  </li>
                  <li>
                    <a href="#">Laptop Gaming</a>
                  </li>
                  <li>
                    <a href="#">Bàn phím cơ</a>
                  </li>
                  <li>
                    <a href="#">Bàn phím Gaming</a>
                  </li>
                  <li>
                    <a href="#">Bàn phím giá rẻ</a>
                  </li>
                </ul>
              </div>
              <div className="fbl-box leftbar">
                <h3 className="title">Facebook</h3>
                <span className="likebutton">
                  <a href="#">
                    <img src="images/fblike.png" alt="" />
                  </a>
                </span>
                <ul>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
                <div className="fbplug">
                  <a href="#">
                    <span>
                      <img src="images/fbicon.png" alt="" />
                    </span>
                    Nhóm Facebook
                  </a>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="leftbanner">
                <img
                  src="https://lh3.googleusercontent.com/QDjt1QdJxyKFxTXbyN_E5BZurHMIYg_Uvm7MDOg8wHgLuhC-WFBx6m17HeM9Kk7KnxgWQhvUHSkO9gUJ_-tvZrAa7wrClvGu=rw-w308"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="banner">
                <div className="bannerslide" id="bannerslide">
                  <ul className="slides">
                    <li>
                      <a href="#">
                        <img
                          src="https://lh3.googleusercontent.com/WcjeCkfujIimMnbJ_v-EGcAe7m_1ow2ZGpGWF8-ANvLEbXaCjne-0ivgCp1QM5j4Su1B6cZ_9yNJG5whZlhjP93glIkHXsAK=rw-w1920"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="https://lh3.googleusercontent.com/2B5ELE4a1XSWf4ngIKoKYfcessffjFjP-uqdPuCVs62ZGku-TGAEeKIDuiQun3yK4W0t2BbMJIRJT2VG7J1jfcIPZqIm7sdlLA=rw-w1920"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="products-grid">
                <div className="toolbar">
                  <div className="sorter">
                    <div className="view-mode">
                      <a href="productlitst.html" className="list">
                        List
                      </a>
                      <a href="#" className="grid active">
                        Grid
                      </a>
                    </div>
                    <div className="sort-by">
                      Xếp theo :
                      <select name>
                        <option value="Default" selected>
                          Default
                        </option>
                        <option value="Name">Tên</option>
                        <option value="Price">Giá</option>
                      </select>
                    </div>
                  </div>
                  <div className="pager">
                    <a href="#" className="prev-page">
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <a href="#" className="active">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#" className="next-page">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/AiLttFPYF0ooqs6_pY6zaWwSdfSllmjR9UlrUIp-41zl2wEMSB8WXfoK0FN4RGy57gBEe6oh4ogpADzyYp0=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">21.000.000 VND</h4>
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
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/Fuq0U3tS6kLgZ1B0aMlLuHkxsXvaztB3kl8WFzmFQ2n1wbxiGDOtm9IfTlF1k2QnnLOJdf7E-a_515Lf2rxM4fxfAI6OOnsW=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">30.000.000 VND</h4>
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
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="offer">New</div>
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/4O3CPBcAN0LLm8nSBbAhQ_LClS-GOYAThCGYUyGDdqgT_q6HxGaZ5tDqLieT-ifFJrmdqk1QbauNz1p_MQo6r_uggbhjIfvt=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">21.999.000 VND</h4>
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
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/1CrD2jv6oqwP6Xu_CtTtctUBKJ6b6Ddu-G7ck4cpWCRVGMtNmgjYBhcxxQ2rIh_0U25HHp9wUomPBzA3tChaoevPN_aqx6Q=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">19.932.000 VND</h4>
                      <div className="button_group">
                        <button className="button add-cart" type="button">
                          Thêm vào giỏ hàng
                        </button>
                        <button className="button wishlist" type="button">
                          <i className="fa ">
                            <img src={heart32px} />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/FFPRQARbCSGlUUvpaUtAYMBV6lhmhDvc0u7TgjzsZjh07WvxmuROxvzv6qrOIH4JTN78DXdShUDT4CbBYK-Syu8UYAm9XQ=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">20.998.999 VND</h4>
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
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="offer">New</div>
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/D-3_41MUr4Yc3q-1Fx7I-gCZgWm7QEpM9VZ7ponzr5RpnNOaZv8Z_DLTz96rYEq8mZN0QNu2WCt8MfQxlqRI=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">21.900.000 VND</h4>
                      <div className="button_group">
                        <button className="button add-cart" type="button">
                          Thêm vào giỏ hàng
                        </button>
                        <button className="button wishlist" type="button">
                          <i className="fa ">
                            <img src={heart32px} />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/c8lEMABOL3Q8i2NxuiK306ID3gnSts2d7h67L-vOfU92Mv0neVYVDGh36vFfQNM3rMG8AM48hwVCjIGqi-NwO1p8nHJ6vb9w=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">41.000.000 VND</h4>
                      <div className="button_group">
                        <button className="button add-cart" type="button">
                          Thêm vào giỏ hàng
                        </button>
                        <button className="button wishlist" type="button">
                          <i className="fa ">
                            <img src={heart32px} />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/b72rrYTgmWi_Id06akJK_j_dWXFEzCmeAOfVjKjI3NAM3ggIHPNNaxWGhuIKDVFT7F-es6j3s7C9wpD5Iq7vHRv4nWTUfGM=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">33.980.000 VND</h4>
                      <div className="button_group">
                        <button className="button add-cart" type="button">
                          Thêm vào giỏ hàng
                        </button>
                        <button className="button wishlist" type="button">
                          <i className="fa ">
                            <img src={heart32px} />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="products">
                      <div className="offer">New</div>
                      <div className="thumbnail">
                        <a href="details.html">
                          <img
                            src="https://lh3.googleusercontent.com/Rr0gXL3FLcp3wvSOEFpjAoHnkbOa8B9VwrcsDldAhyfOQ56z4JQ-YKTDHAg4cM9lk6gnXE6JQvq--zMOJom4VUWbkD9OA7LK=w500-rw"
                            alt="Product Name"
                          />
                        </a>
                      </div>
                      <div className="productname">Laptop</div>
                      <h4 className="price">35.000.000 VND</h4>
                      <div className="button_group">
                        <button className="button add-cart" type="button">
                          Thêm vào giỏ hàng
                        </button>
                        <button className="button wishlist" type="button">
                          <i className="fa ">
                            <img src={heart32px} />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="toolbar">
                  <div className="sorter bottom">
                    <div className="view-mode">
                      <a href="productlitst.html" className="list">
                        List
                      </a>
                      <a href="#" className="grid active">
                        Grid
                      </a>
                    </div>
                    <div className="sort-by">
                      Xếp theo :
                      <select name>
                        <option value="Default" selected>
                          Default
                        </option>
                        <option value="Name">Tên</option>
                        <option value>Giá</option>
                      </select>
                    </div>
                  </div>
                  <div className="pager">
                    <a href="#" className="prev-page">
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <a href="#" className="active">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#" className="next-page">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="our-brand">
            <h3 className="title">
              <strong>Nhãn hiệu tài trợ</strong>
            </h3>
            <ul id="braldLogo">
              <li>
                <ul className="brand_item">
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0d-f1ETeDyPF5-87Z_LofW3mpIqc09BbUg&usqp=CAU"
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src="http://laptoptranganh.com/uploaded_files/danhmuc/53386540_Dell_Logo.png"
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="footer">
        <div className="footer-info">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-logo">
                  <a href="#">
                    <img src={LogoFT} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 p">
                <h4 className="title">
                  Thông tin
                  <strong> liên hệ</strong>
                </h4>
                <p>273, An Dương Vương, phường 3, quận 5, TP Hồ Chí Minh</p>
                <p>Call Us : 0988 777 666</p>
                <p>Email : info@gmail.com</p>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4 className="title">
                  Chăm sóc
                  <strong> Khách hàng</strong>
                </h4>
                <ul className="support">
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="#">Phương thức thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Thông tin</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 p">
                <h4 className="title">
                  Đánh giá
                  <strong> về chúng tôi</strong>
                </h4>
                <p>*****</p>
                <form className="newsletter">
                  <input type="text" name placeholder="Type your email...." />
                  <input
                    type="submit"
                    defaultValue="SignUp"
                    className="button"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-info">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p">
                <p>
                  Copyright © 2012. Designed by
                  <a href="#"> Team SGU</a>. All rights reseved
                </p>
              </div>
              <div className="col-md-6">
                <ul className="social-icon">
                  <li>
                    <a href="#" className="linkedin"></a>
                  </li>
                  <li>
                    <a href="#" className="google-plus"></a>
                  </li>
                  <li>
                    <a href="#" className="twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="facebook"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
