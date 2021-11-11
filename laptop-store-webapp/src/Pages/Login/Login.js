import React from 'react'
import '../../CSS/Login.css'

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
                            <i class="login-lable email"></i> 
                            <input type="email" placeholder="Email"></input>
                        </div>
                        <div className="password login">
                            <i class="login-lable pass"></i>
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <div className="button-login">
                        <input class="button login-button" type="submit" value="Đăng nhập"></input>
                        </div>
                        <div className="recovery">
                            <a href="#"> Quên mật khẩu? </a> 
                            hoặc
                            <a href="#"> Đăng ký</a>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
  }
