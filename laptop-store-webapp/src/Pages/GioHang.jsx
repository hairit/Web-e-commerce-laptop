import axios from "axios";
import React,{ useRef } from "react";
import Solver from "../Classes/Solver";
import bootstrap from "../CSS/ProductsCss/bootstrap.css";
import GioHangCss from "../CSS/GioHangCss.css";
import LogoFT from "../Images/LogoFT.png";
import { NavLink } from "react-router-dom";
import home from "../Images/home.png"
import { useHistory } from "react-router-dom";
import tk_shopping_img from "../Images/tk_shopping_img.png";
import { useEffect, useState } from "react";
import ThanhToan from "./ThanhToan";
import CartDetail from "./CartDetail";
export default function GioHang({ idUser,addQuantityProduct, deleteCartItem ,deleteProductFromCart , createBill}) {
  const solver = new Solver();
  const history = useHistory();
  const [cartDetails, setCartDetails] = useState([]);
  const [loading , setLoading] = useState(true);
  const [reload, setReload] = useState(0);
  const [checked, setChecked] = useState(true);
  const reLoad = () =>{
    if(reload === 0) setReload(1);
    else setReload(0);
  }
useEffect(() => {
  if (idUser !== null) {
    axios
      .get(`https://localhost:44343/data/cartdetail/iduser=${idUser}`, null)
      .then((res) => {
        if (res.status === 200) {
          setCartDetails(res.data);   
        }
      })
      .catch((err) => setCartDetails([]) );
  }
}, [reload]);
  
  useEffect(() => {
    if(cartDetails.count > 0) setLoading(false);
  }, [cartDetails])
  function thanhtien(prod){
    var tongtienSelect = 0;
    prod.forEach(prod => {
      if(prod.selected === 1){
        // btnPayment()
      tongtienSelect = prod.tongtien + tongtienSelect
      }
    });
    return tongtienSelect;
  }
  function checktien (e,gia,quantity,idpro,iduser,select) {
    if ( e.target.checked ) {
      axios.get(`https://localhost:44343/data/cartdetail/select=selected/iduser=${iduser}/idproduct=${idpro}`, null)
      .then(() => {
        reLoad();
      }).catch((err) => console.error("Không thể checker",err));
    } else {
      axios.get(`https://localhost:44343/data/cartdetail/select=unselected/iduser=${idUser}/idproduct=${idpro}`, null)
      .then(() => {
        reLoad()
      })
      .catch((err) => console.error("Không thể unchecker",err));
    }
  }
  console.log("z",cartDetails)
  function btnThanhToan(){
    var tongprice = thanhtien(cartDetails)
    if(tongprice !== 0 ){
      return ( //onClick={()=>createBill(cartDetails,thanhtien(cartDetails))}
          <NavLink to="/checkout"  onClick={()=>createBill(cartDetails,thanhtien(cartDetails),null)} >
            <button className="btn-pay btn btn-outline-primary"  >
              Tiếp tục thanh toán
            </button>
          </NavLink>
      )
    }
    else{
      return(
            <button className="btn-pay btn btn-outline-primary" disabled  >
              Tiếp tục thanh toán
            </button>
      )
    }
  }
  function handleViewDetails(detail) {
    if(detail.idProductNavigation.idloai === "laptop"){
    history.push(`/laptop/${detail.idProduct}`);
    } else if(detail.idProductNavigation.idloai === "keyboard"){
        history.push(`/keyboard/${detail.idProduct}`);
      }else if(detail.idProductNavigation.idloai === "screen"){
          history.push(`/screen/${detail.idProduct}`);
        }else if(detail.idProductNavigation.idloai === "mouse"){
           history.push(`/mouse/${detail.idProduct}`);
         }else{
            history.push(`/pc/${detail.idProduct}`);
          }
  }
//   if(cartDetails.selected === 1){
//     document.getElementById("check-item").checked = true;
// }
    if(cartDetails.length > 0 ){
    return(
      
      <div className="page">
        <div className="container width">
        
          <div className="home-icon">
            <NavLink to="/" className="img-backhome">
            <img className="icon-home"  src={home}/>
            </NavLink>
            <p> {">"} </p>
            <div className="title-carticon">
              <div className="title-txt">Giỏ hàng</div>
            </div>
          </div>
          <div className="title-cart">
            <strong className="title-text">Giỏ hàng của bạn</strong>
          </div>
          <div className="center-card">
            <div className="carts">
              {cartDetails.map((item, index) => <CartDetail item={item} index={index} checktien={checktien} handleViewDetails={handleViewDetails} checked={checked} idUser={idUser} addQuantityProduct={addQuantityProduct} deleteCartItem={deleteCartItem} deleteProductFromCart={deleteProductFromCart} solver={solver}/>
            )}
            </div>
            <div className="payment">
                <div className="payment-sum">
                  <strong>Tổng tiền</strong>
                  <p id="settongtien">{solver.formatCurrency("vi-VN","currency","VND",thanhtien(cartDetails))}</p>
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
                    <p className="thanhtien">{solver.formatCurrency("vi-VN","currency","VND",thanhtien(cartDetails))}</p>
                  </div>
                  <div className="VAT">( Bao gồm VAT )</div>
                  {btnThanhToan()}

              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    else{ 
      return(
            <div className="centerp">
              <div className="center-car">
              <div className="product-none">
                <img src={tk_shopping_img} />
                <p> Bạn chưa có sản phẩm trong giỏ hàng</p>
              </div>
              <div className="btn-backhome">
                <NavLink className="btn-backhome" to="/">
                  <button type="button" className="btn btn-home">
                    Tiếp tục mua sắm
                  </button>
                </NavLink>
              </div>
              </div>
            </div>
      )
    }
    // setTimeout(noneCartNotification , 1000);
  
  }