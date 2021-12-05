import React from "react";
import axios from "axios";
import URL from "../../../DATA/URL";
import "../../../CSS/ProductsCss/bootstrap.css";
import "../../../CSS/ProductsCss/style.css";
import AsusLogo1 from "../../../Images/AsusLogo1.png"
import DellLogo1 from "../../../Images/DellLogo1.png"
import HPLogo1 from "../../../Images/HPLogo1.png"
import AcerLogo1 from "../../../Images/AcerLogo1.png"
import DareuLogo1 from "../../../Images/DareuLogo1.png"
import { useEffect, useState } from "react";
import ListProductKeyboard from "./ListProductScreen";
export default function Screen({idUser,match,addProductToCart}) {
  const [pros, setPros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(10);
  const [firstprice, setFirstprice] = useState();
  const [lastprice, setLastprice] = useState();
  useEffect(() => {
    var API;
    if(match !== undefined){
      if(match.match.params.attribute !== "kichthuoc" && match.match.params.attribute !== "gia") {
            API = `${URL}/data/screen/${match.match.params.attribute}=${match.match.params.value}`
      }else if(match.match.params.attribute === "kichthuoc"){
            API = `${URL}/data/screen/kichthuoc/from=${match.match.params.from}to=${match.match.params.to}`;
      }else if(match.match.params.attribute === "gia"){
            API = `${URL}/data/product/type=screen/from=${match.match.params.from}to=${match.match.params.to}`;
      }
    }else API = "https://localhost:44343/data/Product/type=screen"; 
    axios
      .get(API, null) //Default value "https://localhost:44343/data/Product/type=screen"
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err));
  }, []);

  function addProductInCart(id,gia){
    addProductToCart(idUser,id,gia)
  }

  function sortLaptop(e){
    var sorts = e.target.value
    axios.get("https://localhost:44343/data/screen/" + sorts,null)
    .then((res) => setPros(res.data))
    .catch((err) => console.log(err))
}
console.log("aa",pros)

const pages = []
  for(let i=1; i<= Math.ceil(pros.length / itemsPage); i++){
    pages.push(i)
  }

  console.log("mkmk", pages.length)
  const lastPage = currentPage * itemsPage
  const firstPage = lastPage - itemsPage
  const page = pros.slice(firstPage, lastPage)

  function handleClick(e) {
    setCurrentPage(Number(e.target.id))
  }

  const renderPageNumber = pages.map(number => {
    return (
      <button key={number} id={number} onClick={(e) => handleClick(e)}  className={currentPage === number ? 'active' : null}>
      {number}
    </button>
    )
  })
  function handleNext(){
    if(currentPage + 1 <= pages.length){
    setCurrentPage(currentPage + 1)
    }
  }
  function handlePrev(){
    if(currentPage - 1 >= 1){
      setCurrentPage(currentPage - 1)
      }
  }
  function handleprice(e){
    const value = e.target.id
    if(value === "firstPrice"){
    setFirstprice(e.target.value)
    }else{
    setLastprice(e.target.value)
    }
  }
  function showProWithPrice(){
    axios.get(`https://localhost:44343/data/product/type=screen/from=${firstprice}to=${lastprice}`)
    .then((res) => setPros(res.data))
    .catch((err) =>console.error(err))
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
                {/* <li>
                    <a href="#">
                      <img
                        src="https://lh3.googleusercontent.com/2B5ELE4a1XSWf4ngIKoKYfcessffjFjP-uqdPuCVs62ZGku-TGAEeKIDuiQun3yK4W0t2BbMJIRJT2VG7J1jfcIPZqIm7sdlLA=rw-w1920"
                        alt=""
                      />
                    </a>
                  </li> */}
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
                    <button type="button" value="brand=lg"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      LG
                    </button>
                    <button type="button" value="brand=dell"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      DELL
                    </button>
                    <button type="button" value="brand=acer"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      ACER
                    </button>
                    <button type="button" value="brand=lcd"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      LCD
                    </button>
                    <button type="button" value="brand=asus"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      ASUS
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Kích thước</div>
                  <div className="btn-right">
                    <button type="button" value="kichthuoc/from=18to=19"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      18.5 inch
                    </button>
                    <button type="button" value="kichthuoc/from=19to=20"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      19.5 inch
                    </button>
                    <button type="button" value="kichthuoc/from=20to=22"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      21.5 inch
                    </button>
                    <button type="button" value="kichthuoc/from=23to=25"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      23.8 inch
                    </button>
                    <button type="button" value="kichthuoc/from=25to=28"  onClick={(e) => sortLaptop(e)} className="btn-sort">
                      27 inch
                    </button>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">Độ phân giải</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="dophangiai=HD" onClick={(e) => sortLaptop(e)}>
                      HD 1366x768
                    </button>
                    <button type="button" className="btn-sort" value="dophangiai=HD+" onClick={(e) => sortLaptop(e)}>
                      HD+ 1600x900
                    </button>
                    <button type="button" className="btn-sort" value="dophangiai=FHD" onClick={(e) => sortLaptop(e)}>
                      FHD 1920x1080
                    </button>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">Tần số</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="tanso=60" onClick={(e) => sortLaptop(e)}>
                    60 Hz
                    </button>
                    <button type="button" className="btn-sort" value="tanso=75" onClick={(e) => sortLaptop(e)}>
                    75 Hz
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 sorfprice">
              <div className="price-filter leftbar">
                <h3 className="title">Giá</h3>
                <div className="pricing">
                  <input  type="text" onChange={(e) => handleprice(e)} id="firstPrice" value={firstprice} placeholder="Giá thấp nhất"/>
                  <span className="separate">-</span>
                  <input  type="text" onChange={(e) => handleprice(e)} id="lastPrice" value={lastprice} placeholder="Giá cao nhất"/>
                  <button type="button" className="" onClick={() => showProWithPrice()}>Tìm</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 prolst">
              <div className="products-grid lstlaptop">
                <ListProductKeyboard addProductInCart={addProductInCart} pros={page} />
              </div>
              <div className="toolbar">
                <div className="pager">
                <button className="btn-previ-next" onClick={() => handlePrev()}>Sau</button>
                  {renderPageNumber}
                 <button className="btn-previ-next" onClick={() => handleNext()}>Trước</button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-tag tags">
            <h3 className="title">
              Products 
              <strong> Tags</strong>
            </h3>
            <ul>
              <li>
                <a href="#">Màn hình</a>
              </li>
              <li>
                <a href="#">Màn hình đẹp</a>
              </li>
              <li>
                <a href="#">Màn hình HD</a>
              </li>
              <li>
                <a href="#">Màn hình LCD</a>
              </li>
              <li>
                <a href="#">Màn hình giá rẻ</a>
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
