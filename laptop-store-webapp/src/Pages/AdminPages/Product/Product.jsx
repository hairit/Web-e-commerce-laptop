import React from 'react';
import { MdAddBox, MdDelete, MdEdit } from "react-icons/md"
import { useState, useEffect } from 'react';

import "./Product.css"
import axios from 'axios';


export default function Product({ }) {
    const [pros, setpros] = useState([]);
    const [type, settype] = useState("");
    const [page, setPage] = useState(1);
    const [deletes, setDeletes] = useState([]);
    useEffect(() => {
        if (type === "")
            axios.get(`https://localhost:44343/data/product`)
                .then((res) => {
                    console.log(res);
                    setpros(res.data);
                })
                .catch((err) => console.log(err))
        else {
            console.log(`https://localhost:44343/data/product/type=${type}`);
            axios.get(`https://localhost:44343/data/product/type=${type}`)
                .then((res) => {
                    console.log(res);
                    setpros(res.data);
                })
                .catch((err) => console.log(err))
        }
    }, [type])
    const addDeleteList = (index) => {
        deletes.push(index);
    }
    const removeDeleteList = (index) => {
        var temps;
        deletes = deletes.slice(index, 1);
        setDeletes(temps);
    }
    const handleCheckBox = (e, index) => {
        if (e.target.checked) deletes.push(index);
        else {
            let temp = deletes.filter(function (element) {
                return element != index;
            });
            setDeletes(temp);
        }

    }
    const delectItem = () => {
        var res = window.confirm("Bạn chắc chắn muốn xóa những item này?");
        if (res === true)
            deletes.forEach(function (del, index) {
                console.log("Xóa nè" + index);
            })
    }
    const renderTable = () => {
        return (
            pros.map((pro, index) => {
                if (index <= 10 * page && index >= 10 * (page - 1))
                    return (
                        <tr key={pro.id} className="product-list-item">
                            <td>{<input type="checkbox" onClick={(e) => handleCheckBox(e, index)} />}</td>
                            <td>{index}</td>
                            <td>{pro.id}</td>
                            <td>{pro.ten}</td>
                            <td>{pro.gia}</td>
                            <td>{pro.idloai}</td>
                            <td>{pro.hienthi === 1 ? <input type="checkbox" checked /> : <input type="checkbox" />}</td>
                            <td><MdEdit className="product-item-icon" /></td>
                        </tr>
                    )
            }));
    }
    return (
        <div className="admin-product">
            <div className="product-layout">
                <div className="product-title"> <div className="product-title-text"> Trang sản phẩm</div> </div>
                <div className="product-button">
                    <select name="product type" className="product-selection" onChange={(e) => settype(e.target.value)} >
                        <option value="" >Tất cả </option>
                        <option value="mouse" >Chuột</option>
                        <option value="laptop">Laptop</option>
                        <option value="screen" >Màn hình</option>
                        <option value="headphone" >Tai nghe</option>
                        <option value="keyboard" >Bàn phím</option>
                        <option value="pc" >Máy tính để bàn</option>
                    </select>
                    <div className="product-button-button">
                        <MdAddBox className="product-button-icon" />
                        <MdDelete className="product-button-icon" onClick={() => delectItem()} />
                    </div>

                </div>
                <div className="product-list">
                    <table className="table-product" id="product">
                        <tr>
                            <th>Chọn</th>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>ID loại</th>
                            <th>Hiển thị</th>
                            <th>Sửa</th>
                        </tr>
                        {renderTable()}
                    </table>


                    <button className="product-page-button" onClick={() => { setPage(page + 1) }}>Trang Sau </button>
                    <input className="product-page-input" value={page} readOnly />
                    <button className="product-page-button" onClick={() => { (page > 1) ? setPage(page - 1) : setPage(page) }}>Trang Trước </button>
                </div>
            </div>
        </div >
    )
}
