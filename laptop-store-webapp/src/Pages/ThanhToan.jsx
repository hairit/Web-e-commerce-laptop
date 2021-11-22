import React from "react";
import axios from "axios";
import Solver from "../Classes/Solver";
import { useHistory } from "react-router-dom";

import GioHang from "../CSS/GioHangCss.css";
import Order from "../CSS/Order.css";
import edit from "../Images/edit.png";
import plus from "../Images/plus.png";
import { useEffect, useState } from "react";

export default function ThanhToan({idUser,order,updateData}) {
  const history = useHistory();
  const solver = new Solver();
  const [address, setAddress] = useState(false);
  const [checkout, setCheckout] = useState([]);
  const [userOrder, setUserorder] = useState([]);
  const [bill, setBill] = useState({id : '',iduser : '',tongtien : 0,ngaydat : '',diachinhan :'',billDetails : []})
  useEffect(() => {
      axios.get(`https://localhost:44343/data/user/${idUser}`)
         .then((res) => setUserorder(res.data))
         .catch((err) => console.log("Reload User"+err));
}, [])
  useEffect(() => {
    if (idUser !== null) {
      axios
        .get(
          `https://localhost:44343/data/cartdetail/iduser=${idUser}/selected`,
          null
        )
        .then((res) => {
          if (res.status === 200) {
            setCheckout(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);
  function totalPrice(carts) {
    var tongtien = 0;
    carts.forEach(cart => {
      tongtien = tongtien + cart.tongtien;
    });
    return tongtien;
  }
  function btnAddAdress() {
    setAddress(true);
  }
  function btnSaveNewAdress() {
    setAddress(false);
  }
  function showAddAdress() {
    if (address === false) {
      return FormAddAdress();
    } else {
      return renderFormAddAdress();
    }
  }
  function renderFormAddAdress() {
    return (
      <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
            <form className="form-edit">
              <div className="form-center">
                <div className="title-formEdit">Thông tin người nhận hàng</div>
                <div className="form-editName">
                  <div className="text-title">Họ tên</div>
                  <div className="form-input"><input className="form-control btn-formEdit" type="text" placeholder="Nhập họ tên của bạn"/></div>
                </div>
                <div className="form-email">
                  <div className="form-phone">
                    <div className="text-title">Số điện thoại</div>
                    <input className="form-control btn-formEdit" placeholder="Nhập số điện thoại"/>
                  </div>
                  <div className="form-editemail">
                    <div className="text-title">Email</div>
                    <input className="form-control btn-formEdit" placeholder="Nhập email của bạn" />

                  </div>
                </div>
                <div className="form-diachi">
                  <div className="title-diachi text-title">Địa chỉ</div>
                  <input className="form-control btn-formEdit" placeholder="Nhập địa chỉ của bạn" />
                </div>
              </div>
              <div className="btn-form">
                <button className="btn btn-primary" onClick={() => btnSaveNewAdress()} >Lưu thông tin</button>
                <button className="btn btn-primary" onClick={() => btnSaveNewAdress()} >Thoát</button>
                </div>
            </form>
          </div>
        </div>
        
      </div>
    );
  }
  function FormAddAdress() {
    return (
      <div className="info-addAdress" onClick={() => btnAddAdress()}>
        <div className="info-add">
          <img src={plus} />
          <div className="info-txtadd">Thêm địa chỉ</div>
        </div>
      </div>
    );
  }

  function editCart() {
    history.goBack();
  }
 function Address(){
   if(userOrder.diachi && userOrder.sdt !== null){
     return  (
        <div className="info-receive">
          <div className="info-nameUser">
            <p>{userOrder.lastname} {" "} {userOrder.firstname}</p>
            <div className="logo-edit">
              <img src={edit} />
            </div>
          </div>
            <div className="phone-adress">{userOrder.sdt}</div>
            <div className="phone-adress">{userOrder.diachi}
          </div>
        </div>
     )
   }
   else{
     <div></div>
   }
 }
  return (
    <div className="wrapper order">
      <div className="container-order">
        <div className="center-order">
          <div className="info-orderUser">
            <div className="info-orderRight">
              <div className="info-ordertitle">
                <p>Nhận hàng tại nhà</p>
              </div>
              <div className="info-orderDataUser">
                <div className="info-user">
                  <div className="info-nhanhang">Thông tin nhận hàng</div>
                  
                  {Address()}
                  {showAddAdress()}
                </div>
              </div>
              <div className="info-delivery">
                <div className="info-PTgiaohang">
                  <div className="info-giaohang"> Phương thức giao hàng</div>
                  <div className="form-check">
                    <input
                      className="form-check-input check-giaohang"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <p className="">Giao hàng tiêu chuẩn</p>
                  </div>
                </div>
                <div className="info-note">
                  <div className="note-tile">Ghi chú cho đơn hàng</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập thông tin ghi chú cho đơn hàng"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="info-PTthanhtoan">
                  <div className="info-hinhthucTT">
                    Chọn hình thức thanh toán
                  </div>
                  <div className="form-checkTT">
                    <input
                      className="check-TT"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked
                    />
                    <p className="TT-defaul" for="defaultCheck1">
                      Thanh toán khi nhận hàng
                    </p>
                  </div>
                  <div className="form-checkTT">
                    <input
                      className="check-TT"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                      disabled
                    />
                    <p className="TT-card" for="defaultCheck2">
                      Thanh toán qua thẻ ngân hàng
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-orderNote"></div>
          </div>

          <div className="info-orderPro">
            <div className="info-pro">
              <div className="info-tile">
                <p>Thông tin đơn hàng</p>
                <div className="info-editcart" onClick={() => editCart()}>
                  Chỉnh sửa
                </div>
              </div>
              {checkout.map((pro, index) => {
              
                return (
                  <div className="info-detailPro" key={index}>
                    <div className="img-pros">
                      <img
                        src={`https://localhost:44343/Images/Products/${pro.idProductNavigation.nameimage}`}
                      />
                    </div>
                    <div className="detail-pros">
                      <div className="detail-name">
                        {pro.idProductNavigation.ten}
                      </div>
                      <div className="detail-quantity">
                        Số lượng: {pro.soluong}
                      </div>
                      <div className="detail-price" >
                        Giá:{" "}
                        {solver.formatCurrency(
                          "vi-VN",
                          "currency",
                          "VND",
                          pro.idProductNavigation.gia
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              
            </div>
            <div className="pay-order">
            <div className="pay-info pay-orders">
              <div className="thanhtoan">
                <strong>Thanh toán</strong>
              </div>
              <div className="tamtinh-thanhtien ">
                <p className="txt-ship">Phí vận chuyển</p>
                <p className=" ships">{solver.formatCurrency("vi-VN","currency","VND",0)}</p>

              </div>
              <div className="tamtinh-thanhtien">
                <p className="txt-left">Thành tiền</p>
                <p className="thanhtien">{solver.formatCurrency("vi-VN","currency","VND",totalPrice(checkout))}</p>
              </div>
              <div className="VAT">( Bao gồm VAT )</div>
              <button className="btn-pay btn btn-outline-primary" onClick={()=>order()}>
                Đặt hàng ngay
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
