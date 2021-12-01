import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import './Customer.css';
const renderCustomer=(customer,index)=>{
    return (
        <tr className="customer-table-row customer-item" key={index}>
                <td className="customer-table-cell">{customer.firstname+" "+customer.lastname}</td>
                <td className="customer-table-cell">{customer.email}</td>
                <td className="customer-table-cell">{customer.pass}</td>
                <td className="customer-table-cell">{customer.diachi}</td>
                <td className="customer-table-cell">{customer.sdt}</td>
        </tr>
    )
}
export default function Customer() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:44343/data/user/mode=CUSTOMER')
            .then(res => setCustomers(res.data))
            .catch(()=>setCustomers([]));
    }, [])
    
    return (
        <div className="admin-customer">
            <div className="customer-panel">
                <div className="customer-panel-main">
                    <table className="customer-table">
                        <thead className="customer-table-head">
                            <tr className="customer-table-row">
                                <th className="customer-table-cell cell-name">Họ Tên</th>
                                <th className="customer-table-cell cell-email">Email</th>
                                <th className="customer-table-cell cell-pass">Mật khẩu</th>
                                <th className="customer-table-cell cell-address">Địa chỉ</th>
                                <th className="customer-table-cell cell-phone">Số điện thoại</th>
                            </tr>
                        </thead>
                        <tbody className="customer-table-body">
                            {customers.map((customer,index)=>renderCustomer(customer,index))}
                        </tbody>
                    </table>
                </div>
                <div className="customer-panel-flatForm">
                    <div className="customer-title">Thông tin khách hàng</div>
                    <div className="customer-inFor">
                        <div className="customer-inFor-item inFor-name">
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" >Họ</p>
                                    <input className="customer-input input-name" placeholder=""/>
                                </div>
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" style={{paddingLeft : '10px'}}>tên</p>
                                    <input className="customer-input input-name" placeholder=""/>
                                </div>
                        </div>
                        <div className="customer-inFor-item">
                            <p className="inFor-item-text">Email</p>
                            <input className="customer-input input-email" placeholder=""/>
                        </div>
                        <div className="customer-inFor-item inFor-name">
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" >SĐT</p>
                                    <input className="customer-input input-name" placeholder=""/>
                                </div>
                                <div className="inFor-name-item">
                                    <p className="inFor-item-text" style={{paddingLeft : '10px'}}>Pass</p>
                                    <input className="customer-input input-name" placeholder=""/>
                                </div>
                        </div>
                        <div className="customer-inFor-item">
                            <p className="inFor-item-text">Địa chỉ</p>
                            <input className="customer-input input-address" placeholder=""/>
                        </div>
                    </div>
                    <div className="customer-search">
                        <input className="customer-input-search" type="text" placeholder="Tên khách hàng" />
                        <button className="customer-btn-search">Search</button>
                    </div>
                    <div className="customer-search">
                        <input className="customer-input-search" type="text" placeholder="Mã" />
                        <button className="customer-btn-search">Search</button>
                    </div>
                    <div className="customer-search">
                        <input className="customer-input-search" type="text" placeholder="Email" />
                        <button className="customer-btn-search">Search</button>
                    </div>
                    <div className="customer-button-group">
                        <button className="customer-button repair-customer">Save</button>
                        <button className="customer-button add-customer">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
