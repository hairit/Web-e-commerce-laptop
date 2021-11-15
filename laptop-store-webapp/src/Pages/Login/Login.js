import React, { useState } from 'react'
import { useHistory } from 'react-router';
import '../../CSS/Login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';
import { MdEvent } from 'react-icons/md';
import { BsArrowLeftRight, BsCheck } from 'react-icons/bs';
import axios from 'axios';


export default function Login({login}) {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    let history = useHistory();
    function handleClick(e) {
        e.preventDefault();
        if(!username.includes('@') || !password.length >= 6) return;
        else {
            axios.get(`https://localhost:44343/data/user/login/${username}/${password}`)
                           .then(res => {
                                if(res.status === 404) alert("Tài khoản hoặc mật khẩu không đúng");
                                else {
                                    login(res.data);
                                    history.goBack();
                                }
                           })
                           .catch(err => console.log("Login errol request"));
        }             
    }
    function getusername(event) {
        setusername(event.target.value)
    }
    function getpass(event) {
        setpassword(event.target.value)
    }
        return (
            <div className="layout-page-login">
                <div className="customer-login">
                    <span className="header-login" >
                        <h1 className="title-login">Đăng nhập</h1>
                    </span>
                    <div classname="user-box ">
                        <form>
                            <div className="username login">
                                <span class="login-icon"> <i class="fa fa-envelope"></i> </span>
                                <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="password login">
                                <span class="login-icon"> <i class="fa fa-lock"></i> </span>

                                <input type="password" placeholder="Password"
                                    class="login-input" onChange={(event) => getpass(event)}></input>
                            </div>
                            <div className="button-login">
                                <input class="button login-button" type="submit" value="Đăng nhập" onClick={(e) => handleClick(e)}></input>
                            </div>
                            <div className="login-recovery">
                                <a href="#"> Quên mật khẩu? </a>
                                hoặc
                                <NavLink to="/a.html">{' Đăng ký'}</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
               
        )
}
