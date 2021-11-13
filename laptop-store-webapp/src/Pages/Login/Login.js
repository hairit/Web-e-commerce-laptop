import React from 'react'
import '../../CSS/Login.css'
import CALLER from "../../API/CALL";
import URL from "../../DATA/URL";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';




export default function Login() {
    return(
        <div className="layout-page-login">
            <div className="customer-login">
                <span className="header-login" >
                    <h1 className="title-login">Đăng nhập</h1>
                </span>
                <div classname="user-box ">
                    <form>
                        <div className="username login">
                            <span class="login-icon"> <i class="fa fa-envelope"></i> </span>
                            <input type="email" placeholder="Email" class="login-input"></input>
                        </div>
                        <div className="password login">
                            <span class="login-icon"> <i class="fa fa-lock"></i> </span>
                           
                            <input type="password" placeholder="Password"
                            class="login-input"></input>
                        </div>
                        <div className="button-login">
                        <input class="button login-button" type="submit" value="Đăng nhập"></input>
                        </div>
                        <div className="login-recovery">
                            <a href="#"> Quên mật khẩu? </a> 
                            hoặc
                            <NavLink to="/register">{' Đăng ký'}</NavLink>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
  }
