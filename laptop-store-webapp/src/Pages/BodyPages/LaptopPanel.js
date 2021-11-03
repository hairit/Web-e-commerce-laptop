import React from 'react'
import '../../CSS/LaptopPanel.css'
import '../../CSS/Layout10.css'
import CALLER from '../../API/CALL'
import URL from '../../DATA/URL';
import {useState ,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import FormatCurrency from '../../Function/FormatCurrency';
const renderProductItem = (pro,index) =>{
    return(
        <div className="col-10 c-10-2 laptop-item" key={index}>
            <NavLink to="" className="laptop-infor">
                <div className="laptop-image">
                    <img  className="laptop-image-img"  src={URL+`/Images/Products/${pro.nameimage}`} alt={pro.nameimage}/>
                </div>
                <div className="laptop-detail">
                    <div className="laptop-detail-item laptop-id">Mã SP: {pro.id}</div>
                    <NavLink to="" className="laptop-detail-item laptop-name">{pro.ten+" ( "+pro.thongSoLaptop.cpu+" | "
                                                                    +pro.thongSoLaptop.ram+"GB | "
                                                                    +pro.thongSoLaptop.vga+" | "
                                                                    +pro.thongSoLaptop.manhinh+"\" )"
                                                                    }
                    </NavLink>
                    <div className="laptop-detail-item laptop-price">
                            <div className="">Giảm 5%</div>
                            <div className="laptop-price-value">{FormatCurrency("vi-VN",'currency','VND',pro.gia)}</div>
                    </div>
                </div>
            </NavLink>
                
            </div>
    )
}

export default function Laptop() {
    const [pros, setPros] = useState([]);
    useEffect(() => {
        CALLER('GET','data/laptop/enable',null).then(res => setPros(res.data)).catch(err => alert("Errol!! when try to get laptop product"));
    }, [])
    console.log(pros);
    return (
        <div className="laptop-panel">
            <div className="laptop-panel-header">
                <div className="laptop-panel-header-logo"><p>Top các sản phẩm bán chạy</p></div>
            </div>
            <div className="container10Col wide">
                <div className="row-10">
                    {
                        pros.map((pro,index)=> renderProductItem(pro,index))
                    }
                </div>
            </div>
        </div>
    )
}
