import React from 'react';
import '../../CSS/Layout12.css';
import '../../CSS/MainPanel.css';
import { NavLink } from 'react-router-dom';
import PRODUCT_OPTIONS from '../../DATA/ProductOptions';
import {BiChevronLeft ,BiChevronRight} from 'react-icons/bi';
import {useState , useEffect , useRef } from 'react';
import CALLER from '../../API/CALL';

const LoadingProductOptions = (item , index) =>{
    return (<NavLink className="pro-list-item" key={index} to={item.path}>
            {item.icon()}
            <p className="pro-list-item-text">{item.optionName}</p>
        </NavLink>)
}
const renderCenterImage = (image,index) =>{
    if(image.position === 'center') return (
        <img key={index} className="main-image-item" src={`https://localhost:44343/Images/Panels/${image.nameImage}`} alt={image.nameImage} />
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
const getCenterImages = (images) =>{
    //  count = 0 ;
    // images.forEach(image => {
    //     count += (image.position === 'center') ? 1 : 0 ; 
    // });
    // return count;
    const centerImages = Array.from(images,image => image.position === 'center');
    return centerImages;
}
export default function MainPanel() {
    const [images, setImages] = useState([]);
    const [X, setX] = useState(0);
    const index = useRef(0);
    useEffect(() => {
        CALLER('GET','data/image',null).then(res => setImages(res.data)).catch(err => console.log("Errol when try to get Image API"));
    }, [])
    const changeSlide = (dir,countImage) =>{
        if(index.current === 0 && dir === 'previous') return;
        if(index.current === countImage - 1 && dir === 'next') return;
        if(dir === 'left'){
            index.current = index.current - 1;
            setX(X-100);
        }
        else{
            index.current = index.current + 1;
            setX(X+100);
        }
    }
    return (
        <div className="main-page">
            <div className="main-panel container12Col wide">
                <div className="row-12-no-margin">
                    <div className="col-no-padding c-2 main-panel-menu">
                        <div className="main-panel-menu-list">
                            {PRODUCT_OPTIONS.map((PRODUCT_OPTION,index) => LoadingProductOptions(PRODUCT_OPTION,index))}
                        </div>
                    </div>
                    <div className="col-no-padding c-10 main-panel-image container12Col">
                        <div className="row-12-no-margin main-image-row">
                            <div className="col-no-padding c-8 main-image-center main-image-item">
                                 <div className="main-image">
                                            <div className="button-slide previous-slide" onClick={() => changeSlide('previous',getCenterImages(images).length)}>
                                                <BiChevronLeft className="button-slide-icon" />
                                            </div>
                                                {images.map((image,index)=> renderCenterImage(image ,index))}
                                            <div className="button-slide next-slide" onClick={() => changeSlide('next',getCenterImages(images).length)}>
                                                <BiChevronRight className="button-slide-icon" />
                                            </div>
                                 </div>
                            </div>
                            <div className="col-no-padding c-4 main-image-right main-image-item">  
                                    {images.map((image,index)=> renderRightImage(image ,index))}               
                            </div>
                            {
                                images.map((image,index)=> renderBottom3Image(image,index))
                            }
                        </div>
                    </div>
                    {images.map((image,index) => renderBottom4Image(image,index))}
                </div>
                
            </div>
        </div>
    )
}
