import React from 'react'
import {useState ,useEffect } from 'react'
import { NavLink , useHistory } from 'react-router-dom';
import '../../CSS/MousePanel.css'
import call from '../../API/API';
import Solver from '../../Classes/Solver';
import URL from '../../DATA/URL';
const renderMouseItem = (mouse,index,solver,history,addCart)=> {
    return (
        <div className="col-10 c-10-2 mouse-item" key={index}>
            <div className="mouse-infor">
                <div className="mouse-image">
                    <NavLink to={`mouse/${mouse.id}`}><img className="mouse-image-img" src={`${URL}/Images/Products/${mouse.nameimage}`} alt="mouse" /></NavLink>
                </div>
                <NavLink to={`mouse/${mouse.id}`}><div className="mouse-name">{mouse.ten}</div></NavLink>
                <div className="mouse-price">
                    <p className="mouse-price-value">{solver.formatCurrency("vi-VN", "currency", "VND", mouse.gia)}</p>
                    <p className="old-price">{solver.formatCurrency("vi-VN", "currency", "VND", mouse.giacu)}</p>
                </div>
                {mouse.uudai ?<div className="mouse-gift">{mouse.uudai}</div> : <div></div>}
                <div className="mouse-button-group">
                    <div className="mouse-button mouse-button-buy" onClick={()=>{
                            addCart(mouse.id,mouse.gia);
                    }}>Mua ngay</div>
                    <div className="mouse-button mouse-button-add" onClick={()=>addCart(mouse.id,mouse.gia)}>Thêm vào giỏ</div>
                </div>
            </div>
        </div>
    )
 }
export default function MousePanel({addCart}) {
    const history = useHistory();
    const [mouses  , setMouses] = useState([]);
    const solver = new Solver();
    useEffect(() => {
        call('GET','data/product/type=mouse/enable',null).then(res => setMouses(res.data))
                                                         .catch(() => {
                                                             setMouses([]);
                                                         })
    }, [])
    return (
        <div className="mouse-panel">
            <div className="mouse-panel-header"></div>
            <div className="mouse-panel-list-pro container10Col">
                <div className="row-10-no-margin">
                    {mouses.map((mouse,index)=>renderMouseItem(mouse,index,solver,history,addCart))}
                </div>
            </div>
        </div>
    )
}
