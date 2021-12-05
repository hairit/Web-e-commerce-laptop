import axios from 'axios';
import React from 'react';
import {useState , useEffect} from 'react';
export default function BillDetail({item,index}) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
      axios.get(`https:localhost:44343/data/product/${item.idProduct}`)
        .then(res => setProduct(res.data))
        .catch((err)=>{
            setProduct(null);
            console.log("Billdetail getProduct errol : "+err);
        });
    }, []);
    return (
        <tr className="table-bill-details-row" key={index}>
            <td className="table-bill-details-cell">{item.idProduct}</td>
            <td className="table-bill-details-cell">{product !== null ? product.ten : ""}</td>
            <td className="table-bill-details-cell quantity-cell">
                    <button className="quantity-cell-button add-billDetail"></button>
                    <input className="quantity-input" placeholder={item.soluong}/>
                    <button className="quantity-cell-button add-billDetail"></button>
            </td>
            <td className="table-bill-details-cell">{item.tongtien}</td>
        </tr>
    )
}
