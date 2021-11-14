import React, { useRef, useEffect, useState } from "react";
import "../CSS/Header.css";
import URL from "../DATA/URL";
import Logo from "../Images/Chicken-logo.png";
import { MdLocationOn } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import {
  AiFillPhone,
  AiOutlineShoppingCart,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { RiComputerFill, RiBillLine } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { Cookies } from "react-cookie";
import axios from "axios";

//import { instanceOf } from 'prop-types';
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
      <p className="login-text">Đăng nhập</p>
    </div>
  );
};

export default function Header({ user }) {
  return (
    <div className="header">
      <div className="header-top header-item">
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
      <div className="header-center header-item">
        <div className="header-center-left">
          <NavLink to="/" className="home">
            <img src={Logo} alt="" className="logo" />
            <p className="lappee-name">Lappee</p>
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
            <div className="header-center-right-menu-item">
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
              <AiOutlineCaretDown id="drop-user" />
            </div>
          )}
          {user === null ? (
            <div></div>
          ) : (
            <NavLink className="header-center-right-menu-item" to="/bill">
              <RiBillLine className="header-center-right-menu-item-icon" />
              {user.bills.length === 0 ? (
                <div></div>
              ) : (
                <div className="quanlity-data-user">{user.bills.length}</div>
              )}
              <p>Đơn hàng</p>
            </NavLink>
          )}
          <NavLink
            className="header-center-right-menu-item"
            to={user === null ? "/" : "/card"}
          >
            <AiOutlineShoppingCart className="header-center-right-menu-item-icon" />
            {user === null ? (
              <div></div>
            ) : (
              <div
                className={
                  user.cards.length === 0
                    ? "quanlity-data-user-disable"
                    : "quanlity-data-user"
                }
              >
                {user.cards.length}
              </div>
            )}
            <p>Giỏ hàng</p>
          </NavLink>
          <div className="header-center-right-menu-item">
            <IoIosNotificationsOutline className="header-center-right-menu-item-icon" />
            <p>Thông báo</p>
          </div>
        </div>
      </div>
      <div className="header-bottom"> </div>{" "}
    </div>
  );
}
