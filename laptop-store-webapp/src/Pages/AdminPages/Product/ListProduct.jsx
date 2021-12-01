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
    const handleCheckBox = (e, id) => {
        if (e.target.checked) deletes.push(id);
        else {
            let temp = deletes.filter(function (element) {
                return element != id;
            });
            setDeletes(temp);
        }
    }
    const setHienThi = (id, ht) => {
        if (ht === 1) console.log("Hiển thị: " + id);
        else console.log("Không hiển thị: " + id);
    }

    const setShowItem = (e, id) => {
        if (e.targe.checked) setHienThi(id, 1);
        else setHienThi(id, 0)
    }


    const delectItem = () => {
        var res = window.confirm("Bạn chắc chắn muốn xóa những item này?");
        if (res === true)
            deletes.forEach(function (del, index) {
                axios.delete(`https://localhost:44343/data/product/${del}`)
                    .then((res) => {
                        alert("Xóa thành công!");
                        settype(type);
                    })
                    .catch("Xóa thất bại, vui lòng kiểm tra lại sau!");
            })
    }
    const renderTable = () => {
        return (
            pros.map((pro, index) => {
                if (index <= 12 * page && index >= 12 * (page - 1))
                    return (
                        <tr key={pro.id} className="product-list-item">
                            <td>{<input type="checkbox" onClick={(e) => handleCheckBox(e, pro.id)} />}</td>
                            <td>{index}</td>
                            <td>{pro.id}</td>
                            <td>{pro.ten}</td>
                            <td>{pro.gia}</td>
                            <td>{pro.idloai}</td>
                            <td>{pro.hienthi === 1 ? <input type="checkbox" checked onClick={(e) => setShowItem(e, pro.id)} /> : <input type="checkbox" onClick={(e) => setShowItem(e, pro.id)} />}</td>
                            <td><MdEdit className="product-item-icon" /></td>
                        </tr>
                    )
            }));
    }
    return (
        <div className="product-layout">
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
    )
}
