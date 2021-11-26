import React from 'react';
import '../../CSS/Layout12.css';
import '../../CSS/MainPanel.css';
import { NavLink } from 'react-router-dom';
import PRODUCT_OPTIONS from '../../DATA/ProductOptions';
import {BiChevronLeft ,BiChevronRight} from 'react-icons/bi';
import {useState , useEffect , useRef } from 'react';
import call from '../../API/API';
import Solver from '../../Classes/Solver';
const LoadingSelectPanelCenter = (item,index) => {
    return (
        <div className="select-panel-col" key={index}>
            <NavLink key={index} to="laptop" className="select-panel-col-item select-panel-col-title">{item.name}</NavLink>
            {item.datas.map((data,index)=><NavLink to={data.path} className="select-panel-col-item" key={index}>{data.name}</NavLink>)}
        </div>
    )
}
const LoadingSelectPanel = (item , index) =>{
    return(
        <div className="select-panel container12Col" key={index}>
            <div className="row-12-no-margin select-panel-row">
                <div className="select-panel-center col-no-padding c-9">
                    {item.attributes.map((attribute,index)=> LoadingSelectPanelCenter(attribute,index))}
                </div>
                {/* <div className="select-panel-right col-no-padding c-3">
                    <img src="https://localhost:44343/Images/UserAvatar/quocdatavatar.png" className="select-panel-right-img" />
                    <p className="dat-said">Nhìn lol gì !!</p>
                </div> */}
            </div>
        </div>
    )
}
const LoadingProductOptions = (item , index) =>{
    return (<div className="menu-list-item" key={index}>
        <NavLink className="pro-list-item" to={item.path}>
            {item.icon()}
            <p className="pro-list-item-text">{item.optionName}</p>
        </NavLink>
        {
                item.attributes ? LoadingSelectPanel(item,index) : <div></div>
        }
    </div>)
}
const renderCenterImage = (image,index,X) =>{
    if(image.position === 'center') return (
        <div className="center-image-item">
            <img key={index} className="center-image-item-img" src={`https://localhost:44343/Images/Panels/${image.nameImage}`} alt={image.nameImage} />
        </div>
    )
}
const renderRightImage = (image,index) => {
    if(image.position === 'right') return (
        <div className="image-right-item" key={index}>
                <img key={index} className="image-right-img" src={`https://localhost:44343/Images/Panels/${image.nameImage}`} alt={image.nameImage}/>
        </div>   
    )
} 
const renderBottom3Image = (image,index) => {
    if(image.position === 'bottom(3)') return (
        <div key= {index} className="col-no-padding c-4">
            <img className="image-bottom-3-img" src={`https://localhost:44343/Images/Panels/${image.nameImage}`} alt={image.nameImage}/>
        </div>
    )
}
const renderBottom4Image = (image,index) => {
    if(image.position === 'bottom(4)') return (
        <div key={index}  className="col-no-padding c-3">
            <img className="image-bottom-4-img" src={`https://localhost:44343/Images/Panels/${image.nameImage}`} alt={image.nameImage}/>
        </div>
    )
}
const countImage = (images,position) =>{
    var count = 0 ;
    images.map((image)=>{
        if(image.position === position ) count = count +1;
    })
    return count;
}
export default function MainPanel() {
    const solver = new Solver();
    const [images, setImages] = useState([]);
    const [X, setX] = useState(0);
    const index = useRef(0);
    useEffect(() => {
        call('GET','data/image',null).then(res => setImages(res.data)).catch(err => console.log("Errol when try to get Image API"));
    }, [])
    const changeSlide = (dir,countImage) =>{
        if(index.current === 0 && dir === 'previous' ) {
            index.current = countImage -1;
            setX(-(100-solver.getPercentNumber(countImage)));
            return ;
        }
        if(index.current === countImage - 1 && dir === 'next'){
            index.current = 0;
            setX(0);
            return;
        }
        if(dir === 'previous')
        {
            index.current = index.current - 1;
            setX(X+solver.getPercentNumber(countImage));
        }
        else{
            index.current = index.current + 1;
            setX(X-solver.getPercentNumber(countImage));
        }
    }
    return (
        <div className="main-page">
            <div className="main-panel container12Col wide">
                <div className="row-12-no-margin">
                        <div className="col-no-padding c-2 main-panel-menu">
                            <div className="main-panel-menu-list">
                                {
                                    PRODUCT_OPTIONS.map((PRODUCT_OPTION,index) => LoadingProductOptions(PRODUCT_OPTION,index))
                                }
                            </div>
                        </div>
                        <div className="col-no-padding c-10 main-panel-image container12Col">
                            <div className="row-12-no-margin main-image-row">
                                <div className="col-no-padding c-8 center-image main-image-item">
                                                <div className="button-slide next-slide" onClick={() => changeSlide('next',countImage(images,'center'))}>
                                                    <BiChevronRight className="button-slide-icon" />
                                                </div>
                                                <div className="button-slide previous-slide" onClick={() => changeSlide('previous',countImage(images,'center'))}>
                                                    <BiChevronLeft className="button-slide-icon" />
                                                </div>
                                                <div className="center-image-slider" style={
                                                    {width : `${countImage(images,'center')}00%`,transform : `translate(${X}%)` ,transition : '0.3s'}
                                                }>
                                                {images.map((image,index)=> renderCenterImage(image ,index ,X))}
                                                </div>
                                </div>
                                <div className="col-no-padding c-4 main-image-right main-image-item">  
                                                {images.map((image,index)=> renderRightImage(image ,index))}               
                                        </div>
                                                {images.map((image,index)=> renderBottom3Image(image,index))}
                                </div>
                        </div>
                    {images.map((image,index) => renderBottom4Image(image,index))}
                </div>
            </div>
        </div>
    )
}
