import React from 'react'
import '../CSS/Header.css'
import Logo from '../Images/Chicken-logo.png'
import {MdLocationOn} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'
import {AiFillPhone,AiOutlineShoppingCart} from 'react-icons/ai'
import {RiComputerFill} from 'react-icons/ri'
import {CgSearch} from 'react-icons/cg'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {CgProductHunt} from 'react-icons/cg'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
export default function Header() {
    return ( 
        <div className = "header" >
        <div className = "header-top header-item">
            <NavLink className="header-top-item" to="/tincongnghe">
                    <RiComputerFill className="header-top-item-icon"/>
                    <p className="header-top-item-content">Tin công nghệ</p>
            </NavLink>    
            <NavLink className="header-top-item" to="/lienhe">
                    <AiFillPhone className="header-top-item-icon"/>
                    <p className="header-top-item-content">Liên hệ</p>
            </NavLink>   
            <NavLink className="header-top-item" to="/video">
                    <BsYoutube className="header-top-item-icon"/>
                    <p className="header-top-item-content">Video</p>
            </NavLink>   
            <NavLink className="header-top-item" to="/showroom">
                    <MdLocationOn className="header-top-item-icon"/>
                    <p className="header-top-item-content">Hệ thống showroom</p>
            </NavLink>   
        </div> 
        <div className = "header-center header-item" > 
                <div className="header-center-left">
                        <NavLink to="/" className="home">
                                <img src={Logo} alt="" className="logo"/>
                                <p className="lappee-name">Lappee</p>
                        </NavLink>
                        <div className="panel-search-product">
                                <select className="header-center-left-dropdown">
                                        <option value className="header-center-left-dropdown-option">Xin chào</option>
                                        <option value className="header-center-left-dropdown-option">Chế độ nhân viên</option>
                                </select>
                                <input className="input-search-product" placeholder="Nhập sản phẩm bạn muốn tìm !"/>
                                <button className="button-search-product"><CgSearch id="button-search-product-icon"/><p>Tìm kiếm</p></button>
                        </div>
                </div>
                <div className="header-center-right">
                        <NavLink className="header-center-right-menu-item" to="/login">
                                <HiOutlineUserCircle className="header-center-right-menu-item-icon"/>
                                <p className="login-text">Đăng nhập<br />Đăng ký</p>
                        </NavLink>
                        <NavLink className="header-center-right-menu-item" to="/giohang">
                                <AiOutlineShoppingCart className="header-center-right-menu-item-icon"/>
                                <p>Giỏ hàng</p>
                        </NavLink>
                        <div className="header-center-right-menu-item">
                                <IoIosNotificationsOutline className="header-center-right-menu-item-icon"/>
                                <p>Thông báo</p>
                        </div>
                        <NavLink className="header-center-right-menu-item" to="/sanpham">
                                <CgProductHunt className="header-center-right-menu-item-icon"/>
                                <p>Sản phẩm</p>
                        </NavLink>
                </div>
        </div> 
        <div className = "header-bottom" >  </div> </div>
    )
}