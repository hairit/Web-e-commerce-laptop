import React from 'react'
import '../CSS/Body.css'
import Center from './BodyPages/Center'
import KeyboardPanel from './BodyPages/KeyboardPanel'
import LaptopPanel from './BodyPages/LaptopPanel'
import PCPanel from './BodyPages/PCPanel'
import ScreenPanel from './BodyPages/ScreenPanel'
import MainPanel from './BodyPages/MainPanel'

export default function Body() {
    return (
        <div className="body">
            {/* <Center /> */}
            <MainPanel />
            <LaptopPanel />
            <PCPanel />
            <KeyboardPanel />
            <ScreenPanel />
        </div>
    )
}
