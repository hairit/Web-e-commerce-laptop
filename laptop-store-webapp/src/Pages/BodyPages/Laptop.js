import React from 'react'
import '../../CSS/Laptop.css'
import CALLER from '../../API/CALL'
import {useState ,useEffect} from 'react'

export default function Laptop() {
    const [pros, setPros] = useState([]);
    useEffect(() => {
        CALLER('GET','lappee/product',null).then(res => setPros(res.data)).catch(err => alert("Errol!! when try to get laptop product"));
    }, [])
    console.log(pros);
    return (
        <div className="laptop">
            Trang laptop
        </div>
    )
}
