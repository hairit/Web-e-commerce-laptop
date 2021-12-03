import React from 'react';
import './BillsCustomer.css';
import {useState , useEffect} from 'react' ;
import axios from 'axios';
export default function BillsCustomer({match}) {
    const [bills, setBills] = useState([]);
    const [bill, setBill] = useState(null);
    const [active, setActive] = useState(false);
    const [updateData, setUpdateData] = useState(false);
    useEffect(() => {
        axios.get(`https://localhost:44343/data/bill/iduser=${match.match.params.idCustomer}`)
                .then(res => setBills(res.data))
                .catch((err)=>{
                    setBills([]);
                    console.log("BillsCustomers :" +err);
                })
    }, [])
    const reLoad = () => {
        if(updateData === false) setUpdateData(true);
        else setUpdateData(false);
    }
    const acceptBill = () => {
        if(bill.tinhtrang === "Đã duyệt"){
            alert("Đơn hàng đã xác nhận");
            return;
        }
        axios.get(`https://localhost:44343/data/bill/action=accept/${bill.id}`,null)
            .then((res) => {
                setBill(res.data);
                reLoad();
                alert("Đã xác nhận");
            })
            .catch((err)=>{
                alert("Không thể xác nhận đơn hàng");
                console.log("accept bill errol :"+err);
            })
    }
    const cancelBill = () => {
        axios.get(`https://localhost:44343/data/bill/action=cancel/${bill.id}`,null)
            .then((res) => {
                reLoad();
                alert("Hủy xác nhận thành công");
            })
            .catch((err)=>{
                alert("Xóa đơn hàng thất bại");
                console.log("accept bill errol :"+err);
            })
    }
    return(
        <div className="bills-customer">
            <div className="panel-bills">
                <div className="panel-bills-table">
                <table className="table-bills">
                    <thead className="table-bills-head"> 
                        <tr className="table-bills-row">
                             <th className="table-bills-cell">Mã đơn</th>
                             <th className="table-bills-cell">Tổng tiền</th>
                             <th className="table-bills-cell">Địa chỉ nhận</th>
                             <th className="table-bills-cell">Tình trạng</th>
                        </tr>
                    </thead>
                    <tbody className="table-bills-body">
                        {
                            bills.map((item,index)=>(
                                <tr className="table-bills-row" key={index} onClick={() => {
                                                                                    if(bill) {
                                                                                        if(bill.id === item.id){
                                                                                            if(active == false){
                                                                                                setBill(item);
                                                                                                setActive(true);
                                                                                            }else {
                                                                                                setBill(null);
                                                                                                setActive(false);
                                                                                            }
                                                                                        }else {
                                                                                            setBill(item);
                                                                                            setActive(true);
                                                                                        }
                                                                                    }else {
                                                                                        setBill(item);
                                                                                        setActive(true);
                                                                                    }
                                                                                }}
                                                                                style={{backgroundColor : bill ? item.id === bill.id ? '#f3f1f1' : '#FFFFFF' : '#FFFFFF'}}    
                                                                                >
                                                                            
                                    <td className="table-bills-cell">{item.id}</td>
                                    <td className="table-bills-cell">{item.tongtien}</td>
                                    <td className="table-bills-cell">{item.diachinhan}</td>
                                    <td className="table-bills-cell" style={{color : item.tinhtrang === "Chờ xác nhận" ? 'rgb(216, 18, 18)' : '#596ce5'}}>{item.tinhtrang}</td>
                                </tr>
                            ))
                        }  
                    </tbody>
                </table>
                </div>
                <div className="panel-bills-inFor">
                    <div className="panel-bills-inFor-form">
                        <div className="bill-title">Thông tin hóa đơn</div>
                        <div className="bill-inFor-item inFor-customer-title"><p>Thông tin người nhận</p></div>
                        <div className="inFor-customer-bill">
                            <div className="inFor-customer-bill-item"><p style={{width : '35%'}}>Tên người nhận :</p><p>{bill?
                                bill.iduserNavigation.firstname+" "+bill.iduserNavigation.lastname
                                : ""
                                }</p>
                            </div>
                            <div className="inFor-customer-bill-item"><p style={{width : '35%'}}>Email :</p><p>{bill?
                                bill.iduserNavigation.email
                                : ""
                                }</p>
                            </div>
                            <div className="inFor-customer-bill-item"><p style={{width : '35%'}}>Số điện thoại :</p><p>{bill?
                                bill.iduserNavigation.sdt
                                : ""
                                }</p>
                            </div>
                               
                        </div>
                        <div className="bill-inFor-item inFor-customer-title"><p>Thông tin giao hàng</p></div>
                        <div className="bill-inFor-item"><p>Ngày đặt : </p> <p>{bill? bill.ngaydat : ''}</p></div>
                        <div className="bill-inFor-item"><p>Địa chỉ giao hàng : </p><p>{bill? bill.diachinhan : ''}</p></div>
                        <div className="bill-inFor-item"><p>Phương thức thanh toán : </p><p>{bill  ? bill.phuongthucthanhtoan : ''}</p></div>
                        <div className="bill-inFor-item"><p>Tình trạng : </p><p>{bill ? <p style={{color : bill.tinhtrang === "Chờ xác nhận" ? 'red' : bill.tinhtrang === "Đã duyệt" ? '#596ce5' : ''}}> {bill.tinhtrang}</p> : ""}</p></div>
                        <div className="bill-inFor-button-group">
                                {bill? <>
                                <button className="bill-button accept-bill" onClick={()=>{acceptBill()}}>Xác nhận</button>
                                <button className="bill-button cancel-bill" onClick={()=>{cancelBill()}}>Hủy xác nhận</button>
                                </> :
                                <>
                                <button className="bill-button accept-bill" onClick={()=>{}}>Xác nhận</button>
                                <button className="bill-button cancel-bill" onClick={()=>{}}>Hủy xác nhận</button>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel-billDetails"></div>
        </div>
    )
}
