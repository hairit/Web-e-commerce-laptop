import React, { useState } from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import { Link } from "react-router-dom"
import axios from 'axios'

export default function Topbar({ user, logout }) {
    const [usermenu, setusermenu] = useState(false);
    const [usertemp, setusertemp] = useState(null);
    const [passn, setpassn] = useState("");
    const [conf, setconf] = useState("");
    const [info, setinfo] = useState(null)
    const usermenuclick = () => {
        return (
            <div className={usermenu === true ? "user-menu-div" : "user-menu-hide"} >
                <div className="user-menu">
                    <img src={`https://localhost:44343/Images/UserAvatar/${user.nameimage}`}
                        alt="avatar" className="user-menu-avatar" />
                    <p className="user-menu-login-text">  {user.firstname + " " + user.lastname} </p>
                    {bottomUserMenu()}
                </div>
            </div>
        )
    }
    const bottomUserMenu = () => {

        if (info === "changepass") return (showchangepass(info))
        else if (info === "changeinfo") return (showchangeinfo(info))
        else return showinfo(info);
    }

    const showinfo = (info) => {
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
        if (!usertemp.firstname || !usertemp.lastname || !usertemp.sdt || !usertemp.diachi) {
            alert("Vui lòng nhập đủ tất cả các trường!")
        }
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
        window.location.reload();
    }
    function showusermenu() {
        setusermenu(!usermenu);
        setinfo(null);
        setusertemp(user);
    }
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" className="link">
                        <span className="logo">Admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
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
    )
}
