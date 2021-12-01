import axios from 'axios';
import React from 'react';
import { useState , useEffect , useRef } from 'react';
import './Customer.css';

export default function Customer() {
    const [customers, setCustomers] = useState([]);
    const saveCustomer = useRef(null);
    const [updateData, setUpdateData] = useState(false);
    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [active, setActive] = useState(false);
    const [customer, setCustomer] = useState({firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null});
    useEffect(() => {
        axios.get('https://localhost:44343/data/user/mode=CUSTOMER')
            .then(res => setCustomers(res.data))
            .catch(()=>setCustomers([]));
    }, [updateData]);
    const reLoad = () => {
        if(updateData===false) setUpdateData(true);
        else setUpdateData(false);
    }
    const resetCustomer = () => {
        saveCustomer.current = {id : null ,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null}
        setCustomer({id : null ,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null});
    }
    const addCustomer = () => {
        if(customer.id === null ){
            alert("Không có dữ liệu");
            return ;
        }
        axios.post('https://localhost:44343/data/user',customer).then((res) => {
                                                                    alert("Added");
                                                                    reLoad();
                                                                    resetCustomer();
                                                                })
                                                                .catch((err)=>alert("Thêm khách hàng thất bại ,kiểm tra dữ liệu"));
    }
    const repairCustomer = () => {
        if(customer.id === null ){
            alert("Chọn đối tượng cần sửa!");
            return ;
        }
        if(saveCustomer.current === customer) {
            alert("Không thay đổi");
            return;
        }
        axios.put('https://localhost:44343/data/user',customer).then(() => {
                                                                    alert("Saved");
                                                                    resetCustomer();
                                                                    reLoad();
                                                                })
                                                               .catch(()=>alert("Sửa thông tin thất bại"))
    }
    console.log(saveCustomer);
    console.log(customer);
    const deleteCustomer = () => {
        if(customer.id===null) {
            alert("Chọn đối tượng trước khi xóa");
            return ;
        }
        if(window.confirm("Xác nhận xóa ?")){
            axios.delete(`https://localhost:44343/data/user/${customer.id}`).then(() => {
                reLoad();
                resetCustomer();
                alert("Deleted");
            }).catch(()=>alert("Không thể xóa"));
        }
    }
    const searchCustomersByName = () => {
        if(name === null) {
            alert("Chưa nhập dữ liệu");
            return ;
        }
        axios.get(`https://localhost:44343/data/user/name=${name}`,null).then(res => {
            alert("lấy dữ liệu thành công");
            setCustomers(res.data);
            reLoad();
        }).catch((err) => {
            alert("Không tìm thấy khách hàng");
            console.log("getCustomersByName failed"+ err);
        });
    }
    const searchCustomerByID = () => {
        if(id === null) {
            alert("Chưa nhập dữ liệu");
            return ;
        }
        axios.get(`https://localhost:44343/data/user/${id}`,null).then(res => {
            alert("lấy dữ liệu thành công");
            setCustomer(res.data);
            saveCustomer.current = res.data;
            reLoad();
        }).catch((err) => {
            alert("Không tìm thấy khách hàng");
            console.log("getCustomersByID failed"+ err);
        });
    }
    const searchCustomerByEmail = () => {
        if(email === null) {
            alert("Chưa nhập dữ liệu");
            return ;
        }
        axios.get(`https://localhost:44343/data/user/email=${email}`,null).then(res => {
            alert("lấy dữ liệu thành công");
            setCustomer(res.data);
            saveCustomer.current = res.data;
            reLoad();
        }).catch((err) => {
            alert("Không tìm thấy khách hàng");
            console.log("getCustomerByEmail failed"+ err);
        });
    }
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
                            {customers.map((item,index)=>(
                                <tr className="customer-table-row customer-item"  key={index} 
                                onClick={()=>{
                                            if(item.id === customer.id){
                                                if(active === false){
                                                    saveCustomer.current = item;
                                                    setActive(true);
                                                }else{
                                                    resetCustomer();
                                                    setActive(false);
                                                }
                                            }else if(item.id !== customer.id){
                                                setCustomer(item);
                                                saveCustomer.current = item;
                                                setActive(true);
                                            }
                                        }}
                                style={customer !== null ? {
                                                                borderBottom : '0.1px solid rgb(228, 224, 224)',
                                                                color : item.id === customer.id ? '#596ce5' : '#5c5b5b',
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
                    <div className="customer-title">Thông tin khách hàng</div>
                    <div className="customer-inFor">
                        <div className="customer-inFor-item inFor-name">
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" >Họ</p>
                                    <input className="customer-input input-name" placeholder="" defaultValue={customer.firstname} onChange={(e)=>setCustomer({...customer,firstname : e.target.value.toString()})}/>
                                </div>
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" style={{paddingLeft : '10px'}}>tên</p>
                                    <input className="customer-input input-name" placeholder="" defaultValue={customer.lastname} onChange={(e)=>setCustomer({...customer,lastname : e.target.value.toString()})}/>
                                </div>
                        </div>
                        <div className="customer-inFor-item">
                            <p className="inFor-item-text">Email</p>
                            <input className="customer-input input-email" placeholder="" defaultValue={customer.email} onChange={(e)=>setCustomer({...customer,email : e.target.value.toString()})}/>
                        </div>
                        <div className="customer-inFor-item inFor-name">
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" >SĐT</p>
                                    <input className="customer-input input-name" placeholder=""  defaultValue={customer.sdt} onChange={(e)=>setCustomer({...customer,sdt : e.target.value.toString()})}/>
                                </div>
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" style={{paddingLeft : '10px'}}>Pass</p>
                                    <input className="customer-input input-name" placeholder="" defaultValue={customer.pass} onChange={(e)=>setCustomer({...customer,pass : e.target.value.toString()})}/>
                                </div>
                        </div>
                        <div className="customer-inFor-item">
                            <p className="inFor-item-text">Địa chỉ</p>
                            <input className="customer-input input-address" placeholder="" defaultValue={customer.diachi} onChange={(e)=>setCustomer({...customer,diachi : e.target.value.toString()})}/>
                        </div>
                    </div>
                    <div className="customer-search">
                        <input className="customer-input-search" type="text" placeholder="Tên khách hàng" defaultValue={name} onChange={(e) => setName(e.target.value.toString())}/>
                        <button className="customer-btn-search" onClick={() => searchCustomersByName()}>Search</button>
                    </div>
                    <div className="customer-search">
                        <input className="customer-input-search" type="text" placeholder="Mã" defaultValue={id} onChange={(e) => setId(e.target.value.toString())}/>
                        <button className="customer-btn-search" onClick={() => searchCustomerByID()} >Search</button>
                    </div>
                    <div className="customer-search">
                        <input className="customer-input-search" type="text" placeholder="Email" defaultValue={email} onChange={(e) => setEmail(e.target.value.toString())}/>
                        <button className="customer-btn-search" onClick={() => searchCustomerByEmail()}>Search</button>
                    </div>
                    <div className="customer-button-group">
                        <button className="customer-button cartDetail-customer" onClick={() => {}}>Xem đơn hàng</button>
                        <button className="customer-button delete-customer" onClick={() => deleteCustomer()}>Delete</button>
                        <button className="customer-button repair-customer" onClick={() => repairCustomer()}>Save</button>
                        <button className="customer-button add-customer" onClick={() => addCustomer()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
