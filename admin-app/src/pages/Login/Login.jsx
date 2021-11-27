import { useState } from 'react'
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"

export default function Login({ login }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [flag, setFlag] = useState(null);
    const [usertemp, setusertemp] = useState(null);
    const [confirm, setconfirm] = useState("");
    const handleClickLogin = (e) => {
        e.preventDefault();
        if (user === null) {
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
        if (user.email && user.pass) {
            if (!String(user.email).includes('@') || !String(user.pass).length >= 6) {
                alert("Bạn đang nhập sai định dạng đăng nhập!");
                return;
            }
            else {
                axios.get(`https://localhost:44343/data/user/login/${user.email}/${user.pass}`)
                    .then(res => {
                        console.log(res.data);
                        console.log(res.status);
                        if (res.data.mode === "CUSTOMER") alert("Tài khoảng không đủ quyền hạn để truy cập");
                        else {
                            login(res.data);
                            alert("Đăng nhập thành công");
                            console.log(res);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        alert("Tài khoản hoặc mật khẩu không đúng!");
                    });
            }
        } else {
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
    }
    const handleClickReqPass = (e) => {
        e.preventDefault();
        if (usertemp.email) {
            if (!String(usertemp.email).includes('@')) {
                alert("Bạn đang nhập sai định dạng email!")
                return;
            }
            else {
                axios.get(`https://localhost:44343/data/user/email=${usertemp.email}`)
                    .then(res => {
                        setUser(res.data);
                        setFlag("sdt");
                        console.log(usertemp);
                    })
                    .catch(err => { alert("Email chưa từng được đăng ký!!!"); });
            }
        } else {
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
    }
    const handleClickReqSdt = (e) => {
        if (usertemp.sdt) {
            if (usertemp.sdt === user.sdt) {
                setusertemp(user);
                setFlag("pass2");
                console.log(usertemp);
            } else alert("Xác nhận số điện thoại không đúng!!!");
        } else {
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
    }
    const handleClickReqPass2 = (e) => {
        console.log(confirm);
        console.log(usertemp);
        if (confirm && usertemp.pass) {
            if (confirm === usertemp.pass) {
                axios.put(`https://localhost:44343/data/user/`, usertemp)
                    .then(function (response) {
                        console.log(response);
                        alert("Thay đổi mật khẩu thành công!")
                        setFlag(null);
                        navigate("/");
                    })
                    .catch(function (response) {
                        console.log(response);
                        alert("Thay đổi mật khẩu thất bại!");
                    });
            } else alert("Nhập lại mật khẩu không trùng khớp!");
        } else {
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
    }
    const showReqPass = () => {
        setFlag("email");
        setusertemp(null);
    }
    const loginForm = () => {
        return (
            <div>
                <div className={flag === null ? "login-form" : "login-hide"}>
                    <div className="login-label">
                        <span>
                            <p>Lappee Login</p>
                        </span>
                    </div>
                    <div className="login-main-form">
                        <input className="login-input" type="text" placeholder="Username" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        <input className="login-input" type="password" placeholder="Password" onChange={(e) => setUser({ ...user, pass: e.target.value })} />
                        <button className="login-button" onClick={(e) => handleClickLogin(e)}>Đăng nhập</button>
                    </div>
                    <div className="login-reqpass">
                        <Link to="#" onClick={() => showReqPass()}>Quên mật khẩu</Link>
                    </div>
                </div>
                <div className={flag === "email" ? "login-email" : "login-hide"}>
                    <div className="login-label">
                        <span>
                            <p>Lấy lại mật khẩu</p>
                        </span>
                    </div>
                    <p className="reqpass-label">Vui lòng nhập email của bạn:</p>
                    <input className="login-input" type="text" placeholder="Email" onChange={(e) => setusertemp({ ...usertemp, email: e.target.value })} />
                    <button className="rqpass-button" onClick={(e) => handleClickReqPass(e)}> Xác nhận</button>
                    <button className="rqpass-button" onClick={() => setFlag(null)}>Hủy</button>
                </div>
                <div className={flag === "sdt" ? "login-sdt" : "login-hide"}>
                    <div className="login-label">
                        <span>
                            <p>Lấy lại mật khẩu</p>
                        </span>
                    </div>
                    <p className="reqpass-label">Vui lòng nhập số điện thoại xác nhận:</p>
                    <input className="login-input" type="text" placeholder="Số điện thoại" onChange={(e) => setusertemp({ ...usertemp, sdt: e.target.value })} />
                    <div className="rqpass-login-form">
                        <button className="rqpass-button" onClick={(e) => handleClickReqSdt(e)}> Xác nhận</button>
                        <button className="rqpass-button" onClick={() => setFlag(null)}>Hủy</button>
                    </div>
                </div>
                <div className={flag === "pass2" ? "login-form" : "login-hide"}>
                    <div className="login-label">
                        <span>
                            <p>Lấy lại mật khẩu</p>
                        </span>
                    </div>
                    <p className="reqpass-label">Nhập mật khẩu mới:</p>
                    <input className="login-input" type="text" placeholder="Password" onChange={(e) => setusertemp({ ...usertemp, pass: e.target.value })} />
                    <p className="reqpass-label">Xác nhận mật khẩu mới:</p>
                    <input className="login-input" type="text" placeholder="Password" onChange={(event) => setconfirm(event.target.value)} />
                    <div className="rqpass-login-form">
                        <button className="rqpass-button" onClick={(e) => handleClickReqPass2(e)}> Xác nhận</button>
                        <button className="rqpass-button" onClick={() => setFlag(null)}>Hủy</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="login-page">
            <div className="login-layout">
                <div className="login-logo">
                    <p>4 a.m</p>
                </div>
                {loginForm()}
            </div>
            <div className="bottom-page">
                <p className="bottom-text">Make by HHDD team!</p>
            </div>
        </div>
    );
}