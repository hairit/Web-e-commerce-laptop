import React from 'react'
import Bill from "../CSS/Bill.css"
import bill from "../Images/bill.png"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function DonHang({idUser}) {
    const [bills, setBills] = useState([])
    useEffect(() => {
        axios.get(`https://localhost:44343/data/bill/iduser=${idUser}`,null)
        .then((res) => setBills(res.data))
        .catch((err) =>console.error("Del mua ma doi co bill",err))
    },[])
    console.log("dadada",bills);

    return (
        <div className="wrapper billInfo">
            <div className="container-bill">
                <div className="Bill">
                    <div className="title-bill">
                        <img src={bill} />
                        <p>Quản lý đơn hàng</p>
                    </div>
                        <div className="centerTitle-bill">
                      
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="col row-idOrder">Mã đơn hàng</th>
                                    <th className="col row-pro">Sản phẩm</th>
                                    <th className="col row-sltt">Tổng tiền</th>
                                    <th className="col row-sltt">Ngày đặt</th>
                                    <th className="col row-address">Địa chỉ</th>
                                    <th className="col row-bill">Trạng thái</th>
                                </tr>
                            </thead>
                            {bills.map((bill,index) =>{
                                return (
                                    <tbody key={index}>
                                    <tr className="info-bill">
                                        <td className="row ">{bill.id}</td> 
                                        {bill.billDetails.map((data,index) => 
                                        <td className="info-proDetail">
                                            <td>{data.idProduct}</td>
                                            <td>{data.tongtien}</td>
                                        </td>
                                        )}
                                        <td>{bill.tongtien}</td>
                                        <td>{bill.ngaydat.split("T",1)}</td>
                                        <td>{bill.diachinhan}</td>
                                        <td>{bill.tinhtrang}</td>
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
