import React from 'react'
import { useState , useRef , useEffect } from 'react';
import {MdPublishedWithChanges} from 'react-icons/md';
import {GiAutoRepair} from 'react-icons/gi';
import call from '../API/API';
import {RiLogoutBoxFill} from 'react-icons/ri';
export default function UserPanel({user , changeStatusPanelUser , userPanel ,setUser ,logout}) {  
    const saveUser = useRef(user);
    const [statusEdit, setStatusEdit] = useState(true);
    const [passWordPanel, setPassWordPanel] = useState(false);
    useEffect(() => {
        saveUser.current = user;
        setStatusEdit(true);
        setUserChange(user);
    }, [])
    const [newPass, setNewPass] = useState({
        old : '',
        conFirm : ''
    })
    const [userChange, setUserChange] = useState(user);
    const turnOffUserPanel = () => {
        setStatusEdit(false);
        setUserChange(saveUser.current);
        changeStatusPanelUser();
    }
    const changeStatusAction = () => {
        if(passWordPanel === false) setPassWordPanel(true);
        else setPassWordPanel(false);
    }
    const changeUserData = (action) => {
        if(action === 'data'){
            call('PUT','data/user',userChange).then(res =>{
                alert("Saved");
                setUser(res.data);
           }).catch(() => setUser(saveUser))
           setStatusEdit(false);
        }else if(action === 'password'){
            if(newPass.old !== saveUser.current.pass){
                alert("Mật khẩu hiện tại không đúng");
                return;
            }
            else if(userChange.pass <= 8){
                alert("Mật khẩu mới ít nhất 8 ký tự");
                setUserChange(saveUser);
                return ;
            }
            else if(userChange.pass !== newPass.conFirm) {
                alert("Mật khẩu nhập lại không đúng");
                return;
            }
            else if(userChange.pass === saveUser.current.pass ){
                alert("Không thay đổi");
                return;
            }
            call('PUT','data/user',userChange).then(res =>{
                setUser(res.data);
                setStatusEdit(true)
                alert("Đổi mật khẩu thành công");
            }).catch(() => setUser(saveUser));
            changeStatusPanelUser();
        }
    }
    return (
        <>
            <div className={userPanel === false ? "cover-panel-hide" : "cover-panel"} onClick={()=> turnOffUserPanel()} ></div>
            <div className={userPanel === false ? "user-panel-hide" : "user-panel"} > 
                    <div className="edit-panel-active">
                        <p className="user-panel-title">Thông tin tài khoản</p>
                        <div className="name-panel">
                            <div className="name-panel-item">
                                    <p className="user-label">Họ</p>
                                    {statusEdit === false ? <input className="user-input firstName-user" readOnly value={user.lastname}/> 
                                                        : <input className="user-input firstName-user user-input-active" placeholder={user.lastname}
                                                                                                                        onChange={(e)=>setUserChange({...userChange, lastname : e.target.value.toString() })}/>}
                            </div>
                            <div className="name-panel-item">
                                    <p className="user-label">Tên</p>
                                    {statusEdit === false ? <input className="user-input lastName-user" readOnly value={user.firstname}/> 
                                                        : <input className="user-input lastName-user user-input-active" placeholder={user.firstname}
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
                        <button className="save-user-data-btn" onClick={()=>changeUserData('data')}>Lưu thay đổi</button>
                    </div>
                    <div className="change-pass-panel-active">
                            <p className="user-panel-title">Đổi mật khẩu</p>
                            <div className="change-pass-item">
                                <p className="change-pass-item-text">Mật khẩu hiện tại</p>""
                                {statusEdit === true ? <input className="user-input " readOnly value=""  /> : <input className="user-input user-input-active" required placeholder=""
                                                                                                                                                    onChange={(e) => setNewPass({...newPass , old : e.target.value.toString()})} />}
                            </div>
                            <div className="change-pass-item">
                                <p className="change-pass-item-text">Mật khẩu mới</p>"
                                {statusEdit === true ? <input className="user-input " readOnly value=""/> : <input className="user-input user-input-active" required placeholder=""
                                                                                                                                                    onChange={(e) => setUserChange({...userChange, pass : e.target.value.toString()})} />}
                            </div>
                            <div className="change-pass-item">
                                <p className="change-pass-item-text">Nhập lại mật khẩu mới</p>
                                {statusEdit === true ? <input className="user-input " readOnly value=""/> : <input className="user-input user-input-active"  required placeholder=""
                                                                                                                                                    onChange={(e) => setNewPass({...newPass ,conFirm : e.target.value.toString()})} />}
                            </div>
                            <button className="save-user-data-btn" onClick={()=>changeUserData('password')}>Lưu thay đổi</button>
                    </div>
                <div className="user-buttons">
                    <button className="user-button" onClick={()=>setStatusEdit(false)}><MdPublishedWithChanges className="user-button-icon" /><p>Đổi mật khẩu</p></button>
                    <button className="user-button" onClick={()=>setStatusEdit(true)}><GiAutoRepair className="user-button-icon"/> <p>Sửa thông tin</p></button>
                    <button className="user-button" onClick={() => {
                        changeStatusPanelUser();
                        logout();
                    }}><RiLogoutBoxFill className="user-button-icon" /><p>Đăng xuất</p></button>
                </div>
            </div>
        </>
    )
}
