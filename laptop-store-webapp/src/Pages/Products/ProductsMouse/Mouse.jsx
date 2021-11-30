import React from "react";
import axios from "axios";

import "../../../CSS/ProductsCss/bootstrap.css";
import "../../../CSS/ProductsCss/style.css";
import AsusLogo1 from "../../../Images/AsusLogo1.png";
import DellLogo1 from "../../../Images/DellLogo1.png";
import HPLogo1 from "../../../Images/HPLogo1.png";
import AcerLogo1 from "../../../Images/AcerLogo1.png";
import DareuLogo1 from "../../../Images/DareuLogo1.png";
import { useEffect, useState } from "react";
import ListProductMouse from "./ListProductMouse";
export default function Mouse({ idUser,addProductToCart }) {
  const [pros, setPros] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44343/data/Product/type=mouse", null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(pros);
  function addProductInCart(id, gia) {
    addProductToCart(idUser,id, gia);
  }

  function sortMouse(e){
    var sorts = e.target.value
    axios.get("https://localhost:44343/data/mouse/" + sorts,null)
    .then((res) => setPros(res.data))
    .catch((err) => console.log(err))
}
  return (
    <div className="wrapper">
      <div className="container_fullwidth">
        <div className="col-md-12 leftp">
          <div className="banner">
            <div className="bannerslide" id="bannerslide">
              <ul className="slides">
                <li>
                  <a href="#">
                    <img
                      src="https://lh3.googleusercontent.com/fYdGt5_-5ZV4eLU5y3PavUiyFpIxgqIaS1L_d4paiFiT7a2rS3oOrgoHvbvozhOllxuWz_Xo2xVq8U0yng0-nXqyDwnNBMw1PA=w1920-rw"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="top-pro">
            <div className="col-md-12 sof">
              <div className="col-12 boloc section-heading">
                <div className="line-bl "></div>
                <p>Bộ lọc</p>
              </div>
              <div className="col-12 ">
                <div className="loc">
                  <div className="title-sort">Thương hiệu</div>
                  <div className="btn-right">
                    <button type="button" value="brand=razer"  onClick={(e) => sortMouse(e)} className="btn-sort">
                      RAZER
                    </button>
                    <button type="button" value="brand=logitech"  onClick={(e) => sortMouse(e)} className="btn-sort">
                      Logitech
                    </button>
                    <button type="button" value="brand=corsair"  onClick={(e) => sortMouse(e)} className="btn-sort">
                      CORSAIR
                    </button>
                    <button type="button" value="brand=akko"  onClick={(e) => sortMouse(e)} className="btn-sort">
                      AKKO
                    </button>
                    <button type="button" value="brand=asus"  onClick={(e) => sortMouse(e)} className="btn-sort">
                      ASUS
                    </button>
                    <button type="button" value="brand=steelseries"  onClick={(e) => sortMouse(e)} className="btn-sort">
                      SteelSeries
                    </button>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">Led</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="led=rgb"  onClick={(e) => sortMouse(e)}>
                      RGB
                    </button>
                    <button type="button" className="btn-sort" value="led=xanh"  onClick={(e) => sortMouse(e)}>
                      Xanh
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Kết nối</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="ketnoi=usb"  onClick={(e) => sortMouse(e)}>
                      Chuột có dây
                    </button>
                    <button type="button" className="btn-sort" value="ketnoi=wireless"  onClick={(e) => sortMouse(e)}>
                      Chuột không dây
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 sorfprice">
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 prolst">
              <div className="products-grid lstlaptop">
                <ListProductMouse
                  addProductInCart={addProductInCart}
                  pros={pros}
                />
              </div>
              <div className="toolbar">
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
          <div className="product-tag tags">
            <h3 className="title">
              Products
              <strong>Tags</strong>
            </h3>
            <ul>
              <li>
                <a href="#">Bàn phím cơ</a>
              </li>
              <li>
                <a href="#">Bàn phím</a>
              </li>
              <li>
                <a href="#">Bàn phím cơ Dareu</a>
              </li>
              <li>
                <a href="#">Bàn phím cơ giá rẻ</a>
              </li>
              <li>
                <a href="#">Bàn phím Gaming</a>
              </li>
            </ul>
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
                        <img src={AsusLogo1} alt="" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img src={DellLogo1} alt="" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img src={HPLogo1} alt="" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img src={AcerLogo1} alt="" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img src={DareuLogo1} alt="" />
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
