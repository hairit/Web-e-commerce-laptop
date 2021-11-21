import React from 'react'
import {useState} from 'react'
import '../../CSS/Login2.css'
const checkEmail =(email) => {
    if(!email.include('@')) return  false;
    return true;
}
export default function Login2() {
    const [account, setAccount] = useState({email :'',pass :''})
    const [status, setStatus] = useState(true);
    const handleSubmitLogin = (e) =>{
        e.preventDefault();
    }
    const handleSubmitSignUp = (e) => {

    }
    return (
        <div className="login">
            <div className={status === true ? "login-page" : "login-page-disable"}>
            <div className="login-panel">
                <form className="login-form" onSubmit={(e) => handleSubmitLogin(e)}>
                    <div className="login-form-item">
                         <p className="login-title">Đăng nhập</p>
                    </div>
                    <div className="login-form-item">
                        <input className="login-input" placeholder="Email" type="text" />
                    </div>
                    <div className="login-form-item">
                        <input className="login-input" placeholder="Mật khẩu" type="text" />
                    </div>
                    <div className="login-form-item restore-account">
                        <div className="forget-password" onClick={()=>{}}>Quên mật khẩu ?</div>
                        <div className="save-account">
                            <p>Lưu đăng nhập</p>
                            <input type="checkbox" id="save-account-checkbox" />
                        </div>
                    </div>
                    <div className="login-form-item">
                        <button className="button-login" type="submit">Login</button> 
                    </div>
                    <div className="login-form-item change-signup-item">
                        <p>Chưa có tài khoản?</p>
                        <div className="button-change-signup" onClick={() => status === true ? setStatus(false) : setStatus(true)}>Đăng ký</div> 
                    </div>
                         <p>hoặc</p>
                    <div className="login-form-item button-group-login">
                        <button className="button-login button-login-google" type="submit">Google</button> 
                        <button className="button-login button-login-facebook" type="submit">Facebook</button> 
                    </div>
                </form>
            </div>
            </div>
            <div className={status === true ? "signup-page" : "signup-page-enable"}>
                <div className="signup-panel">
                    <form className="signup-form"> 
                        <div className="signup-form-item">
                            <p className="signup-title">Tạo tài khoản</p>    
                        </div>
                        <div className="signup-form-item">
                            <div className="signup-form-name-group">
                                <input type="text" className="signup-form-input first-name-input" placeholder="Họ"/>
                                <input type="text" className="signup-form-input last-name-input" placeholder="Tên"/>
                            </div>
                        </div>
                        <div className="signup-form-item">
                            <p className="label-title">Email</p>
                            <input type="text" className="signup-form-input" placeholder="vd : abc@gmail.com" />
                        </div>
                        <div className="signup-form-item">
                            <p className="label-title">Password</p>
                            <input type="text" className="signup-form-input" placeholder="vd : A1234567" />
                        </div>
                        <div className="signup-form-item">
                            <p className="label-title">Số điện thoại</p>
                            <input type="text" className="signup-form-input" placeholder="vd: 0123456789" />
                        </div>
                        <div className="signup-form-item">
                            <button className="button-submit-signup">Đăng ký</button>
                        </div>
                        <div className="signup-form-item change-login-item">
                            <p>Bạn đẵ có tài khoản</p>
                        <div className="button-change-login" onClick={() => status === true ? setStatus(false) : setStatus(true)}>Đăng nhập</div> 
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
