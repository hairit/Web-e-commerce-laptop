import React from 'react'
import { useEffect ,useState } from 'react';
import { useHistory } from 'react-router';
import call from '../../API/API';
import '../../CSS/HeadphonePanel.css';
import Solver from '../../Classes/Solver';
const Headphone = (headphone,index,history,addProductToCart,solver) =>{
    return (
        <div className="col-10 c-10-2 headphone-col" key={index}>
            <div className="headphone-infor">
                <div className="headphone-image">
                    <img className="headphone-image-img" src={`https://localhost:44343/Images/Products/${headphone.nameimage}`} alt={headphone.nameimage} />
                </div>
                <div className="headphone-name">{headphone.ten}</div>
                <div className="headphone-price">
                    <p className="old-price">{solver.formatCurrency("vi-VN", "currency", "VND", headphone.giacu)}</p>
                    <p className="headphone-price-value">{solver.formatCurrency("vi-VN", "currency", "VND", headphone.gia)}</p>
                </div>
                <div className="headphone-gift">
                    <p>{headphone.uudai}</p>
                </div>
            </div>
        </div>
    )
}
export default function HeadphonePanel({addProductToCart}) {
    const [headphones, setHeadphones] = useState([]);
    const history = useHistory();
    const solver = new Solver();
    useEffect(() => {
        call('GET','data/product/type=headphone/enable')
            .then(res => setHeadphones(res.data))
            .catch(() => setHeadphones([]))
    }, [])
    return(
        <div className="headphone-panel">
            <div className="headphone-panel-header">
                <p className="headphone-title">Tai nghe nổi bật nhất</p>
            </div>
            <div className="headphone-panel-pro-list container10Col wide">
                <div className="row-10-no-margin headphone-row">
                    {headphones.map((headphone,index)=> Headphone(headphone,index,history,addProductToCart,solver))}
                </div>
            </div>
        </div>
    )
}
