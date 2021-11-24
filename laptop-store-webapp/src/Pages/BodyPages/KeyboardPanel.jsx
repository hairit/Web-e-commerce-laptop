import React from 'react'
import '../../CSS/KeyboardPanel.css'
import call from '../../API/API';
import {useState , useEffect} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import URL from '../../DATA/URL';
import Solver from '../../Classes/Solver';
const solver = new Solver();
const renderKeyboardItem = (pro,index) => {
    return (
        <div className="col-10-no-padding c-10-2 keyboard-item" key={index}>
            <div className="keyboard-infor">
                <NavLink className="keyboard-image" to={`/keyboard/${pro.id}`}>
                    <img className="keyboard-image-img" src={URL+`/Images/Products/${pro.nameimage}`} alt={pro.nameimage} />
                </NavLink>
                <div className="keyboard-detail">
                    {/* <div className="keyboard-detail-item keyboard-id">
                    Mã SP: {pro.id}
                    </div> */}
                    <NavLink to={`/keyboard/${pro.id}`} className="keyboard-detail-item keyboard-name">
                        {pro.ten}
                    </NavLink>
                    <div className="keyboard-detail-item keyboard-price">
                            <div className="">Giảm 5%</div>
                            <div className="laptop-price-value">{solver.formatCurrency("vi-VN",'currency','VND',pro.gia)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function KeyboardPanel({addProductToCart}) {
    const history = useHistory();

    const [pros, setPros] = useState([]);
    useEffect(() => {
        call('GET','data/product/type=keyboard/enable',null)
            .then(res => setPros(res.data)).catch(err => console.log("Errol when try to get keyboard"));
    }, [])
    return (
        <div className="keyboard-panel">
            <div className="keyboard-panel-header">
                <div className="keyboard-panel-header-logo">
                        <p>Bàn phím cơ</p>    
                </div>
            </div>
            <div className="container10Col keyboard-container">
                <div className="row-10-no-margin keyboard-row">
                    {
                        pros.map((pro,index) => renderKeyboardItem(pro,index))
                    }
                </div>
            </div>
            <button className="btn-all-product" to="/keyboard" onClick={() => {history.push(`/keyboard`);}}>
            <p>Tất cả sản phẩm </p></button>
        </div>
    )
}
