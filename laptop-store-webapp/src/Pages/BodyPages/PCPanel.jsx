import React from 'react'
import { NavLink } from 'react-router-dom'
import call from '../../API/API'
import { useState , useEffect } from 'react';
import URL from '../../DATA/URL';
import Solver from '../../Classes/Solver';
import '../../CSS/PCPanel.css'
const solver= new Solver();
const renderComputerItem = (pc ,index , addCart) => {
    return (
        <NavLink to="/" className="Col-10 c-10-2 pc-item" key={index}>
            <div className="pc-infor">
                <div className="pc-image">
                    <NavLink to={`pc/${pc.id}`}><img className="pc-image-img" src={URL+`/Images/Products/${pc.nameimage}`} alt={pc.ten}/></NavLink>
                </div>
                    {/* <div className="pc-id">
                        {pc.id}
                    </div> */}
                    <NavLink to={`pc/${pc.id}`}><div className="pc-name">
                        {pc.ten}
                    </div></NavLink>
                    <div className="pc-price">
                        <p className="old-price">{solver.formatCurrency("vi-VN","currency",'VND',pc.giacu)}</p>
                        <p className="pc-price-value">{solver.formatCurrency("vi-VN","currency",'VND',pc.gia)}</p>
                    </div>
            </div>
        </NavLink>
    )
}

export default function PCPanel({addCart}) {
    const [pcs, setPcs] = useState([]);
    useEffect(() => {
        call('GET','data/product/type=pc/enable',null)
        .then(res => setPcs(res.data))
        .catch(() => console.log("Errol try to call pc (product) API"));
    }, [])
    return(
        <div className="panel-pc">
            <div className="container10Col pc-container wide">
                <div className="row-10 pc-row">
                    {pcs.map((pc,index) => renderComputerItem(pc,index,addCart))}
                </div>
            </div>
        </div>
    )
}
