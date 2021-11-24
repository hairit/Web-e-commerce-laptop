import React from 'react'
import '../CSS/Body.css'
import Center from './BodyPages/Center'
import KeyboardPanel from './BodyPages/KeyboardPanel'
import LaptopPanel from './BodyPages/LaptopPanel'
import PCPanel from './BodyPages/PCPanel'
import ScreenPanel from './BodyPages/ScreenPanel'
import MainPanel from './BodyPages/MainPanel'

const styleBlur ={
    filter: "blur(3px)"
}
const styleUnBlur ={
    filter: "none"
}
export default function Body({addProductToCart, blur}) {
    return (
        <div className="body" style={blur===false?styleUnBlur:styleBlur}>
            {/* <Center /> */}
            <MainPanel />
            <LaptopPanel addProductToCart={addProductToCart}/>
            <ScreenPanel addProductToCart={addProductToCart}/>
            <PCPanel addProductToCart={addProductToCart} />
            <KeyboardPanel addProductToCart={addProductToCart}/>
        </div>
    )
}
