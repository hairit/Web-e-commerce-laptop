import React from 'react'
import Bill from "../CSS/Bill.css"
import bill from "../Images/bill.png"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function DonHang({idUser}) {
    const [infobill, setInfobill] = useState([])
    useEffect(() => {
        axios.get(`https://localhost:44343/data/bill/iduser=${idUser}`,null)
        .then((res) => setInfobill(res.data))
        .catch((err) =>console.error("Del mua ma doi co bill",err))
    },[])
    console.log("dadada",infobill)

   
function BillDetail(bill){
    bill.map((billdt,index) => {
        return (
        <td key={index}>
                <td>{billdt.idProduct}
                </td>
                <td>
                </td>
        </td>
        )
    } )}
    return (
        <div className="wrapper billInfo">
            <div className="container-bill">
                <div className="Bill">
                    <div className="title-bill">
                        <img src={bill} />
                        <p>Quản lý đơn hàng</p>
                    </div>
                        <div className="centerTitle-bill">
                        {/* <div className="idorder">
                            <div className="title-donhang">Mã sản phẩm</div>
                        </div>
                        <div className="productOrder">
                            <div className="title-donhang">Sản phẩm</div>
                        </div>
                        <div className="Totalprice">
                            <div className="title-donhang">Tổng tiền</div>
                        </div>
                        <div className="note">
                            <div className="title-donhang">Ghi chú</div>
                        </div>
                        <div className="status">
                            <div className="title-donhang">Trạng thái</div>
                        </div> */}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="col row-idOrder">Mã đơn hàng</th>
                                    <th className="col row-pro">Sản phẩm</th>
                                    <th className="col row-sltt">Số lượng</th>
                                    <th className="col row-sltt">Tổng tiền</th>
                                    <th className="col row-note">Ghi chú</th>
                                    <th className="col row-bill">Trạng thái</th>
                                </tr>
                            </thead>
                            {infobill.map((bills,index) =>{
                                
                                return (
                                    <tbody key={index}>
                                    <tr className="info-bill">
                                        <th className="row ">{bills.id}</th>
                                        
                                        {BillDetail(bills)}
                                        
                                        <td>2</td>
                                        <td>80990000</td>
                                        <td></td>
                                        <td>{bills.tinhtrang}</td>
                                    </tr>
                                    {/* <tr className="info-bill">
                                        <th className="row">2</th>
                                        <td>Tai nghe</td>
                                        <td>1</td>
                                        <td>126000</td>
                                        <td></td>
                                        <td>Đang xử lý</td>
                                    </tr>
                                    <tr className="info-bill">
                                        <th className="row">3</th>
                                        <td>Điện thoại</td>
                                        <td>3</td>
                                        <td>123050000</td>
                                        <td></td>
                                        <td>Đang xử lý</td>
                                    </tr> */}
                                    
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
