import React from 'react'
import { useEffect, useState } from "react";
import Solver from "../Classes/Solver";
import axios from 'axios';


export default function DetailBill({item, index}) {
    const solver = new Solver();
    const [itemPro, setItemPro] = useState([])
  
    useEffect(() => {
        axios.get(`https://localhost:44343/data/product/${item.idProduct}`,null)
        .then((res) => setItemPro(res.data))
        .catch((err) =>console.error("Del mua ma doi co bill",err))
    },[])
    return (
        <div>
            <td className="info-proDetail" key={index}>
                <td className="info-productInBill">{itemPro.ten}</td>
                <td className="info-productInBill">Số lượng: {item.soluong}</td>
                <td className="info-productInBill bill-thanhtien">Thành tiền: {solver.formatCurrency("vi-VN","currency","VND",item.tongtien)}</td>
            </td>
        </div>
    )
}
