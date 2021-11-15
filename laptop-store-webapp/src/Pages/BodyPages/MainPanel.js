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
const renderImage = (image,index,position) =>{
    if(image.position === position) return(
        <img key={index} className="main-image-item" src={`https://localhost:44343/Images/Panels/${image.nameImage}`} alt={image.nameImage} />
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
        CALLER('GET','lappee/image',null).then(res => setImages(res.data)).catch(err => console.log("Errol when try to get Image API"));
    }, [])
    const changeSlide = (dir,countImage) =>{
        if(index.current === 0 && dir === 'previous') return;
        if(index.current === countImage - 1 && dir === 'next') return;
        if(dir === 'left') {
            index.current = index.current - 1;
            setX(X-100);
        }
        else {
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
                        <div className="row-12-no-margin main-panel-image-row">
                            <div className="col-no-padding c-8 main-panel-image-center">
                                 <div className="main-image">
                                            <div className="button-slide previous-slide" onClick={() => changeSlide('previous',getCenterImages(images).length)}>
                                                <BiChevronLeft className="button-slide-icon" />
                                            </div>
                                     {images.map((image,index)=> renderImage(image ,index, 'center'))}
                                            <div className="button-slide next-slide" onClick={() => changeSlide('next',getCenterImages(images).length)}>
                                                <BiChevronRight className="button-slide-icon" />
                                            </div>
                                 </div>
                            </div>
                            <div className="col-no-padding c-4 main-panel-image-right">      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
