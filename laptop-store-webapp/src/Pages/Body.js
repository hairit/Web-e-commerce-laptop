import React from 'react'
import '../CSS/Body.css'
import Center from './BodyPages/Center'
import KeyboardPanel from './BodyPages/KeyboardPanel'
import LaptopPanel from './BodyPages/LaptopPanel'

export default function Body() {
    return (
        <div className="body">
            <Center />
            <LaptopPanel />
            <KeyboardPanel />
        </div>
    )
}
