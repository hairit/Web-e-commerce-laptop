import React from "react";
import axios from "axios";
import URL from '../../../DATA/URL'
import "../../../CSS/ProductsCss/bootstrap.css";
import "../../../CSS/ProductsCss/style.css";
import { useEffect, useState } from "react";
import Solver from "../../../Classes/Solver";
import AsusLogo1 from "../../../Images/AsusLogo1.png"
import DellLogo1 from "../../../Images/DellLogo1.png"
import HPLogo1 from "../../../Images/HPLogo1.png"
import AcerLogo1 from "../../../Images/AcerLogo1.png"
import DareuLogo1 from "../../../Images/DareuLogo1.png"
import Swal from "sweetalert2";

import { NavLink, useHistory } from "react-router-dom";
import ListProducts from "./ListProducts";
const solver = new Solver();
export default function Products({match}) {
  const history = useHistory();
  const [load, setLoad] = useState(0);
  const [firstprice, setFirstprice] = useState();
  const [lastprice, setLastprice] = useState();
  // const [page, setPage] = useState(false);
  const [pros, setPros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(10);

  
  // const [sort, setSort] = useState();
  // const currentPro = pros.slice(firstPage, lastPage)
  
  // useEffect(() => {
  //   if(match !== undefined){
  //     var API;
  //     if(match.match.params.attribute === "gia") {
  //       API = `${URL}/data/product/type=laptop/from=${match.match.params.from}to=${match.match.params.to}`;
  //     }
  //     else if(match.match.params.attribute !== "gia") {
  //       API =  `${URL}/data/laptop/${match.match.params.attribute}=${match.match.params.value}`;
  //     }
  //   }
  //   else API = "https://localhost:44343/data/Product/type=laptop";
   
  //   axios
  //     .get(API, null)
  //     .then((res) => setPros(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  // function addProductInCart(id,gia){
  //   addProductToCart(idUser,id,gia);
  // }
  useEffect(() => {
    axios.get(`https://localhost:44343/data/product/name=${match.match.params.namepro}`,null)
    .then((res) => setPros(res.data))
      .catch((err) => console.log(err))
      }, []);
      console.log("ttt", pros)

  function reload() {
    if(load === 0 ){
      setLoad(1)
    }else{
      setLoad(0)
    }
  }
  console.log("pp",match.match.params.namepro)
  function sortLaptop(e){
      var sorts = e.target.value
      axios.get("https://localhost:44343/data/laptop/" + sorts,null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err))
  }

  const pages = []
  for(let i=1; i<= Math.ceil(pros.length / itemsPage); i++){
    pages.push(i)
  }

  // console.log("mkmk", pages.length)
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
    axios.get(`https://localhost:44343/data/product/type=laptop/from=${firstprice}to=${lastprice}`)
    .then((res) => {
      console.log(res.title);
      if(res.status === 200) {
        setPros(res.data)
      }else{
        Swal.fire('Không có sản phẩm nào !')
      }
    })
    .catch((err) =>console.error(err))
  }
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
                    <button type="button"  className="btn-sort" value="brand=asus"  onClick={(e) => sortLaptop(e)}>
                      Asus
                    </button>
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
                <ListProducts  pros={page}  />
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
