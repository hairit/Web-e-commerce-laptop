import React from "react";
import axios from "axios";
import Solver from "../Classes/Solver";
import { NavLink, useHistory } from "react-router-dom";
import GioHang from "../CSS/GioHangCss.css";
import Order from "../CSS/Order.css";
import edit from "../Images/edit.png";
import plus from "../Images/plus.png";
import { useEffect, useState} from "react";
import CheckoutItem from "./CheckoutItem";

export default function ThanhToan({ updateData,createBill,idUser,order}) {
  const history = useHistory();
  const solver = new Solver();
  const [address, setAddress] = useState(false);
  const [editinfo, setEditinfo] = useState(false);
  const [checkout, setCheckout] = useState([]);
  const [userOrder, setUserorder] = useState([]);
  const [reload, setReload] = useState(0);
  const [userinfo, setUserinfo] = useState({
    id: idUser,
    firstname: "",
    lastname: "",
    email: "",
    sdt: "",
    diachi: ""
  })
  const reLoad = () =>{
        if(reload === 0) setReload(1);
        else setReload(0);
      }
  useEffect(() =>{
    console.log("zzz")
      axios.get(`https://localhost:44343/data/user/${idUser}`)
         .then((res) => 
          setUserorder(res.data))
         .catch((err) => console.log("Reload User"+err));
}, [reload])
// console.log("aaa", userOrder)
  useEffect(() => {
    if (idUser !== null) {
      axios.get(`https://localhost:44343/data/cartdetail/iduser=${idUser}/selected`,null)
          .then((res) => {
            if (res.status === 200) {
              setCheckout(res.data);
            }
          })
          .catch((err) => console.log(err));
    }
  }, [reload]);
  console.log(checkout);
  // console.log('kkkkkkkkkkkkk', address)
  function totalPrice(carts) {
    var tongtien = 0;
    carts.forEach(cart => {
      tongtien = tongtien + cart.tongtien;
    });
    return tongtien;
  }
  function handleChane(e){
    const newdata = {...userinfo}
    newdata[e.target.id] = e.target.value
    setUserinfo(newdata)
    // console.log("llllll", newdata)
}
 function saveInfoUser(e){
    e.preventDefault();
    axios.put("https://localhost:44343/data/user/", {
      id: idUser,
      firstname: userinfo.firstname + '' || userOrder.firstname + '',
      lastname: userinfo.lastname + '' || userOrder.lastname + '',
      email: userinfo.email + '' || userOrder.email + '',
      pass: userOrder.pass + '' ,
      sdt: userinfo.sdt || userOrder.sdt,
      diachi: userinfo.diachi + '' || userOrder.diachi + '',
      mode: userOrder.mode + '',
      nameimage: userOrder.nameimage + '',
      bills: [ ],
      cartDetails: [ ]
    }).then(res => {
      createBill(checkout,totalPrice(checkout), res.data.diachi)
      setEditinfo(false)
      updateData()
      reLoad()
      console.log(res.data);
    }).catch(err => {
      console.log("Lỗi", err)
    })
  }
  function savePhoneAddress(e) {
    e.preventDefault();
    axios.put("https://localhost:44343/data/user/", {
      id: idUser,
      firstname: userOrder.firstname + '',
      lastname: userOrder.lastname + '',
      email: userOrder.email + '',
      pass: userOrder.pass + '',
      sdt: userinfo.sdt,
      diachi: userinfo.diachi + '',
      mode: userOrder.mode + '',
      nameimage: userOrder.nameimage + '',
      bills: [ ],
      cartDetails: [ ]
    }).then(res => {
      // updateData()
      reLoad()
      // console.log(res.data);
    }).catch(err => {
      console.log("Lỗi", err)
    })
  }

  function btnEditInfo(){
    setEditinfo(true)
    setAddress(false);
  }
  function btnSaveEditInfo(){
    setEditinfo(false)
  }
  function showEditInfo(){
    if(editinfo === false){
      return Address();
    }else{
      return renderFormEditInfo()
    }
  }
  function editCart() {
    history.goBack();
  }

  function AddressAndPhone(){
    if(userOrder.diachi && userOrder.sdt !== null){
      // setBtndis(true)
      return showAddAdress();
    }else{
      return  renderFormAddAdressAndPhone();
    }
  }
 
 function btnOrder(){
  if(userOrder.diachi && userOrder.sdt !== null){
      return (
          <button type="button"className="btn-pay btn btn-outline-primary" 
          onClick={()=>{
            setTimeout(()=>{
              history.push("/bill");
              updateData()

            }, 1700)
            order()
            }} >Đặt hàng ngay </button>
      )
  }else{
    return (
          <button type="button"className="btn-pay btn btn-outline-primary" onClick={()=>order()}  disabled >
            Đặt hàng ngay
          </button>
      )
  }
 }
  function renderFormEditInfo() {
    return (
      <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
             <form className="form-edit" onSubmit={(e) => saveInfoUser(e)  }  >
              <div className="form-center">
                <div className="title-formEdit">Sửa thông tin người nhận hàng</div>
                <div className="form-editName">
                  <div className="text-title">Họ</div>
                  <div className="form-input">
                    <input type="text" className="form-control btn-formEdit" onChange={(e) => handleChane(e)}  id="firstname" value={userinfo.firstname}  placeholder={userOrder.firstname} />
                  </div>
                </div>
                <div className="form-editName">
                  <div className="text-title">Tên</div>
                  <div className="form-input">
                  <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.lastname} id="lastname" placeholder={userOrder.lastname} type="text"  />
                  </div>
                </div>
                <div className="form-email">
                  <div className="form-phone">
                    <div className="text-title">Số điện thoại</div>
                    <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.sdt} id="sdt" placeholder={userOrder.sdt} type="text"  />
                  </div>
                  <div className="form-editemail">
                    <div className="text-title">Email</div>
                    <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.email} id="email" placeholder={userOrder.email} type="text"   />
                  </div>
                </div>
                <div className="form-diachi">
                  <div className="title-diachi text-title">Địa chỉ</div>
                  <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.diachi} id="diachi" placeholder={userOrder.diachi} type="text"  />
                </div>
              </div>
              <div className="btn-form">
                <button className="btn btn-primary" >Lưu thông tin</button>
                <button className="btn btn-primary" onClick={() => btnSaveEditInfo()} >Thoát</button>
                </div>
            </form>
          </div>
        </div>
        
      </div>
    );
  }

