import React from 'react'
import {useState , useEffect} from 'react'
import CALLER from '../../API/CALL';
import '../../CSS/Layout10.css';
import { NavLink } from 'react-router-dom';

import '../../CSS/ScreenPanel.css'
import Solver from '../../Classes/Solver';
import { useHistory } from 'react-router';
const RenderScreenItem= (pro, index) => {
    const solver =new Solver();
    const history = useHistory();
    return (
        <div className="col-10-no-padding c-10-2 screen-infor" key={index}>
            <div className="screen-item" onClick={()=>history.push(`screen/${pro.id}`)} to={`screen/${pro.id}`}>
                <div className="screen-image">
                    <img  className="screen-image-img" src={`https://localhost:44343/Images/Products/${pro.nameimage}`} alt={pro.nameimage} /> 
                </div>
                <div className="screen-detail">
                    <div className="screen-detail-item screen-id">
                        <p>Mã SP : {pro.id}</p>
                    </div>
                    <div className="screen-detail-item screen-name">
                        <p>{pro.ten}</p>
                    </div>
                    <div className="screen-detail-item screen-price">
                        <p>Giảm 25%</p>
                        <p className="screen-price-value">{solver.formatCurrency("vi-VN",'currency','VND',pro.gia)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function ScreenPanel() {
    const history = useHistory();
    const [pros, setPros] = useState([]);
    useEffect(() => {
       CALLER('GET','data/product/type=screen/enable',null)
        .then(res => setPros(res.data))
        .catch(err => console.log("Errol when try to get screen product"+err))
    }, [])
    return (
        <div className="screen-panel">
            <div className="screen-panel-header">
                <div className="screen-panel-header-logo">
                    Màn hình máy tính
                </div>
                <div className="btn-all-screen" onClick={() => history.push('/screen')}>Xem tất cả{" >>"}</div>
            </div>
            <div className="container10Col screen-container">
                <div className="row-10-no-margin screen-row">
                    {
                        pros.map((pro,index) => RenderScreenItem(pro,index,history))
                    }
                </div>
            </div>
        </div>
    )
}
