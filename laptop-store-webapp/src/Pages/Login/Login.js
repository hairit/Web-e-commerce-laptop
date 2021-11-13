import React, { useEffect, useState, setState }from 'react'
import '../../CSS/Login.css'
import CALLER from "../../API/CALL";
import URL from "../../DATA/URL";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';
import { MdEvent } from 'react-icons/md';
import { BsArrowLeftRight } from 'react-icons/bs';
import axios from 'axios';



export default function Login() {

        const [username, setusername] = useState("lth.contact@gmail.com");
        const [password, setpassword] = useState("thanhhoa2022");
        const [detail, setDetail] = useState(0);


        function handleClick()
        {
            axios
            .get(
              `https://localhost:44343/data/user/login/`+username+`/`+password
            )
            .then((res) => {
              console.log(res);
              setDetail(res.status);
              console.log(detail);
              alert("Đăng nhập thành công");
            })
            .catch((err) => {console.log(err + "Khong goi duoc user");
                              console.log(err + "Hỏng ròi")
                              var txt='https://localhost:44343/data/user/login/'+username+'/'+password;
                              console.log(err + txt);   
                              console.log("Status"+detail);    
                              alert("Đăng nhập thất bại");                   
                          });
        }
        function getusername(event)
        {
            setusername(event.target.value)
        }
        function getpass(event)
        {
            setpassword(event.target.value)
        }
        {
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
                            <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                        </div>
                        <div className="password login">
                            <span class="login-icon"> <i class="fa fa-lock"></i> </span>
                           
                            <input type="password" placeholder="Password"
                            class="login-input" onChange={(event) => getpass(event)}></input>
                        </div>
                        <div className="button-login">
                        <input class="button login-button" type="submit" value="Đăng nhập" onClick={() => handleClick()}></input>
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
}




