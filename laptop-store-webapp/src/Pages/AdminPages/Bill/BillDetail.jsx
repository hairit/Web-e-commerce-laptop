import axios from 'axios';
import React from 'react';
import {useState , useEffect} from 'react';
import {TiDelete} from 'react-icons/ti'
export default function BillDetail({item,index,reLoad,deleteBillDetail}) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        console.log("Rerender");
        axios.get(`https:localhost:44343/data/product/${item.idProduct}`)
        .then(res => setProduct(res.data))
        .catch((err)=>{
            setProduct(null);
            console.log("Billdetail getProduct errol : "+err);
        });
    }, [reLoad]);
    const increaseBillDetail = () => {
        axios.get(`https://localhost:44343/data/bill/action=increase/billdetail/idbill=${item.idBill}/idproduct=${item.idProduct}`)
            .then(res =>{ if(res.status === 204){
                reLoad();
            }})
            .catch(err =>{
                alert("Có lỗi xảy ra");
                console.log("Add billdetail quantity errol"+err);
            });
    }
    const decreaseBillDetail = () => {
        if(item.soluong === 1){
            deleteBillDetail(item.idBill,item.idProduct);
        }else {
            axios.get(`https://localhost:44343/data/bill/action=decrease/billdetail/idbill=${item.idBill}/idproduct=${item.idProduct}`)
            .then(res =>{ if(res.status === 204){
                reLoad();
            }})
            .catch(err => {
                alert("Có lỗi xảy ra");
                console.log("Add billdetail quantity errol"+err);
            })
        }
    }
    return (
        <tr className="table-bill-details-row" key={index}>
            <td className="table-bill-details-cell">{item.idProduct}</td>
            <td className="table-bill-details-cell">{product !== null ? product.ten : ""}</td>
            <td className="table-bill-details-cell">{product !== null ? product.idloaiNavigation.ten : ""}</td>
            <td className="table-bill-details-cell quantity-cell">
                    <button className="quantity-cell-button delete-billDetail" onClick={()=>decreaseBillDetail()}>-</button>
                    <input className="quantity-input" placeholder={item.soluong}/>
                    <button className="quantity-cell-button add-billDetail" onClick={()=>increaseBillDetail()}>+</button>
            </td>
            <td className="table-bill-details-cell">{item.tongtien}</td>
            <td className="table-bill-details-cell"><p style={{color :'rgb(211, 17, 17)'}} onClick={()=>deleteBillDetail(item.idBill,item.idProduct)}>Xóa</p></td>
        </tr>
    )
}
