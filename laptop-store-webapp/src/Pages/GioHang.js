import axios from "axios";
import React from "react";
import Solver from "../Classes/Solver";
import bootstrap from "../CSS/ProductsCss/bootstrap.css";
import GioHangCss from "../CSS/GioHangCss.css";
import LogoFT from "../Images/LogoFT.png";
import { NavLink } from "react-router-dom";

import no_shopping_cart from "../Images/no_shopping_cart.png";
import { useEffect, useState } from "react";
export default function GioHang({ idUser, addCardHandleClick}) {
  const solver = new Solver();
  const [tongtien, setTongtien] = useState(0);
  const [cardDetails, setCardDetails] = useState([]);
  const [reload, setReload] = useState(0);
  const reLoad = () =>{
    if(reload === 0) setReload(1);
    else setReload(0);
  }
  useEffect(() => {
    if (idUser !== null) {
      axios
        .get(`https://localhost:44343/data/carddetail/iduser=${idUser}`, null)
        .then((res) => {
          if (res.status === 200) {
            setCardDetails(res.data);
            
          }
        })
        .catch((err) => console.log("Get card failed" + err));
    }
  }, [reload]);
  function checktien (e,gia,quantity) {
    if (e.target.checked) {
      setTongtien(tongtien + gia*quantity);
    } else {
      setTongtien(tongtien - gia*quantity);
    }
  }


function deleteItem(iduser,idpro){
  
  if(window.confirm("Are you sure you want to delete") ===true){
    axios.delete(`https://localhost:44343/data/carddetail/iduser=${iduser}/idproduct=${idpro}`,null)
    .then(()=> {
      reLoad();
    })
    .catch((err)=> console.log("Dell xoa duoc",err))
  }
}

function deleteQuantity(iduser, idpro, thanhtien) {
  axios.get(`https://localhost:44343/data/carddetail/action=delete/iduser=${iduser}/idproduct=${idpro}/tongtien=${thanhtien}`, null)
  .then(()=> {
    console.log("reload")
    reLoad();
    
  })
  .catch((err)=> console.log("Dell xoa duoc",err))
}
    if(cardDetails.length >= 0) return(
      <div className="page">
        <div className="container width">
          <div className="title-cart">
            <strong className="title-text">Giỏ hàng của bạn</strong>
          </div>
          {/* <div className="center-logo">
          <input class="check-item" type="checkbox" value=""  />
          <img src={LogoFT}/>
          </div> */}
          <div className="center-card">
            <div className="carts">
              {cardDetails.map((item, index) => {
                return (
                  <div className="info-cart" key={index}>
                    <div className="info-donhang">
                      <div className="info-chitiet">
                      <div className="info-check">
                        <input class="check-item" type="checkbox"  name="hobby[]"  id="check-item" 
                        onChange={(e)=> {
                          setTimeout(checktien(e,item.idProductNavigation && item.idProductNavigation.gia,item.soluong), 3000)
                        }}  value={item.id}/>
                        </div>
                        <div className="info-image">
                          <div className="img-name">
                            <a>
                              <div className="imag">
                                <img
                                  src={`https://localhost:44343/Images/Products/${item.idProductNavigation && item.idProductNavigation.nameimage}`}
                                alt=""/>
                              </div>
                            </a>
                            <div className="name">
                              <a href="#">{item.idProductNavigation && item.idProductNavigation.ten}</a>
                              <div className="id-item">ID: {item.idProduct}</div>
                            </div>
                          </div>
                        </div>
                        <div className="info-editquantity">
                          <div className="btn-quantity">
                          <button type="button"class="btn-tru" name="btn-giam" onClick={() => deleteQuantity(idUser,item.idProduct,item.idProductNavigation && item.idProductNavigation.gia)}>
                            -
                          </button>
                          <input type="text" class="finput-edit" defaultValue={item.soluong} disabled></input>
                          <button type="button" name="btn-tang" className="btn-cong"
                          onClick={() => addCardHandleClick(item.idProduct,item.tongtien)}>
                             {/* onclick={(e) => checksoluong(e,item.gia)} */}
                            +
                          </button>
                          </div>
                          <div className="delet">
                            <button type="button" className="btn-del" onClick={() => deleteItem(idUser,item.idProduct)}>Xóa</button>
                          </div>
                        </div>
                        <div className="info-price">
                          <strong>
                            {solver.formatCurrency("vi-VN","currency","VND",item.idProductNavigation && item.idProductNavigation.gia)}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="payment">
              <div className="payment-sum">
                <strong>Tổng tiền</strong>
                <p id="settongtien">{solver.formatCurrency("vi-VN","currency","VND",tongtien)}</p>
              </div>
              <div className="pay-info">
                <div className="thanhtoan">
                  <strong>Thanh toán</strong>
                </div>
                <div className="tamtinh-thanhtien ">
                  <p className="txt-left">Giảm giá</p>
                  <p className="tamtinh">{solver.formatCurrency("vi-VN","currency","VND",0)}</p>
                </div>
                <div className="tamtinh-thanhtien">
                  <p className="txt-left">Thành tiền</p>
                  <p className="thanhtien">{solver.formatCurrency("vi-VN","currency","VND",tongtien)}</p>
                </div>
                <button className="btn-pay btn btn-outline-primary"  >
                  Tiếp tục thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    // else return (
    //   <div className="centerp">
    //     <div className="product-none">
    //       <img src={no_shopping_cart} />
    //       <p> Có 0 sản phẩm trong giỏ hàng</p>
    //     </div>
    //     <div className="btn-backhome">
    //       <NavLink className="btn-backhome" to="/">
    //         <button type="button" className="btn btn-home">
    //           Quay về trang chủ
    //         </button>
    //       </NavLink>
    //     </div>
    //   </div>
    // )
  }

