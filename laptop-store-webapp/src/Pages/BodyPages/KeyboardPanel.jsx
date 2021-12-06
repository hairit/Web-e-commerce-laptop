import React from 'react'
import '../../CSS/KeyboardPanel.css'
import call from '../../API/API';
import {useState , useEffect} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import URL from '../../DATA/URL';
import Solver from '../../Classes/Solver';
const solver = new Solver();
const renderKeyboardItem = (pro,index,addCart,history) => {
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
                            <p className="old-price">{solver.formatCurrency("vi-VN",'currency','VND',pro.giacu)}</p>
                            <div className="keyboard-price-value">{solver.formatCurrency("vi-VN",'currency','VND',pro.gia)}</div>
                    </div>
                    <div className="keyboard-gift">{pro.uudai}</div>
                    <div className="keyboard-button-group">
                        <button className="keyboard-button keyboard-button-buy" onClick={()=>{
                            addCart(pro.id,pro.gia);
                            history.push('/cart');
                        }}>Mua ngay</button>
                        <button className="keyboard-button keyboard-button-add" onClick={()=>addCart(pro.id,pro.gia)}>Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function KeyboardPanel({addCart}) {
    const history = useHistory();
    const [pros, setPros] = useState([]);
    useEffect(() => {
        call('GET','data/product/type=keyboard/enable',null)
            .then(res => setPros(res.data)).catch(err => console.log("Errol when try to get keyboard"));
    }, [])
    return(
        <div className="keyboard-panel">
            <div className="keyboard-panel-header">
                <div className="keyboard-panel-header-logo">
                        <p>Bàn phím cơ</p>    
                </div>
            </div>
            <div className="container10Col wide keyboard-container wide">
                <div className="row-10-no-margin keyboard-row">
                    {pros.map((pro,index) => renderKeyboardItem(pro,index,addCart,history))}
                </div>
            </div>
        </div>
    )
}