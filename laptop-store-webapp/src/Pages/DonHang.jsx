import React from 'react'
import Bill from "../CSS/Bill.css"
import bill from "../Images/bill.png"
import { useEffect, useState } from "react";
import axios from 'axios';
import Solver from "../Classes/Solver";

export default function DonHang({idUser}) {
    const solver = new Solver();
    const [bills, setBills] = useState([])
  
    useEffect(() => {
        axios.get(`https://localhost:44343/data/bill/iduser=${idUser}`,null)
        .then((res) => setBills(res.data))
        .catch((err) =>console.error("Del mua ma doi co bill",err))
    },[])
    console.log(bills)
    return (
        <div className="wrapper billInfo">
            <div className="container-bill">
                <div className="Bill">
                    <div className="title-bill">
                        <img src={bill} />
                        <p>Quản lý đơn hàng</p>
                    </div>
                        <div className="centerTitle-bill">
                      
                        <table className="table table-hover table-bill">
                            <thead>
                                <tr className="title-bills">
                                    <th className="col cols row-idOrder">Mã đơn hàng</th>
                                    <th className="col cols row-pro">Sản phẩm</th>
                                    <th className="col cols row-sltt">Tổng tiền bill</th>
                                    <th className="col cols row-date">Ngày đặt</th>
                                    <th className="col cols row-address">Địa chỉ</th>
                                    <th className="col cols row-bill">Trạng thái</th>
                                </tr>
                            </thead>
                            {bills.map((bill,index) =>{
                                console.log(bill.diachi);
                                return (
                                    <tbody key={index}>
                                    <tr className="info-bill">
                                        <td className="id-bill">{bill.id}</td> 
                                        {bill.billDetails.map((data,index) => 
                                        <td className="info-proDetail" key={index}>
                                            <td className="info-productInBill">{data.idProductNavigation.ten}</td>
                                            <td className="info-productInBill">Số lượng: {data.soluong}</td>
                                            <td className="info-productInBill bill-thanhtien">Thành tiền: {solver.formatCurrency("vi-VN","currency","VND",data.tongtien)}</td>
                                        </td>
                                        )}
                                        <td className="info-productInBill bill-price" >{solver.formatCurrency("vi-VN","currency","VND",bill.tongtien)}</td>
                                        <td className="info-productInBill">{bill.ngaydat.split("T",1)}</td>
                                        <td className="info-productInBill">{bill.diachi}</td>
                                        <td className="info-productInBill">{bill.tinhtrang}</td>
                                    </tr>
                                </tbody>
                                )
                            })}
                           
                        </table>
                    </div>
                    {/* <div className="info-bill">
                        <div className="info-idPro">
                            <p>123156778adas</p>
                        </div>
                        <div className="info-Product">
                            <p>Laptop</p>
                        </div>
                        <div className="info-idPro"></div>
                        <div className="info-idPro"></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
