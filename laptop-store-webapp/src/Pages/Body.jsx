import React from 'react'
import '../CSS/Body.css'
import { useEffect,useState } from 'react'
import KeyboardPanel from './BodyPages/KeyboardPanel'
import LaptopPanel from './BodyPages/LaptopPanel'
import PCPanel from './BodyPages/PCPanel'
import ScreenPanel from './BodyPages/ScreenPanel'
import MainPanel from './BodyPages/MainPanel'
import MousePanel from './BodyPages/MousePanel'
import facebook from '../Images/facebook_48px.png'
import messenger from '../Images/facebook_messenger_48px.png'
import youtube from '../Images/YouTube_48px.png'
import phone from '../Images/phone_64px.png'
import envelope from '../Images/envelope_48px.png'
import up from '../Images/upwards_button_48px.png'
import facebookicon from '../Images/facebook-icon.png'
import emailicon from '../Images/email-icon.png'
import phoneicon from '../Images/phone-icon.png'
import addressicon from '../Images/address.png'
import URL from '../DATA/URL'
const styleBlur ={
    filter: "blur(3px)"
}
const styleUnBlur ={
    filter: "none"
}
export default function Body({addProductToCart, blur}) {
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll',changeStatusRightItem);
    }, [])
    const changeStatusRightItem = () => {
        if(window.scrollY >= 400) setDisplay(true);
        else setDisplay(false);
    }
    return (
        <div className="body" style={blur===false?styleUnBlur:styleBlur}>
            <div className={display === true ? "right-scroll-panel" : "right-scroll-panel-hide"}>
                <img className="right-scroll-panel-item" src={facebookicon} />
                <img className="right-scroll-panel-item" src={phoneicon} />
                <img className="right-scroll-panel-item" src={emailicon} />
                <img className="right-scroll-panel-item" src={addressicon} />
            </div>
            <img  className={display === true ? "scroll-to-top" : "scroll-to-top-hide"} src={up} onClick={()=>window.scrollTo(0, 0)} />
            <MainPanel />
            <LaptopPanel addProductToCart={addProductToCart}/>
            <div className="event-laptop">
                <div className="event-laptop-item"><img className="event-laptop-item-img" src={`${URL}/Images/Panels/event-laptop1.png`}/></div>
                <div className="event-laptop-item"><img className="event-laptop-item-img" src={`${URL}/Images/Panels/event-laptop2.png`}/></div>
            </div>
            <ScreenPanel addProductToCart={addProductToCart}/>
            <div className="event"><img className="event-img" src={`${URL}/Images/Panels/event-22-12-2021.png`}/></div>
            {/* <PCPanel addProductToCart={addProductToCart} /> */}
            <KeyboardPanel addProductToCart={addProductToCart}/>
            <MousePanel addProductToCart={addProductToCart}/>
        </div>
    )
}
