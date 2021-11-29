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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import UserPanel from "./UserPanel";
export default function Header({ user , adminMode, logout , updateData ,setUser}) {
  const [statusHeader, setStatusHeader] = useState(false);
  const [userPanel, setUserPanel] = useState(false);
  const history = useHistory();
  useEffect(() => {
    window.addEventListener('scroll', changeStatusHeader);
  }, [])
  const changeStatusHeader = () => {
    if (window.scrollY >= 42) setStatusHeader(true);
    else setStatusHeader(false);
  }
  const changeStatusUserPanel = () => {
    if(userPanel === false) setUserPanel(true);
    else setUserPanel(false);
  }
    return (
      <div className={adminMode === false ? "header" : "header-hide"}>
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
                <div className="header-center-right-menu-item user-drop-down">
                 <UserPanel user={user} changeStatusPanelUser={changeStatusUserPanel} userPanel={userPanel} updateData={updateData} setUser={setUser} />
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
                  <AiOutlineCaretDown id="drop-user" onClick={()=>changeStatusUserPanel()} />
                  
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
    );
} 

