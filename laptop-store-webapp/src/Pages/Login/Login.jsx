import React, { useState } from 'react'
import { useHistory } from 'react-router';
import '../../CSS/Login.css'
//import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
export default function Login({login,userCookie}) {
    const history = useHistory();
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [reqpass, setreqpass] = useState(false);
    const [reqpass2, setreqpass2] = useState(false);
    const [reqsdt, setreqsdt] = useState(false);
    const [signup, setsignup] = useState(false);
    const [confirm, setconfirm] = useState("");
    const [user, setuser] = useState({        
                                            id: "",
                                            lastname: "",
                                            firstname: "",
                                            email: "",
                                            pass: "",
                                            sdt: "",
                                            diachi: "",
                                            mode: "CUSTOMER",
                                            nameimage: ""
                                        });
    const [usertemp, setusertemp] = useState({        
                                            id: "",
                                            lastname: "",
                                            firstname: "",
                                            email: "",
                                            pass: "",
                                            sdt: "",
                                            diachi: "",
                                            mode: "CUSTOMER",
                                            nameimage: ""
                                        });


    /*user = id, lastname, firtstname, email, sdt, pass, diachi, img*/
    function handleClick(e) {
        e.preventDefault();
        if (user.email && user.pass)
        {
        if(!String(user.email).includes('@') || !String(user.pass).length >= 6) 
        {
            alert("Bạn đang nhập sai định dạng email!");
            return;
        }
        else {
            axios.get(`https://localhost:44343/data/user/login/${user.email}/${user.pass}`)
                           .then(res => {
                                        if(res.data.mode === "ADMIN" || res.data.mode ==="STAFF"){
                                            history.push(`/admin/${res.data.id}`);
                                            return;
                                        }
                                        console.log("cust");
                                        console.log(res.data.mode);
                                        login(res.data);
                                        history.goBack();
                                }
                           )
                           .catch(err => 
                            {
                                console.log(err);
                                alert("Tài khoản hoặc mật khẩu không đúng!");
                            });
        }}else{
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }      
    }
    function handleClickReqPass(e)
    {
        e.preventDefault();
        if (usertemp.email)
        {
        if(!String(usertemp.email).includes('@') ) 
        {
            alert("Bạn đang nhập sai định dạng email!")
            return;
        }
        else
        {
            axios.get(`https://localhost:44343/data/user/email=${usertemp.email}`)
                        .then(res=>{
                                setuser(res.data);
                                showReqSdt();
                        })
                        .catch(err => {alert("Email chưa từng được đăng ký!!!");});
        }
        } else {
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
    }
    function handleClickReqSdt(e)
    {
        if(usertemp.sdt)
        {
        if(usertemp.sdt==user.sdt) 
        {
            setusertemp(user);
            showPass2();
        } else alert("Xác nhận số điện thoại không đúng!!!");
        }else{
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
    }
    function handleClickReqPass2(e)
    {
        if(confirm && usertemp.pass) 
        {
        if(confirm==usertemp.pass)
        {
            axios.put(`https://localhost:44343/data/user/`,usertemp)
                .then(function (response) {
                    console.log(response);
                    alert("Thay đổi mật khẩu thành công!")
                    showLogin();
                    history.goBack();
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
    const isnull=()=>
    {
        if(!usertemp.firstname) return true;
        if(!usertemp.lastname) return true;
        if(!usertemp.email) return true;
        if(!usertemp.sdt) return true;
        if(!usertemp.diachi) return true;
        if(!usertemp.pass) return true;
        if(!confirm) return true;
        return false;
    }  
    function handleSignUp(e)
    {
        if(!isnull())
        {
        if (confirm===usertemp.pass)
        {
        axios.post(`https://localhost:44343/data/user/`,usertemp)
            .then(function(response)
            {
                console.log(response);
                alert("Đăng ký thành công!")
                showLogin();
                history.goBack();
            })
            .catch(function(response)
            {
                console.log(response);
                alert("Đăng ký thất bại, vui lòng liên hệ cskh!");
            });
        } 
        else{
            alert("Nhập lại mật khẩu không trùng khớp!!");
            setFlag2(true);
            return;
        }} else {
            alert("Vui lòng nhập đầy đủ các trường!");
            return;
        }
    }
    function setemail(event)
    {
        setusertemp(
            {
                ...usertemp,
                email:event.target.value
            }
        );
        if (!String(usertemp.email).includes('@')) setFlag(true);
        else setFlag(false);
    }
    function setpass2(event)
    {
        var x = event.target.value;
        setconfirm(x);
        if (!(confirm==usertemp.pass)) setFlag2(false) ;
        else setFlag2(false);
    }

    function showLogin()
    {
        setusertemp(null);
        setreqpass(false);
        setsignup(false);
        setreqsdt(false);
        setreqpass2(false);
    }
    function showReqPass()
    {
        setusertemp(null);
        setreqpass(true);
        setsignup(false);
        setreqsdt(false);
        setreqpass2(false)
    }
    function showSignUp()
    {
        setusertemp(null);
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
                            <div className="password login-login">
                                
                                <input type="email" placeholder="Email" class="login-input" name="username"   onChange={(event) => setuser({...user,email:event.target.value})}></input>
                            </div>
                            <div className="password login-login">
                                
                                <input type="password" placeholder="Password"class="login-input"   onChange={(event) => setuser({...user,pass: event.target.value})}></input>
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
                                <input type="email" placeholder="Email" class="login-input" name="username"   onChange={(event) => setusertemp({email:event.target.value})}></input>
                            </div>
                            <div className="reqpass-act-button">
                                <button class="button reqpass-button" onClick={(e) => handleClickReqPass(e)}>Xác nhận</button>
                                <button class="button reqpass-cancel-button" onClick={()=>showLogin()}>Hủy</button>
                            </div>
                        </div>
                        <div className={reqsdt===true?"reqsdt-form":"reqsdt-form-hide"}>
                            <div className="reqpass-email login-login">
                               
                                <input type="tel" placeholder="Số điện thoại" class="login-input" name="sdt"   onChange={(event) => setusertemp({sdt:event.target.value})}></input>
                            </div>
                            <div className="reqpass-act-button">
                            <button class="button reqpass-button" onClick={() => handleClickReqSdt()}>Xác nhận</button>
                                <button class="button reqpass-cancel-button" onClick={()=>showReqPass()}>Hủy</button>
                            </div>
                        </div>
                        <div className={reqpass2===true?"reqpass2":"reqpass2-hide"}>
                        <input type="password" placeholder="Nhập mật khẩu mới"class="login-input-pass2"   onChange={(event) => setusertemp({...usertemp,pass:event.target.value})}></input>
                        <input type="password" placeholder="Nhập lại mật khẩu mới"class="login-input-pass2"   onChange={(event) => setconfirm(event.target.value)}></input>
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
                               
                                <input type="text" placeholder="Họ" class="login-input" name="firstname"   onChange={(event) => setusertemp({...usertemp, firstname:event.target.value})}></input>
                            </div>
                            <div className="lastname login-login">
                                
                                <input type="text" placeholder="Tên" class="login-input" name="firstname"  onChange={(event) => setusertemp({...usertemp, lastname:event.target.value})}></input>
                            </div>
                            <div className="username login-login">
                                
                                <input type="email" placeholder="Email" className={flag===true?"login-input-warning":"login-input"}   name="username" onChange={(event) => setemail(event)}></input>
                            </div>
                            <div className="password login-login">
                               
                                <input type="password" placeholder="Nhập mật khẩu" class="login-input"  onChange={(event) => setusertemp({...usertemp, pass:event.target.value})}></input>
                            </div>
                            <div className="password2 login-login">
                                <input type="password" placeholder="Nhập lại mật khẩu"  className={flag2===true?"login-input-warning":"login-input"} onChange={(event)=>setpass2(event)}></input>
                            </div>
                            <div className="sdt login-login">
                                
                                <input type="tel" placeholder="Số điện thoại"class="login-input" onChange={(event) => setusertemp({...usertemp, sdt:event.target.value})}></input>
                            </div>
                            <div className="address login-login">
                               
                                <input type="text" placeholder="Địa chỉ"class="login-input"  onChange={(event) => setusertemp({...usertemp, diachi:event.target.value})}></input>
                            </div>
                            <button className="button sign-up-button" onClick={(e)=>handleSignUp(e)}>Đăng ký</button>
                            <button className="button sign-up-button" onClick={(e)=>showLogin(e)}>Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
               
        )
}
