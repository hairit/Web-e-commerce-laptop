import React from 'react'
import {useState , useEffect , useRef} from 'react'
import CALLER from '../../API/API';
import '../../CSS/Layout10.css';
import { NavLink } from 'react-router-dom';
import {BsFillCaretRightFill} from 'react-icons/bs'
import {BsFillCaretLeftFill} from 'react-icons/bs'
import '../../CSS/ScreenPanel.css'
import Solver from '../../Classes/Solver';
import { useHistory } from 'react-router';
const RenderScreenItem= (pro, index ,addProductToCart, history) => {
    const solver =new Solver();
    return (
        <div className="col-10-no-padding c-10-2 screen-infor" key={index}>
            <div className="screen-item" to={`screen/${pro.id}`}>
                <div className="screen-image" onClick={()=>history.push(`screen/${pro.id}`)}>
                    <img  className="screen-image-img" src={`https://localhost:44343/Images/Products/${pro.nameimage}`} alt={pro.nameimage} /> 
                </div>
                <div className="screen-detail">
                    <div className="screen-detail-item screen-name" onClick={()=>history.push(`screen/${pro.id}`)}>
                        <p>{pro.ten}</p>
                    </div>
                    <div className="screen-detail-item screen-price">
                        <p className="old-price">{solver.formatCurrency("vi-VN",'currency','VND',pro.giacu)}</p>
                        <p className="screen-price-value">{solver.formatCurrency("vi-VN",'currency','VND',pro.gia)}</p>
                    </div>
                    <div className="screen-detail-item screen-attributes">
                        
                    </div>
                    <div className="screen-detail-item screen-button-group">
                        <button className="screen-button screen-button-buy" onClick={()=>{
                                addProductToCart(pro.id,pro.gia);
                        }}>Mua ngay</button>
                        <button className="screen-button screen-button-add" onClick={()=>addProductToCart(pro.id,pro.gia)}>Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const getCountPage = (pros) => {
    return pros.length/5 ;
}
export default function ScreenPanel({addProductToCart}) {
    const history = useHistory();
    const [scaleX, setScaleX] = useState(0);
    const index = useRef(0);
    const [screens, setScreens] = useState([]);
    useEffect(() => {
       CALLER('GET','data/product/type=screen/enable',null)
        .then(res => setScreens(res.data))
        .catch(err => setScreens([]))
    }, [])
    const handleSwipe = (direction,countSwipe) => {
        if(index.current === 0 && direction ==='previous'){
            return;
        }
        if(index.current === countSwipe  && direction ==='next'){
            return;
        }
        if(direction === 'next'){
            index.current = index.current + 1;
            setScaleX(scaleX - 100);
        }
        else{
            index.current =index.current - 1;
            setScaleX(scaleX + 100);
        }
    }
    return (
        <div className="screen-panel">
            <div className="screen-panel-header">
                <div className="screen-panel-header-logo">
                    Màn hình máy tính
                </div>
                <div className="btn-all-screen" onClick={() => history.push('/screen')}>Xem tất cả{" >>"}</div>
            </div>
            <div className="screen-panel-list">
                    <div className="swiper-screen-button screen-previous" onClick={()=>handleSwipe('previous',getCountPage(screens)-1)}>
                        <BsFillCaretLeftFill className="swiper-screen-button-icon"/>
                    </div>
                    <div className="swiper-screen-button screen-next" onClick={()=>handleSwipe('next',getCountPage(screens)-1)}>
                        <BsFillCaretRightFill className="swiper-screen-button-icon"/>
                    </div>
            <div className="container10Col wide screen-container">
                    <div className="row-10--NoWrap screen-row" style={{transform : `translate(${scaleX}%)` ,transition : '0.5s'}} >
                        {
                            screens.map((pro,index) => RenderScreenItem(pro,index,addProductToCart,history))
                        }
                </div>
            </div>
            </div>
        </div>
    )
}
