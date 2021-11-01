import React from 'react'
import '../../CSS/Laptop.css'
import '../../CSS/Layout10.css'
import CALLER from '../../API/CALL'
import {useState ,useEffect} from 'react'
import {NavLink} from 'react-router-dom';

export default function Laptop() {
    const [pros, setPros] = useState([]);
    useEffect(() => {
        CALLER('GET','api/laptop/enable',null).then(res => setPros(res.data)).catch(err => alert("Errol!! when try to get laptop product"));
    }, [])
    return (
        <div className="laptop-panel">
            <div className="laptop-panel-header">
                <div className="laptop-panel-header-logo"><p>Top các sản phẩm bán chạy</p></div>
                <NavLink className="laptop-panel-header-item" to=""><p className="laptop-panel-header-item-text">DELL</p></NavLink>
                <NavLink className="laptop-panel-header-item" to=""><p className="laptop-panel-header-item-text">ASUS</p></NavLink>
                <NavLink className="laptop-panel-header-item" to=""><p className="laptop-panel-header-item-text">ACER</p></NavLink>
                <NavLink className="laptop-panel-header-item" to=""><p className="laptop-panel-header-item-text">HP</p></NavLink>
            </div>
                <div className="container10Col wide">

                </div>
        </div>
    )
}
