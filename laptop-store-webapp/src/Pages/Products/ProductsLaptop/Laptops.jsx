import React from "react";
import axios from "axios";
import URL from '../../../DATA/URL'
import "../../../CSS/ProductsCss/bootstrap.css";
import "../../../CSS/ProductsCss/style.css";
import { useEffect, useState } from "react";
import ListProductLaptop from "./ListProductLaptop";
import Solver from "../../../Classes/Solver";
import AsusLogo1 from "../../../Images/AsusLogo1.png"
import DellLogo1 from "../../../Images/DellLogo1.png"
import HPLogo1 from "../../../Images/HPLogo1.png"
import AcerLogo1 from "../../../Images/AcerLogo1.png"
import DareuLogo1 from "../../../Images/DareuLogo1.png"
const solver = new Solver();
export default function Laptops({match,addProductToCart}) {
  const [pros, setPros] = useState([]);
  useEffect(() => {
    if(match !== undefined){
      var API;
      if(match.match.params.attribute === "gia") {
        API = `${URL}/data/product/type=laptop/from=${match.match.params.from}to=${match.match.params.to}`;
      }
      else if(match.match.params.attribute !== "gia") {
        API =  `${URL}/data/laptop/${match.match.params.attribute}=${match.match.params.value}`;
      }
    }
    else API = "https://localhost:44343/data/Product/type=laptop";
    axios
      .get(API, null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://localhost:44343/data/Product/type=laptop", null)
  //     .then((res) => setPros(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="wrapper">
      <div className="container_fullwidth">
        <div className="col-md-12 leftp">
          <div className="banner">
            <div className="bannerslide" id="bannerslide">
              <a href="#">
                <img
                  src="https://lh3.googleusercontent.com/fYdGt5_-5ZV4eLU5y3PavUiyFpIxgqIaS1L_d4paiFiT7a2rS3oOrgoHvbvozhOllxuWz_Xo2xVq8U0yng0-nXqyDwnNBMw1PA=w1920-rw"
                  alt=""
                />
              </a>
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
                    <button type="button" className="btn-sort">
                      Asus
                    </button>
                    <button type="button" className="btn-sort">
                      Dell
                    </button>
                    <button type="button" className="btn-sort">
                      HP
                    </button>
                    <button type="button" className="btn-sort">
                      Acer
                    </button>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">CPU</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort">
                      Corei3
                    </button>
                    <button type="button" className="btn-sort">
                      Corei5
                    </button>
                    <button type="button" className="btn-sort">
                      Corei7
                    </button>
                    <button type="button" className="btn-sort">
                      Corei9
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Ram</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort">
                      4GB
                    </button>
                    <button type="button" className="btn-sort">
                      8GB
                    </button>
                    <button type="button" className="btn-sort">
                      16GB
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">VAG</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort">
                      NVIDIA
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Màn hình</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort">
                      13.3 inch
                    </button>
                    <button type="button" className="btn-sort">
                      14 inch
                    </button>
                    <button type="button" className="btn-sort">
                      15 inch
                    </button>
                    <button type="button" className="btn-sort">
                      15.6 inch
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
                <ListProductLaptop pros={pros}  addProductToCart={addProductToCart} />
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
                          src={AsusLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={DellLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={HPLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={AcerLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={DareuLogo1}
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
