import React from 'react'
import { useState , useRef } from 'react';
import {MdPublishedWithChanges} from 'react-icons/md';
import {GiAutoRepair} from 'react-icons/gi';
import {RiLogoutBoxFill} from 'react-icons/ri';
export default function UserPanel({user , changeStatusPanelUser , userPanel ,setUser}) {  
    const saveUser = useRef(user);
    const [statusEdit, setStatusEdit] = useState(false);
    const [userChange, setUserChange] = useState(user);
    const turnOffUserPanel = () => {
        setStatusEdit(false);
        setUserChange(saveUser.current);
        changeStatusPanelUser();
    }
    const changePassWord = () => {
        
    }
    console.log(userChange);
    return (
        <>
            <div className={userPanel === false ? "cover-panel-hide" : "cover-panel"} onClick={()=> turnOffUserPanel()} ></div>
            <div className={userPanel === false ? "user-panel-hide" : "user-panel"} >
                <p className="user-panel-title">Thông tin tài khoản</p>
                <div className="name-panel">
                    <div className="name-panel-item">
                            <p className="user-label">Họ</p>
                            {statusEdit === false ? <input className="user-input firstName-user" readOnly value={user.firstname}/> 
                                                  : <input className="user-input firstName-user user-input-active" placeholder={user.firstname}
                                                                                                                   onChange={(e)=>setUserChange({...userChange, lastname : e.target.value.toString() })}/>}
                    </div>
                    <div className="name-panel-item">
                            <p className="user-label">Tên</p>
                            {statusEdit === false ? <input className="user-input lastName-user" readOnly value={user.lastname}/> 
                                                  : <input className="user-input lastName-user user-input-active" placeholder={user.lastname}
                                                                                                                  onChange={(e)=>setUserChange({...userChange, firstname : e.target.value.toString() })}/>}
                    </div>
                </div>
                <div className="infor-panel">
                                     <p className="infor-panel-text">Địa chỉ</p>
                                     {statusEdit === false ? <input className="user-input user-address " readOnly value={user.diachi}/> : <input className="user-input user-address user-input-active" placeholder={user.diachi} 
                                                                                                                                                                                                       onChange={(e)=>setUserChange({...userChange, diachi : e.target.value.toString() })}  />} 
                </div>
                <div className="infor-panel">
                                     <p className="infor-panel-text">Số điện thoại</p>
                                     {statusEdit === false ? <input className="user-input user-phoneNumber" readOnly value={user.sdt}/> : <input className="user-input user-phoneNumber user-input-active" placeholder={user.sdt} 
                                                                                                                                                                                                           onChange={(e)=>setUserChange({...userChange, sdt : e.target.value.toString() })} />} 
                </div>
                <div className="user-buttons">
                    <button className="user-button" onClick={()=>changePassWord()}><MdPublishedWithChanges className="user-button-icon" /><p>Đổi mật khẩu</p></button>
                    {
                        statusEdit === false ? <button className="user-button" onClick={()=>setStatusEdit(true)}><GiAutoRepair className="user-button-icon"/> <p>Sửa thông tin</p></button>
                        : <button className="user-button" onClick={()=>setStatusEdit(false)}><GiAutoRepair className="user-button-icon" /><p>Lưu thông tin</p></button>
                    }
                    <button className="user-button"><RiLogoutBoxFill className="user-button-icon" /><p>Đăng xuất</p></button>
                </div>
            </div>
        </>
    )
}
