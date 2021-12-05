import axios from 'axios';
import React from 'react';
import { useState , useEffect , useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Customer.css';

export default function Customer({idUser}) {
    const [customers, setCustomers] = useState([]);
    const history = useHistory();
    const [updateData, setUpdateData] = useState(false);
    const [modeSearch, setModeSearch] = useState('name');
    const [value, setValue] = useState(null)
    const [active, setActive] = useState(false);
    const [customer, setCustomer] = useState({id : null,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null});
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
        //saveCustomer.current = {id : null ,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null}
        setCustomer({id : null ,firstname : null,lastname : null,email : null,pass :null,sdt : null,diachi : null,nameimage : null});
    }
    const searchCustomer = () => {
        if(!value || !modeSearch) {
            alert("Nhập dữ liệu");
        }
        if(modeSearch === 'id'){
            axios.get(`https://localhost:44343/data/user/customer/${modeSearch}=${value}`).then(res => setCustomers(res.data))
            .catch(()=>{
                setCustomers([]);
                alert("Không tìm thấy khách hàng")
            });
        }else{
            axios.get(`https://localhost:44343/data/user/customer/${modeSearch}=${value}`).then(res => setCustomers(res.data))
            .catch(()=>{
                setCustomers([]);
                alert("Không tìm thấy khách hàng")
            });
        }
    }
    return(
        <div className="admin-customer">
            <div className="customer-panel">
                <div className="customer-panel-main">
                    <table className="customer-table">
                        <thead className="customer-table-head">
                            <tr className="customer-table-row">
                                <th className="customer-table-cell cell-id">Mã</th>
                                <th className="customer-table-cell cell-name">Họ Tên</th>
                                <th className="customer-table-cell cell-phone">Số điện thoại</th>
                                <th className="customer-table-cell cell-address">Địa chỉ</th>
                                <th className="customer-table-cell cell-email">Email</th>
                                <th className="customer-table-cell cell-pass">Mật khẩu</th>
                                <th className="customer-table-cell cell-data">Data</th>
                            </tr>
                        </thead>
                        <tbody className="customer-table-body">
                            {customers.map((item,index)=>(
                                <tr className="customer-table-row customer-item"  key={index} 
                                onClick={()=>{
                                            if(item.id === customer.id){
                                                if(active === false){
                                                    //saveCustomer.current = item;
                                                    setActive(true);
                                                }else{
                                                    resetCustomer();
                                                    setActive(false);
                                                }
                                            }else if(item.id !== customer.id){
                                                setCustomer(item);
                                                //saveCustomer.current = item;
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
                                    <td className="customer-table-cell">{item.sdt}</td>
                                    <td className="customer-table-cell cell-td-address">{item.diachi}
                                            <div className="cell-address-content"><p>{item.diachi}</p></div>
                                    </td>
                                    <td className="customer-table-cell">{item.email}</td>
                                    <td className="customer-table-cell">{item.pass}</td>
                                    <td className="customer-table-cell"><button className="button-bills-customer" onClick={()=>{
                                                history.push(`/admin/${idUser}/bills/customer/${item.id}`);
                                    }}>Đơn hàng</button></td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="customer-panel-flatForm">
                    <div className="search-customer">
                        <select className="select-search-customer" defaultValue={modeSearch} onChange={(e)=> setModeSearch(e.target.value.toString())}>
                            <option value="name">Họ tên</option>
                            <option value="email">Email</option>
                            <option value="sdt">Số điện thoại</option>
                            <option value="id">Mã</option>
                        </select>
                        <input className="search-customer-input" placeholder="Tìm kiếm khách hàng" onChange={(e) => setValue(e.target.value.toString())} />
                        <button className="search-customer-button" onClick={()=>searchCustomer()}>Tìm kiếm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
