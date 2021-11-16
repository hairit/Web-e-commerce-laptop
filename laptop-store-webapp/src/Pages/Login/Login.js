import React, { useState } from 'react'
import { useHistory } from 'react-router';
import '../../CSS/Login.css'
//import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';


export default function Login({login,userCookie}) {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [reqpass, setreqpass] = useState(false);
    const [reqpass2, setreqpass2] = useState(false);
    const [reqsdt, setreqsdt] = useState(false);
    const [signup, setsignup] = useState(false);
    const [user, setuser] = useState([]);
    const [sdt, setsdt] = useState("");
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
                           .catch(err => console.log("Login:"+err));
        }             
    }
    function handleClickReqPass(e)
    {
        e.preventDefault();
        if(!username.includes('@')) return;
        else
        {
            axios.get(`https://localhost:44343/data/user/email=${username}`)
                        .then(res=>{
                            if(res.status === 404) alert("Email chưa từng được đăng ký!!!");
                            else{
                                setuser(res.data);
                                showReqSdt();
                            }
                        })
                        .catch(err => {alert("Email chưa từng được đăng ký!!!");});
        }
    }
    function handleClickReqSdt(e)
    {
        if(sdt==user.sdt) 
        {
            showPass2();
        } else alert("Xác nhận số điện thoại không đúng!!!");
    }
    function handleClickReqPass2(e)
    {
        if(password==password2)
        {
            console.log(user);
            axios.post(`https://localhost:44343/data/user/${user.id}`,user)
                .then(function (response) {
                    console.log(response);
                    showLogin();
                  })
                .catch(function (response) {
                    console.log(response);
                  });
        } else alert("Nhập lại mật khẩu");
    }
    function getsdt(event)
    {
        setsdt(event.target.value);
    }
    function getusername(event) {
        setusername(event.target.value)
    }
    function getpass(event) {
        setpassword(event.target.value)
    }
    function getpass2(event) {
        setpassword2(event.target.value)
    }
    function showLogin()
    {
        setreqpass(false);
        setsignup(false);
        setreqsdt(false);
        setreqpass2(false)
    }
    function showReqPass()
    {
        setreqpass(true);
        setsignup(false);
        setreqsdt(false);
        setreqpass2(false)
    }
    function showSignUp()
    {
        setreqpass(false);
        setsignup(true);
        setreqsdt(false);
        setreqpass2(false)
    }
    function showPass2()
    {
        setreqpass(true);
        setsignup(false);
        setreqsdt(false);
        setreqpass2(true)
    }
    function showReqSdt()
    {
        setreqpass(true);
        setsignup(false);
        setreqsdt(true);
        setreqpass2(false)
    }
        return (
            <div className="layout-page-login">
                <div className={reqpass===false && signup===false ?"customer-login":"customer-login-hide"} >
                    <span className="header-login" >
                        <h1 className="title-login">Đăng nhập</h1>
                    </span>
                    <div classname="user-box ">
                        <form>
                            <div className="login-login">
                                
                                <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="password login-login">
                                
                                <input type="password" placeholder="Password"class="login-input" onChange={(event) => getpass(event)}></input>
                            </div>
                            <div className="button-login-login">
                                <input class="button login-button" type="submit" value="Đăng nhập" onClick={(e) => handleClick(e)}></input>
                            </div>
                            <div className="login-recovery">
                                <a href="#" onClick={()=>showReqPass()}> Quên mật khẩu? </a>
                                hoặc 
                                <a href="#" onClick={()=>showSignUp()}> Đăng ký</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={reqpass===true ?"req-pass":"req-pass-hidden"}>
                    <span className="header-login">
                        <h1 className="title-login">Phục hồi mật khẩu</h1>
                    </span>
                    <div className="reqpass">
                        <div className={reqsdt===false && reqpass2===false?"reqpass-form":"reqpass-form-hide"}>
                            <div className="reqpass-email login-login">
                               
                                <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="reqpass-act-button">
                                <button class="button reqpass-button" onClick={(e) => handleClickReqPass(e)}>Xác nhận</button>
                                <button class="button reqpass-cancel-button" onClick={()=>showLogin()}>Hủy</button>
                            </div>
                        </div>
                        <div className={reqsdt===true?"reqsdt-form":"reqsdt-form-hide"}>
                            <div className="reqpass-email login-login">
                               
                                <input type="tel" placeholder="Số điện thoại" class="login-input" name="sdt" onChange={(event) => getsdt(event)}></input>
                            </div>
                            <div className="reqpass-act-button">
                            <button class="button reqpass-button" onClick={() => handleClickReqSdt()}>Xác nhận</button>
                                <button class="button reqpass-cancel-button" onClick={()=>showReqPass()}>Hủy</button>
                            </div>
                        </div>
                        <div className={reqpass2===true?"reqpass2":"reqpass2-hide"}>
                        <input type="password" placeholder="Nhập mật khẩu mới"class="login-input-pass2" onChange={(event) => getpass(event)}></input>
                        <input type="password" placeholder="Nhập lại mật khẩu mới"class="login-input-pass2" onChange={(event) => getpass2(event)}></input>
                        <button className="button reqpass-pass2-button" onClick={(e)=>handleClickReqPass2(e)}>Xác nhận</button>
                        </div>
                    </div>
                </div>
                <div className={signup===true?"sign-up":"sign-up-hide"}>
                    <span className="header-login">
                        <h1 className="title-login">Đăng ký tài khoản</h1>
                    </span>
                    <div className="sign-up-form">
                        <div>
                            <div className="firstname login-login">
                               
                                <input type="text" placeholder="Họ" class="login-input" name="firstname" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="lastname login-login">
                                
                                <input type="text" placeholder="Tên" class="login-input" name="firstname" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="username login-login">
                                
                                <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="password login-login">
                               
                                <input type="password" placeholder="Password"class="login-input" onChange={(event) => getpass(event)}></input>
                            </div>
                            <div className="sdt login-login">
                                
                                <input type="tel" placeholder="Số điện thoại"class="login-input" onChange={(event) => getpass(event)}></input>
                            </div>
                            <div className="address login-login">
                               
                                <input type="text" placeholder="Địa chỉ"class="login-input" onChange={(event) => getpass(event)}></input>
                            </div>
                            <button className="button sign-up-button" onClick={(e)=>showLogin(e)}>Đăng ký</button>
                            <button className="button sign-up-button" onClick={(e)=>showLogin(e)}>Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
               
        )
}
