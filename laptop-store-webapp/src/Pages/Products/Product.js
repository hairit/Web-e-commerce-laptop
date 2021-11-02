import React from "react";
import axios from "axios";

import "../../CSS/ProductsCss/bootstrap.css";
import "../../CSS/ProductsCss/style.css";
import { useEffect, useState } from "react";
import ListProduct from "./ListProduct";
import fblike from "../../Images/fblike.png";
export default function Product() {
  const [pros, setPros] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44343/data/product", null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(pros);
  return (
    <div className="wrapper">
      <div className="container_fullwidth">
        <div className="container">
          <div className="col-md-12">
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
          </div>
          <div className="col-md-12 sof">
            <div className="col-12 boloc">Bộ lọc</div>
            <div className="col-12 ">
              <div className="loc">
                <div className="title-sort">Thương hiệu</div>
                <div className="btn-right">
                  <button type="button" className="btn-sort">Asus</button>
                  <button type="button" className="btn-sort">Dell</button>
                  <button type="button" className="btn-sort">HP</button>
                  <button type="button" className="btn-sort">Acer</button>
                </div>
                
                </div>

                <div className="loc">
                <div className="title-sort">Tên</div>
                <div className="btn-right">
                  <button type="button" className="btn-sort">Asus</button>
                </div>
                </div>

                <div className="loc">
                <div className="title-sort">Tên</div>
                <div className="btn-right">
                  <button type="button" className="btn-sort">Asus</button>
                </div>
                </div>

                <div className="loc">
                <div className="title-sort">Tên</div>
                <div className="btn-right">
                  <button type="button" className="btn-sort">Asus</button>
                </div>
                </div>
            </div>
          </div>
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
              <div className="leftbanner">
                <img
                  src="https://lh3.googleusercontent.com/QDjt1QdJxyKFxTXbyN_E5BZurHMIYg_Uvm7MDOg8wHgLuhC-WFBx6m17HeM9Kk7KnxgWQhvUHSkO9gUJ_-tvZrAa7wrClvGu=rw-w308"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="products-grid">
                <ListProduct pros={pros} />
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
              </div>
            </div>
          </div>
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
    </div>
  );
}
