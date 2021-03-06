import React, { useState } from 'react'
import { useHistory } from 'react-router';
import '../../CSS/Login.css'
//import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { IoMdShuffle } from 'react-icons/io';
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
            alert("Ba??n ??ang nh????p sai ??i??nh da??ng email!");
            return;
        }
        else {
            axios.get(`https://localhost:44343/data/user/login/${user.email}/${user.pass}`)
                           .then(res => {
                               console.log(res.data);
                                        if(res.data.mode === 'CUSTOMER'){
                                            console.log("cust");
                                            console.log(res.data.mode);
                                            login(res.data);
                                            history.push('/');
                                        }else {
                                            if(res.data.mode === "ADMIN" || res.data.mode ==="STAFF"){
                                                history.push(`/admin/${res.data.id}`);
                                                return;
                                            }
                                        }       
                                }
                           )
                           .catch(err => 
                            {
                                console.log(err);
                                alert("Ta??i khoa??n ho????c m????t kh????u kh??ng ??u??ng!");
                            });
        }}else{
            alert("Vui lo??ng nh????p ??????y ??u?? ca??c tr??????ng!");
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
            alert("Ba??n ??ang nh????p sai ??i??nh da??ng email!")
            return;
        }
        else
        {
            axios.get(`https://localhost:44343/data/user/email=${usertemp.email}`)
                        .then(res=>{
                                setuser(res.data);
                                showReqSdt();
                        })
                        .catch(err => {alert("Email ch??a t????ng ????????c ????ng ky??!!!");});
        }
        } else {
            alert("Vui lo??ng nh????p ??????y ??u?? ca??c tr??????ng!");
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
        } else alert("Xa??c nh????n s???? ??i????n thoa??i kh??ng ??u??ng!!!");
        }else{
            alert("Vui lo??ng nh????p ??????y ??u?? ca??c tr??????ng!");
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
                    alert("Thay ??????i m????t kh????u tha??nh c??ng!")
                    showLogin();
                    history.goBack();
                  })
                .catch(function (response) {
                    console.log(response);
                    alert("Thay ??????i m????t kh????u th????t ba??i!");
                  });
        } else alert("Nh????p la??i m????t kh????u kh??ng tru??ng kh????p!");
        } else {
            alert("Vui lo??ng nh????p ??????y ??u?? ca??c tr??????ng!");
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
                alert("????ng ky?? tha??nh c??ng!")
                showLogin();
                history.goBack();
            })
            .catch(function(response)
            {
                console.log(response);
                alert("????ng ky?? th????t ba??i, vui lo??ng li??n h???? cskh!");
            });
        } 
        else{
            alert("Nh????p la??i m????t kh????u kh??ng tru??ng kh????p!!");
            setFlag2(true);
            return;
        }} else {
            alert("Vui lo??ng nh????p ??????y ??u?? ca??c tr??????ng!");
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
                        <h1 className="title-login">????ng nh????p</h1>
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
                                <input class="button login-button" type="submit" value="????ng nh????p" onClick={(e) => handleClick(e)}></input>
                            </div>
                            <div className="login-recovery">
                                <a href="#" onClick={()=>showReqPass()}> Qu??n m????t kh????u? </a>
                                ho????c 
                                <a href="#" onClick={()=>showSignUp()}> ????ng ky??</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={reqpass===true ?"req-pass":"req-pass-hidden"}>
                    <span className="header-login">
                        <h1 className="title-login">Phu??c h????i m????t kh????u</h1>
                    </span>
                    <div className="reqpass">
                        <div className={reqsdt===false && reqpass2===false?"reqpass-form":"reqpass-form-hide"}>
                            <div className="reqpass-email login-login">
                                <input type="email" placeholder="Email" class="login-input" name="username"   onChange={(event) => setusertemp({email:event.target.value})}></input>
                            </div>
                            <div className="reqpass-act-button">
                                <button class="button reqpass-button" onClick={(e) => handleClickReqPass(e)}>Xa??c nh????n</button>
                                <button class="button reqpass-cancel-button" onClick={()=>showLogin()}>Hu??y</button>
                            </div>
                        </div>
                        <div className={reqsdt===true?"reqsdt-form":"reqsdt-form-hide"}>
                            <div className="reqpass-email login-login">
                               
                                <input type="tel" placeholder="S???? ??i????n thoa??i" class="login-input" name="sdt"   onChange={(event) => setusertemp({sdt:event.target.value})}></input>
                            </div>
                            <div className="reqpass-act-button">
                            <button class="button reqpass-button" onClick={() => handleClickReqSdt()}>Xa??c nh????n</button>
                                <button class="button reqpass-cancel-button" onClick={()=>showReqPass()}>Hu??y</button>
                            </div>
                        </div>
                        <div className={reqpass2===true?"reqpass2":"reqpass2-hide"}>
                        <input type="password" placeholder="Nh????p m????t kh????u m????i"class="login-input-pass2"   onChange={(event) => setusertemp({...usertemp,pass:event.target.value})}></input>
                        <input type="password" placeholder="Nh????p la??i m????t kh????u m????i"class="login-input-pass2"   onChange={(event) => setconfirm(event.target.value)}></input>
                        <button className="button reqpass-pass2-button" onClick={(e)=>handleClickReqPass2(e)}>Xa??c nh????n</button>
                        </div>
                    </div>
                </div>
                <div className={signup===true?"sign-up":"sign-up-hide"}>
                    <span className="header-login">
                        <h1 className="title-login">????ng ky?? ta??i khoa??n</h1>
                    </span>
                    <div className="sign-up-form">
                        <div>
                            <div className="firstname login-login">
                               
                                <input type="text" placeholder="Ho??" class="login-input" name="firstname"   onChange={(event) => setusertemp({...usertemp, firstname:event.target.value})}></input>
                            </div>
                            <div className="lastname login-login">
                                
                                <input type="text" placeholder="T??n" class="login-input" name="firstname"  onChange={(event) => setusertemp({...usertemp, lastname:event.target.value})}></input>
                            </div>
                            <div className="username login-login">
                                
                                <input type="email" placeholder="Email" className={flag===true?"login-input-warning":"login-input"}   name="username" onChange={(event) => setemail(event)}></input>
                            </div>
                            <div className="password login-login">
                               
                                <input type="password" placeholder="Nh????p m????t kh????u" class="login-input"  onChange={(event) => setusertemp({...usertemp, pass:event.target.value})}></input>
                            </div>
                            <div className="password2 login-login">
                                <input type="password" placeholder="Nh????p la??i m????t kh????u"  className={flag2===true?"login-input-warning":"login-input"} onChange={(event)=>setpass2(event)}></input>
                            </div>
                            <div className="sdt login-login">
                                
                                <input type="tel" placeholder="S???? ??i????n thoa??i"class="login-input" onChange={(event) => setusertemp({...usertemp, sdt:event.target.value})}></input>
                            </div>
                            <div className="address login-login">
                               
                                <input type="text" placeholder="??i??a chi??"class="login-input"  onChange={(event) => setusertemp({...usertemp, diachi:event.target.value})}></input>
                            </div>
                            <button className="button sign-up-button" onClick={(e)=>handleSignUp(e)}>????ng ky??</button>
                            <button className="button sign-up-button" onClick={(e)=>showLogin(e)}>Hu??y</button>
                        </div>
                    </div>
                </div>
            </div>
               
        )
}
