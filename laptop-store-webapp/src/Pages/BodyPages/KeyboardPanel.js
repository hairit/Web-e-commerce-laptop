import React from 'react'
import '../../CSS/KeyboardPanel.css'
import CALLER from '../../API/CALL';
import {useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import URL from '../../DATA/URL';
import Solver from '../../Classes/Solver';
const solver = new Solver();
const renderKeyboardItem = (pro,index) => {
    return (
        <div className="col-10 c-10-2 keyboard-Item" key={index}>
            <NavLink className="keyboard-infor" to={`/`}>
                <div className="keyboard-image">
                    <img className="keyboard-image-img" src={URL+`/Images/Products/${pro.nameimage}`} alt={pro.nameimage} />
                </div>
                <div className="keyboard-detail">
                    <div className="keyboard-detail-item keyboard-id">
                    Mã SP: {pro.id}
                    </div>
                    <NavLink to="" className="keyboard-detail-item keyboard-name">
                        {pro.ten}
                    </NavLink>
                    <div className="keyboard-detail-item keyboard-price">
                            <div className="">Giảm 5%</div>
                            <div className="laptop-price-value">{solver.formatCurrency("vi-VN",'currency','VND',pro.gia)}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
export default function KeyboardPanel() {
    const [pros, setPros] = useState([]);
    useEffect(() => {
        CALLER('GET','data/product/type=keyboard/enable',null)
            .then(res => setPros(res.data)).catch(err => alert("Errol when try to get keyboard"));
    }, [])
    return (
        <div className="keyboard-panel">
            <div className="keyboard-panel-header">
                <div className="keyboard-panel-header-logo">
                        <p>Bàn phím cơ</p>    
                </div>
            </div>
            <div className="container10Col keyboard-container">
                <div className="row-10">
                    {
                        pros.map((pro,index) => renderKeyboardItem(pro,index))
                    }
                </div>
            </div>
        </div>
    )
}
