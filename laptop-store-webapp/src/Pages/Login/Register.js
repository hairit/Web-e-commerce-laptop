import React from 'react'
import '../../CSS/Login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Register()
{
    return(
    <div className="layout-page-register">
        <span className="title-register">Đăng ký tài khoản</span>
        <div className="input-table">
            <div className="first-name">
                <span class="first-name-icon"> <i class="fa fa-user"></i> </span>
                    <input type="text" placeholder="Họ" class="login-input"></input>
            </div>
        </div>
    </div>
    );
}