// ===========================================================================================================

  function btnAddAdress() {
    setAddress(true);
    setEditinfo(false)
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
  function renderFormAddAdress() {
    return (
      <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
            <form className="form-edit">
              <div className="form-center">
                <div className="title-formEdit">Thêm thông tin người nhận hàng</div>
                <div className="form-editName">
                  <div className="text-title">Họ</div>
                  <div className="form-input">
                    <input className="form-control btn-formEdit" type="text" placeholder="Nhập họ của bạn"/></div>
                </div>
                <div className="form-editName">
                  <div className="text-title">Tên</div>
                  <div className="form-input">
                    <input className="form-control btn-formEdit" type="text" placeholder="Nhập tên của bạn"/></div>
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
 
// ===========================================================================================================

  function Address(){
    if(userOrder.diachi && userOrder.sdt !== null){
      return (
        <div className="info-receive">
            <div className="info-nameUser">
              <p>{userOrder.lastname} {" "} {userOrder.firstname}</p>
              <div className="logo-edit">
                <button className="btn-editUser" onClick={() => btnEditInfo()}>
                <img src={edit} />
                </button>
              </div>
            </div>
            <div className="phone-adress">{userOrder.sdt}</div>
            <div className="phone-adress">{userOrder.diachi}
            </div>
        </div>
      )
    }else{
      return (
      <div className="addSdtAddress">Vui lòng thêm địa chỉ và số điện thoại</div>
      )
    }
  }

  function renderFormAddAdressAndPhone() {
    return (
      <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
            <form className="form-edit" onSubmit={(e) => savePhoneAddress(e) }>
              <div className="form-center">
                <div className="form-email">
                  <div className="form-phone">
                    <div className="text-title">Số điện thoại</div>
                    <input type="text" className="form-control btn-formEdit" onChange={(e) => handleChane(e)} id="sdt" value={userinfo.sdt} placeholder="Nhập số điện thoại"/>
                  </div>
                </div>
                <div className="form-diachi">
                  <div className="title-diachi text-title">Địa chỉ</div>
                  <input className="form-control btn-formEdit" type="text" onChange={(e) => handleChane(e)} id="diachi" value={userinfo.diachi} placeholder="Nhập địa chỉ của bạn" />
                </div>
              </div>
              <div className="btn-form">
                <button className="btn btn-primary"  onClick={() => btnSaveNewAdress()} >Lưu thông tin</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    );
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
                  {showEditInfo()}
                  {/* {Address()} */}
                 {AddressAndPhone()}
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
              {checkout.map((pro, index) => <CheckoutItem pro={pro} index={index} solver={solver}/>)}
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
              {btnOrder()}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
