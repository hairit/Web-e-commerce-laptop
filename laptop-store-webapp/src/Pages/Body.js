import React from 'react'
import '../CSS/Body.css'
import Center from './BodyPages/Center'
import Laptop from './BodyPages/LaptopPanel'

export default function Body() {
    return (
        <div className="body">
            <Center />
            <Laptop />
        </div>
    )
}
