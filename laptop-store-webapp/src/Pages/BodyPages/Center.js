import React from 'react'
import '../../CSS/Center.css'
import CALLER from '../../API/CALL'
import {useState ,useEffect} from 'react'
import PRODUCT_OPTIONS from '../../DATA/ProductOptions'
import { NavLink } from 'react-router-dom'
// const LoadingImageWithPosition = (images,position) =>{
//     images.map((image,index) => {
//         if(image.position===position) return (<img className="image" key={index} src={`https://localhost:44343/${image.name}`} alt={image.nameImage}/>);
//         // return (image.position === position) ? (<img className="image" key={index} src={`https://localhost:44343/${image.name}`} alt={image.nameImage}/>) : <div></div>
//     })
// }
const LoadingImageWithPosition = (image,index,position) =>{
    if(image.position===position) {
        if(position!=='bottom') return (<NavLink className={'image'+image.position} key={index} to={image.path}>
                                        <img className={'image'+image.position+'-item'}
                                        src={`https://localhost:44343/Images/Panels/${image.nameImage}`} 
                                        alt={image.nameImage} /></NavLink>);
        else return (<NavLink className="image-item" key={index} to={image.path}>
                            <img className={'image'+image.position} 
                                 src={`https://localhost:44343/Images/Panels/${image.nameImage}`} 
                                 alt={image.nameImage} />
                    </NavLink>)
    }
    //return (<img className="image" key={index} src={`https://localhost:44343/Images/Panels/slideshow3.png`} alt={image.nameImage} />)
}
const LoadingProductOptions = (item , index) =>{
    return (<NavLink className="pro-list-item" key={index} to={item.path}>
            {item.icon()}
            <p className="pro-list-item-text">{item.optionName}</p>
        </NavLink>)
}
export default function Center() {
    const [images, setImages] = useState([])
    useEffect(() => {
        CALLER('GET','lappee/image',null).then(res => setImages(res.data)).catch(err => alert("Errol!! IMG loading failed"));
    }, [])
    console.log(images);
    return(
        <div className="center">
            <div className="center-panel">
                <div className="pro-list">
                        {PRODUCT_OPTIONS.map((PRODUCT_OPTION,index) => LoadingProductOptions(PRODUCT_OPTION,index))}
                </div>
                <div className="center-image">
                        <div className="center-image-top">
                            <div className="center-image-top-center">
                                <div className="center-image-top-center-slider">
                                {
                                //  LoadingImageWithPosition(images,'center')
                                    images.map((image,index)=> LoadingImageWithPosition(image,index,'center'))
                                }
                                </div>
                            </div>
                            <div className="center-image-top-right">
                                {
                                    images.map((image,index) => LoadingImageWithPosition(image,index,'right'))
                                }
                            </div>
                        </div>
                        <div className="center-image-bottom">

                        </div>
                </div>
            </div>
            <div className="bottom-panel">
                {
                                images.map((image,index) => LoadingImageWithPosition(image,index,'bottom'))
                }
            </div>
        </div>
    )
}
