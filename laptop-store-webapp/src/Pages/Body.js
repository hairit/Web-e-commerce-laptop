import React from 'react'
import '../CSS/Body.css'
import Center from './BodyPages/Center'
import KeyboardPanel from './BodyPages/KeyboardPanel'
import LaptopPanel from './BodyPages/LaptopPanel'
import PCPanel from './BodyPages/PCPanel'
import ScreenPanel from './BodyPages/ScreenPanel'

export default function Body() {
    return (
        <div className="body">
            <Center />
            <LaptopPanel />
            <PCPanel />
            <KeyboardPanel />
            <ScreenPanel />
        </div>
    )
}
