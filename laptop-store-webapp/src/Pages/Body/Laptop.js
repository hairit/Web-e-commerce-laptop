import React from 'react'
import '../../CSS/Laptop.css'
import CALLER from '../../API/CALL.js'
import { useState,useEffect } from 'react'
export default function Laptop() {
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        CALLER('GET','lappee/product',null).then(res => console.log(res)).catch(err => console.log(err));
    }, [])
    return (
        <div className="laptop">
            Laptop Upload test
        </div>
    )
}
