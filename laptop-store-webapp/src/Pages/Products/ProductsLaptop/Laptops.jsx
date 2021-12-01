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
import { NavLink, useHistory } from "react-router-dom";
const solver = new Solver();
export default function Laptops({idUser,match,addProductToCart}) {
  const history = useHistory();
  const [pros, setPros] = useState([]);
  const [prosPage, setProsPage] = useState([]);
  const [load, setLoad] = useState(0);
  // const [page, setPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(10);
  // const [sort, setSort] = useState();
  const lastPage = currentPage * page
  const firstPage = lastPage - page
  const currentPro = pros.slice(firstPage, lastPage)
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
  function addProductInCart(id,gia){
    addProductToCart(idUser,id,gia);
  }
  
  function reload() {
    if(load === 0 ){
      setLoad(1)
    }else{
      setLoad(0)
    }
  }
  
  function sortLaptop(e){
      var sorts = e.target.value
      axios.get("https://localhost:44343/data/laptop/" + sorts,null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err))
  }
  function Nextpage(){    
    // setPros(pros.slice(soluong + 1 , soluong * 2))
  }
  // function Nextpage(){    
  //   setPros(pros.slice(11, 20))
  // }
  function Previouspage(){
    reload()
    // setPros(pros.slice(0,soluong))
    // setPros(pros.slice(0, 10))
  }
  console.log("abc", pros)
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
                    {/* <NavLink to={sort}> */}
                    <button type="button" className="btn-sort" value="brand=asus"  onClick={(e) => sortLaptop(e)}>
                      Asus
                    </button>
                    {/* </NavLink> */}
                    <button type="button" className="btn-sort" value="brand=dell" onClick={(e) => sortLaptop(e)} >
                      Dell
                    </button>
                    <button type="button" className="btn-sort" value="brand=hp" onClick={(e) => sortLaptop(e)}>
                      HP
                    </button>
                    <button type="button" className="btn-sort" value="brand=acer" onClick={(e) => sortLaptop(e)}>
                      Acer
                    </button>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">CPU</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="cpu=i3" onClick={(e) => sortLaptop(e)}>
                      Corei3
                    </button>
                    <button type="button" className="btn-sort" value="cpu=i5" onClick={(e) => sortLaptop(e)}>
                      Corei5
                    </button>
                    <button type="button" className="btn-sort" value="cpu=i7" onClick={(e) => sortLaptop(e)}>
                      Corei7
                    </button>
                    <button type="button" className="btn-sort" value="cpu=i9" onClick={(e) => sortLaptop(e)}>
                      Corei9
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Ram</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="ram=4" onClick={(e) => sortLaptop(e)}>
                      4GB
                    </button>
                    <button type="button" className="btn-sort" value="ram=8" onClick={(e) => sortLaptop(e)}>
                      8GB
                    </button>
                    <button type="button" className="btn-sort" value="ram=16" onClick={(e) => sortLaptop(e)}>
                      16GB
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">VAG</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="vga=nvidia" onClick={(e) => sortLaptop(e)}>
                      NVIDIA
                    </button>
                    <button type="button" className="btn-sort" value="vga=amd" onClick={(e) => sortLaptop(e)}>
                      AMD
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Màn hình</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="manhinh=13.3" onClick={(e) => sortLaptop(e)}>
                      13.3 inch
                    </button>
                    <button type="button" className="btn-sort" value="manhinh=14" onClick={(e) => sortLaptop(e)}>
                      14 inch
                    </button>
                    <button type="button" className="btn-sort" value="manhinh=15" onClick={(e) => sortLaptop(e)}>
                      15 inch
                    </button>
                    <button type="button" className="btn-sort" value="manhinh=15.6" onClick={(e) => sortLaptop(e)}>
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
                <ListProductLaptop pros={currentPro}  addProductInCart={addProductInCart} />
              </div>
              <div className="toolbar">
                <div className="pager">
                  <a href="#" className="prev-page">
                    <i className="fa fa-angle-left"></i>
                  </a>
                  
                  <button onClick={() => Previouspage()}  className="active">
                    1
                  </button>
                  <button onClick={() => Nextpage()}>2</button>
                 
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
