import React from 'react';
import './User.css'
import axios from 'axios';
import { useState , useEffect , useRef } from 'react';
export default function User() {
    const [users, setUsers] = useState([]);
    const saveUser = useRef(null);
    const [updateData, setUpdateData] = useState(false);
    const [value, setValue] = useState(null)
    const [modeSearch, setModeSearch] = useState('html');
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({id : null ,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null,mode : null});
    useEffect(() => {
        axios.get('https://localhost:44343/data/user/')
            .then(res => setUsers(res.data))
            .catch(()=>setUsers([]));
    }, [updateData]);
    const reLoad = () => {
        if(updateData===false) setUpdateData(true);
        else setUpdateData(false);
    }
    const resetUser = () => {
        saveUser.current = {id : null ,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null,mode : null}
        setUser({id : null ,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null,mode : null});
    }
    const addUser = () => {
        if(user.id === null ){
            alert("Không có dữ liệu");
            return ;
        }
        axios.post('https://localhost:44343/data/user',user).then(() => {
                                                                    alert("Added");
                                                                    reLoad();
                                                                    resetUser();
                                                                })
                                                                .catch((err)=>alert("Thêm Người dùng thất bại ,kiểm tra dữ liệu"));
    }
    const repairUser = () => {
        if(user.id === null ){
            alert("Chọn đối tượng cần sửa!");
            return ;
        }
        if(saveUser.current === user) {
            alert("Không thay đổi");
            return;
        }
        axios.put('https://localhost:44343/data/user',user).then(() => {
                                                                    alert("Saved");
                                                                    resetUser();
                                                                    reLoad();
                                                                })
                                                               .catch(()=>alert("Sửa thông tin thất bại"))
    }
    console.log(modeSearch);
    const deleteUser = () => {
        if(user.id===null){
            alert("Chọn đối tượng trước khi xóa");
            return ;
        }
        if(window.confirm("Xác nhận xóa ?")){
            axios.delete(`https://localhost:44343/data/user/${user.id}`).then(() => {
                reLoad();
                resetUser();
                alert("Deleted");
            }).catch(()=>alert("Không thể xóa"));
        }
    }
    const searchUser = (mode,value) => {
        console.log(mode);
        if(value === null) {
            alert("Chưa nhập dữ liệu");
            return ;
        }
        if(mode === 'id'){
            axios.get(`https://localhost:44343/data/user/${value}`,null).then(res => {
                alert("lấy dữ liệu thành công");
                setUser(res.data);
                reLoad();
            }).catch((err) => {
                alert("Không tìm thấy người dùng");
                console.log("getCustomersByName failed"+ err);
            });
        }
        if(mode === 'email'){
            console.log('email');
            axios.get(`https://localhost:44343/data/user/email=${value}`,null).then(res => {
                alert("lấy dữ liệu thành công");
                setUser(res.data);
                reLoad();
            }).catch((err) => {
                alert("Không tìm thấy người dùng");
                console.log("getCustomersByName failed"+ err);
            });
        }
        if(mode === 'sdt'){
            axios.get(`https://localhost:44343/data/user/sdt=${value}`,null).then(res => {
                alert("lấy dữ liệu thành công");
                setUsers(res.data);
            }).catch((err) => {
                alert("Không tìm thấy người dùng");
                console.log("getCustomersByName failed"+ err);
            });
        }
        if(mode === 'name'){
            axios.get(`https://localhost:44343/data/user/name=${value}`,null).then(res => {
                alert("lấy dữ liệu thành công");
                setUsers(res.data);
            }).catch((err) => {
                alert("Không tìm thấy người dùng");
                console.log("getCustomersByName failed"+ err);
            });
        }
        
    }
    console.log(user.mode);
    return (
        <div className="admin-customer">
            <div className="customer-panel">
                <div className="customer-panel-main">
                    <table className="customer-table">
                        <thead className="customer-table-head">
                            <tr className="customer-table-row">
                                <th className="customer-table-cell cell-id">Mã</th>
                                <th className="customer-table-cell cell-name">Họ Tên</th>
                                <th className="customer-table-cell cell-email">Email</th>
                                <th className="customer-table-cell cell-pass">Mật khẩu</th>
                                <th className="customer-table-cell cell-address">Địa chỉ</th>
                                <th className="customer-table-cell cell-phone">Số điện thoại</th>
                            </tr>
                        </thead>
                        <tbody className="customer-table-body">
                            {users.map((item,index)=>(
                                <tr className="customer-table-row customer-item"  key={index} 
                                onClick={()=>{
                                            if(item.id === user.id){
                                                if(active === false){
                                                    saveUser.current = item;
                                                    setActive(true);
                                                }else{
                                                    resetUser();
                                                    setActive(false);
                                                }
                                            }else if(item.id !== user.id){
                                                setUser(item);
                                                saveUser.current = item;
                                                setActive(true);
                                            }
                                        }}
                                style={user !== null ? {
                                                                borderBottom : '0.1px solid rgb(228, 224, 224)',
                                                                color : item.id === user.id ? '#596ce5' : '#5c5b5b',
                                                            }
                                                         : {borderBottom : '0.1px solid rgb(228, 224, 224)'}}>
                                    <td className="customer-table-cell">{item.id}</td>
                                    <td className="customer-table-cell">{item.firstname+" "+item.lastname}</td>
                                    <td className="customer-table-cell">{item.email}</td>
                                    <td className="customer-table-cell">{item.pass}</td>
                                    <td className="customer-table-cell">{item.diachi}</td>
                                    <td className="customer-table-cell">{item.sdt}</td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="customer-panel-flatForm">
                    <div className="customer-title">Thông tin người dùng</div>
                    <div className="customer-inFor-item inFor-avatar">
                    <img className="user-avatar" src={ user.nameimage !== null ? 
                                             `https://localhost:44343/Images/UserAvatar/${user.nameimage}`
                                            :`https://localhost:44343/Images/UserAvatar/NullAvatar.png`
                                             } alt={user.nameimage}/>
                                {user.id !== null ? <p className="name-user">{user.firstname+" "+user.lastname}</p> : <p className="name-user">Chưa xác định</p>}
                    </div>
                    <div className="customer-inFor">
                        <div className="customer-inFor-item inFor-name">
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" >Họ</p>
                                    <input className="customer-input input-name" placeholder="" defaultValue={user.firstname} onChange={(e)=>setUser({...user,firstname : e.target.value.toString()})}/>
                                </div>
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" style={{paddingLeft : '10px'}}>tên</p>
                                    <input className="customer-input input-name" placeholder="" defaultValue={user.lastname} onChange={(e)=>setUser({...user,lastname : e.target.value.toString()})}/>
                                </div>
                        </div>
                        <div className="customer-inFor-item">
                            <p className="inFor-item-text">Email</p>
                            <input className="customer-input input-email" placeholder="" defaultValue={user.email} onChange={(e)=>setUser({...user,email : e.target.value.toString()})}/>
                        </div>
                        <div className="customer-inFor-item inFor-name">
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" >SĐT</p>
                                    <input className="customer-input input-name" placeholder=""  defaultValue={user.sdt} onChange={(e)=>setUser({...user,sdt : e.target.value.toString()})}/>
                                </div>
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" style={{paddingLeft : '10px'}}>Pass</p>
                                    <input className="customer-input input-name" placeholder="" defaultValue={user.pass} onChange={(e)=>setUser({...user,pass : e.target.value.toString()})}/>
                                </div>
                        </div>
                        <div className="customer-inFor-item">
                            <p className="inFor-item-text">Địa chỉ</p>
                            <input className="customer-input input-address" placeholder="" defaultValue={user.diachi} onChange={(e)=>setUser({...user,diachi : e.target.value.toString()})}/>
                        </div>
                        <div className="customer-inFor-item inFor-mode">
                            <p className="inFor-item-text">Chức vụ</p>
                            <select className="select-mode-user" value={user.mode} onChange={(e)=>setUser({...user,mode : e.target.value.toString()})}>
                                <option value="ADMIN">Admin</option>
                                <option value="STAFF">Staff</option>
                                <option value="CUSTOMER">Customer</option>
                            </select>
                        </div>
                        <div className="customer-inFor-item customer-image-upload">
                        </div>
                    </div>
                    <div className="customer-button-group">
                    <div className="customer-button customer-search">
                        <select  value={modeSearch} className="select-mode-search" onChange={(e) => setModeSearch(e.target.value.toString())}>
                            <option value="email">Email</option>
                            <option value="sdt">SĐT</option>
                            <option value="name">Tên</option>
                            <option value="id">ID</option>
                        </select>
                        <input className="customer-input-search" type="text" placeholder="value" defaultValue={value} onChange={(e) => setValue(e.target.value.toString())}/>
                        <button className="customer-btn-search" onClick={() =>searchUser(modeSearch,value)}>Search</button>
                    </div>
                        <button className="customer-button delete-customer" onClick={() => deleteUser()}>Delete</button>
                        <button className="customer-button repair-customer" onClick={() => repairUser()}>Save</button>
                        <button className="customer-button add-customer" onClick={() => addUser()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
