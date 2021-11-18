import React from 'react'
import '../CSS/Body.css'
import Center from './BodyPages/Center'
import KeyboardPanel from './BodyPages/KeyboardPanel'
import LaptopPanel from './BodyPages/LaptopPanel'
import PCPanel from './BodyPages/PCPanel'
import ScreenPanel from './BodyPages/ScreenPanel'
import MainPanel from './BodyPages/MainPanel'

export default function Body({addProductToCart}) {
    return (
        <div className="body">
            {/* <Center /> */}
            <MainPanel />
            <LaptopPanel addCardHandleClick={addProductToCart}/>
            <PCPanel addCardHandleClick={addProductToCart} />
            <KeyboardPanel addCardHandleClick={addProductToCart}/>
            <ScreenPanel addCardHandleClick={addProductToCart}/>
        </div>
    )
}
