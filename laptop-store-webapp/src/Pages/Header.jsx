import React, { useEffect, useState } from "react";
import "../CSS/Header.css";
import URL from "../DATA/URL";
import { MdLocationOn } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import {
  AiFillPhone,
  AiOutlineShoppingCart,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { RiComputerFill, RiBillLine } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi"
import { IoIosNotificationsOutline } from "react-icons/io";
import ship from '../Images/ship.png'
import daxem from '../Images/daxem.png'
import chinhhang from '../Images/chinhhang.png'
import tuvan from '../Images/tuvan.png'
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
const nullUser = () => {
  return (
    <div>
      <HiOutlineUserCircle className="header-center-right-menu-item-icon" />
      <p className="login-text" >Đăng nhập</p>
    </div>
  );
};
export default function Header({ user, adminMode, logout, clickblur, updateData }) {
  const [statusHeader, setStatusHeader] = useState(false);
  const history = useHistory();
  const [usermenu, setusermenu] = useState(false);
  const [usertemp, setusertemp] = useState(null);
  const [passn, setpassn] = useState("");
  const [conf, setconf] = useState("");
  const [info, setinfo] = useState(null)
  useEffect(() => {
    window.addEventListener('scroll', changeStatusHeader);
  }, [])
  const changeStatusHeader = () => {
    if (window.scrollY >= 42) setStatusHeader(true);
    else setStatusHeader(false);
  }
  const hide = {
    display:"none"
  } 

  const show = {
    display:"block"
  }

  const clickAdmin = () => {
    console.log("Click");
  }

  const usermenuclick = () => {
    clickblur(usermenu);
    return (
      <div className={usermenu === true ? "user-menu" : "user-menu-hide"} >
        <img src={URL + `/Images/UserAvatar/${user.nameimage}`}
          alt="avatar" className="user-menu-avatar" />
        <p className="user-menu-login-text">  {user.firstname + " " + user.lastname} </p>
        {bottomUserMenu()}
      </div>
    )
  }
  const bottomUserMenu = () => {
    if (info === "changepass") return (showchangepass(info))
    else if (info === "changeinfo") return (showchangeinfo(info))
    else return showinfo(info,clickAdmin);
  }
  const showinfo = (info, clickAdmin) => {
    return (
      <div className={info === null ? "user-menu-page" : "user-menu-page-hide"}>
        <div className="user-menu-info">
          <p className="user-menu-label"> Thông tin tài khoản</p>
          <div className="user-info-item">
            <p className="user-info-label">Họ:</p>
            <input className="user-menu-input" defaultValue={user.firstname} type="text" readOnly></input>
          </div>
          <div className="user-info-item">
            <p className="user-info-label">Tên:</p>
            <input className="user-menu-input" defaultValue={user.lastname} type="text" readOnly></input>
          </div>
          <div className="user-info-item">
            <p className="user-info-label">SĐT:</p>
            <input className="user-menu-input" defaultValue={user.sdt} type="text" readOnly></input>
          </div>
          <div className="user-info-item">
            <p className="user-info-label">Địa chỉ:</p>
            <input className="user-menu-input" defaultValue={user.diachi} type="text" readOnly></input>
          </div>
        </div>
        <button className="user-menu-button" onClick={() => setinfo("changeinfo")}>Sửa thông tin</button>
        <button className="user-menu-button" onClick={() => setinfo("changepass")}>Đổi mật khẩu</button>
        <button className="user-menu-button" onclick={() => clickAdmin} style={user.mode!=="CUSTOMER"?show:hide}> Trang quản trị</button>
        <button className="user-menu-button" onClick={() => logoutHandle()}>Đăng xuất</button>
      </div>
    )
  }
  const showchangeinfo = (info) => {
    return (
      <div className={info === "changeinfo" ? "user-menu-info" : "user-menu-hide"}>
        <p className="user-menu-label"> Thay đổi thông tin</p>
        <div className="user-info-item">
          <p className="user-info-label">Họ:</p>
          <input className="user-menu-input" defaultValue={user.firstname} type="text" onChange={(e) => setusertemp({ ...usertemp, firstname: e.target.value })}></input>
        </div>
        <div className="user-info-item">
          <p className="user-info-label">Tên:</p>
          <input className="user-menu-input" defaultValue={user.lastname} type="text" onChange={(e) => setusertemp({ ...usertemp, lastname: e.target.value })}></input>
        </div>
        <div className="user-info-item">
          <p className="user-info-label">SĐT:</p>
          <input className="user-menu-input" defaultValue={user.sdt} type="text" onChange={(e) => setusertemp({ ...usertemp, sdt: e.target.value })}></input>
        </div>
        <div className="user-info-item">
          <p className="user-info-label">Địa chỉ:</p>
          <input className="user-menu-input" defaultValue={user.diachi} type="text" onChange={(e) => setusertemp({ ...usertemp, diachi: e.target.value })}></input>
        </div>
        <button className="user-menu-button" onClick={() => changinfo()}>Xác nhận đổi</button>
        <button className="user-menu-button" onClick={() => setinfo(null)}>Hủy</button>
      </div>
    )
  }
  const showchangepass = (info) => {
    return (
      <div className={info === "changepass" ? "change-pass" : "user-menu-hide"}>
        <p className="user-menu-label"> Đổi mật khẩu</p>
        <input className="user-menu-input" placeholder="Nhập mật khẩu mới" type="password" onChange={(e) => setpassn(e.target.value)} />
        <input className="user-menu-input" placeholder="Xác nhận mật khẩu mới" type="password" onChange={(e) => setconf(e.target.value)} />
        <button className="user-menu-button" onClick={() => changpass()}>Xác nhận đổi</button>
        <button className="user-menu-button" onClick={() => setinfo(null)}>Hủy</button>
      </div>
    )
  }
  function changpass() {
    if (conf || passn) {
      if (String(passn).length >= 6) {
        if (passn === conf) {
          user.pass = passn;
          axios.put(`https://localhost:44343/data/user/`, user)
            .then(function (response) {
              console.log(response);
              alert("Thay đổi mật khẩu thành công!");
              showusermenu()
            })
            .catch(function (response) {
              console.log(response);
              alert("Thay đổi mật khẩu thất bại!");
            });
        } else alert("Xác nhận mật khẩu chưa trùng khớp!");
      } else alert("Mật khẩu phải lớn hơn 6 ký tự!");
    } else alert("Vui lòng nhập đủ tất cả các trường!")
  }
  function changinfo() {
    if (!usertemp.firstname || !usertemp.lastname || !usertemp.sdt || !usertemp.diachi) { alert("Vui lòng nhập đủ tất cả các trường!") }
    else {
      axios.put(`https://localhost:44343/data/user/`, usertemp)
        .then(function (response) {
          console.log(response);
          alert("Thay đổi thông tin thành công!");
          showusermenu()
          window.location.reload();
        })
        .catch(function (response) {
          console.log(response);
          alert("Thay đổi mật khẩu thất bại!");
        });
    }
  }
  function logoutHandle() {
    logout();
    history.push("/");
  }
  function showusermenu() {
    setusermenu(!usermenu);
    setinfo(null);
    setusertemp(user);
  }
  if (adminMode === false)
    return (
      <div className="header" className={adminMode === false ? "header" : "header-hide"}>
        <div className="header-top">
          <NavLink className="header-top-item" to="/tincongnghe">
            <RiComputerFill className="header-top-item-icon" />
            <p className="header-top-item-content">Tin công nghệ</p>
          </NavLink>
          <NavLink className="header-top-item" to="/lienhe">
            <AiFillPhone className="header-top-item-icon" />
            <p className="header-top-item-content">Liên hệ</p>
          </NavLink>
          <NavLink className="header-top-item" to="/video">
            <BsYoutube className="header-top-item-icon" />
            <p className="header-top-item-content">Video</p>
          </NavLink>
          <NavLink className="header-top-item" to="/showroom">
            <MdLocationOn className="header-top-item-icon" />
            <p className="header-top-item-content">Hệ thống showroom</p>
          </NavLink>
        </div>
        <div className="header-center-container">
          <div className={statusHeader === false ? "header-center header-item" : "header-center-scroll"}>
            <div className="header-center-left">
              <NavLink to="/" className="home">
                <p className="logo">4.am</p>
              </NavLink>
              <div className="panel-search-product">
                <input
                  className="input-search-product"
                  placeholder="Nhập sản phẩm bạn muốn tìm !"
                />
                <button className="button-search-product">
                  <CgSearch id="button-search-product-icon" />
                  <p>Tìm kiếm</p>
                </button>
              </div>
            </div>
            <div className="header-center-right">
              {user === null ? (
                <NavLink className="header-center-right-menu-item" to="/login">
                  <HiOutlineUserCircle className="header-center-right-menu-item-icon" />
                  <p className="login-text">Đăng nhập</p>
                </NavLink>
              ) : (
                <div className="header-center-right-menu-item" >
                  {user.nameimage !== null ? (
                    <img
                      src={URL + `/Images/UserAvatar/${user.nameimage}`}
                      className="avatar"
                      alt="avatar"
                    />
                  ) : (
                    <img
                      src={URL + `/Images/UserAvatar/NullAvatar.png`}
                      className="avatar"
                      alt="avatar"
                    />
                  )}
                  <p className="login-text">
                    {user.firstname + " " + user.lastname}
                  </p>
                  <AiOutlineCaretDown id="drop-user" onClick={() => showusermenu()} />
                  {usermenuclick()}
                </div>
              )}
              {user === null ? (<div></div>) : (
                <NavLink className="header-center-right-menu-item" to="/bill">
                  <RiBillLine className="header-center-right-menu-item-icon" />
                  {user.bills.length === 0 ? (
                    <div></div>
                  ) : (
                    <div id="quantity-bill-user">{user.bills.length}</div>
                  )}
                  <p>Đơn hàng</p>
                </NavLink>
              )}
              <NavLink className="header-center-right-menu-item" to={user === null ? "/cart" : "/cart"} onClick={() => updateData}>
                <AiOutlineShoppingCart className="header-center-right-menu-item-icon" />
                {user === null ? (<div></div>) : (
                  <div id="quantity-cartdetails-user" style={{ display: user.cartDetails.length === 0 ? 'none' : 'block' }}>
                    <p>{user.cartDetails.length}</p>
                  </div>
                )}
                <p>Giỏ hàng</p>
              </NavLink>
              <NavLink to="/">
                <div className="header-center-right-menu-item" >
                  <IoIosNotificationsOutline className="header-center-right-menu-item-icon" />
                  <p>Thông báo</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container12Col wide">
            <div className="row-12-no-margin">
              <div className="col c-2 header-bottom-item header-bottom-item-menu"><BiMenuAltLeft className="header-bottom-item-img" /> Danh mục sản phẩm</div>
              <div className="col c-2 header-bottom-item"><img className="header-bottom-item-img" src={daxem} />Sản phẩm bạn đã xem</div>
              <div className="col c-2 header-bottom-item"><img className="header-bottom-item-img" src={tuvan} />Hướng dẫn mua hàng</div>
              <div className="col c-2 header-bottom-item"><img className="header-bottom-item-img" src={ship} />Chính sách vận chuyển</div>
              <div className="col c-2 header-bottom-item"><img className="header-bottom-item-img" src={tuvan} />Tư vấn bán hàng</div>
              <div className="col c-2 header-bottom-item"><img className="header-bottom-item-img" src={chinhhang} />Chính sách bảo hành</div>
            </div>
          </div>
        </div>
      </div>
    ); else return (
      <div className='topbar'>
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Admin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconsContainer">
              <IoIosNotificationsOutline className="topbarIconsContainer" />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconsContainer" >
              {user.nameimage !== null ? (
                <img
                  src={`https://localhost:44343/Images/UserAvatar/${user.nameimage}`}
                  className="avatar"
                  alt="avatar"
                  onClick={() => showusermenu()}
                />
              ) : (
                <img
                  src={`https://localhost:44343/Images/UserAvatar/NullAvatar.png`}
                  className="avatar"
                  alt="avatar"
                  onClick={() => showusermenu()}
                />
              )}
              {usermenuclick()}
            </div>
          </div>
        </div>
      </div>
    );

}
