import React from "react";
import { useState } from "react";
import axios from "axios";

export default function EditProduct({ product }) {
    const [isReadonly, setisReadonly] = useState(true);
    const [flag, setFlag] = useState(false);
    const [idloaiNavigation, setidloaiNavigation] = useState(null);
    const [headphoneDetail, setheadphoneDetail] = useState(null);
    const [keyboardDetail, setKeyboardDetail] = useState(null);
    const [laptopDescription, setlaptopDescription] = useState(null);
    const [laptopDetail, setLaptopDetail] = useState(null);
    const [mouseDetail, setMouseDetail] = useState(null);
    const [pcdetail, setPcdetail] = useState(null);
    const [screenDetail, setScreenDetail] = useState(null);
    const [pro, setPro] = useState({
        id: "",
        ten: "",
        gia: "",
        idloai: "",
        thuonghieu: "",
        namsx: "",
        baohanh: "",
        hienthi: 0,
        nameimage: "",
        uudai: "",
        giacu: "",
        idloaiNavigation: null,
        headphoneDetail: null,
        keyboardDetail: null,
        laptopDescription: null,
        laptopDetail: null,
        mouseDetail: null,
        pcdetail: null,
        screenDetail: null
    });
    const showFormInfo = () => {
        if (isReadonly === true) return (
            <div className="product-input-form">
                <div className="product-input-subtitle"> Đây là thông tin chung của sản phẩm</div>
                <div className="input-form">
                    <div className="input-form-item">
                        <div className="input-form-label">
                            ID:
                        </div>
                        <div className="input-form-input">
                            <input type="text" value={product.id} readOnly={isReadonly} className="input-input" />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Tên sản phẩm:
                        </div>
                        <div className="input-form-input">
                            <input type="text" value={product.ten} readOnly={isReadonly} className="input-input" />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Giá:
                        </div>
                        <div className="input-form-input">
                            <input type="text" value={product.gia} readOnly={isReadonly} className="input-input" />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Loại:
                        </div>
                        <div className="input-form-input">
                            <select name="product type" className="input-input" readOnly={isReadonly} value={product.idloai} >
                                <option value="mouse" >Chuột</option>
                                <option value="laptop">Laptop</option>
                                <option value="screen" >Màn hình</option>
                                <option value="headphone" >Tai nghe</option>
                                <option value="keyboard" >Bàn phím</option>
                                <option value="pc" >Máy tính để bàn</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Thương hiệu:
                        </div>
                        <div className="input-form-input">
                            <input type="text" value={product.thuonghieu} readOnly={isReadonly} className="input-input" />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Năm sản xuất
                        </div>
                        <div className="input-form-input">
                            <input type="text" value={product.namsx} readOnly={isReadonly} className="input-input" />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Bảo hành
                        </div>
                        <div className="input-form-input">
                            <input type="text" value={product.baohanh} readOnly={isReadonly} className="input-input" />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Ưu đãi
                        </div>
                        <div className="input-form-input">
                            <input type="text" value={product.uudai} className="input-input" onChange={(e) => setPro({ ...pro, uudai: e.target.value })} />
                        </div>
                    </div>
                </div>
                <div className="product-button">
                    <button className=" product-button-page1" onClick={() => setisReadonly(!isReadonly)}>Chỉnh sửa</button>
                </div>
            </div>
        );
        else return (
            <div className="product-input-form">
                <div className="product-input-subtitle"> Chỉnh sửa thông tin chung của sản phẩm</div>
                <div className="input-form">
                    <div className="input-form-item">
                        <div className="input-form-label">
                            ID:
                        </div>
                        <div className="input-form-input">
                            <input type="text" defaultValue={product.id} className="input-input" onChange={(e) => setPro({ ...pro, id: e.target.value })} />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Tên sản phẩm:
                        </div>
                        <div className="input-form-input">
                            <input type="text" defaultValue={product.ten} className="input-input" onChange={(e) => setPro({ ...pro, ten: e.target.value })} />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Giá:
                        </div>
                        <div className="input-form-input">
                            <input type="text" defaultValue={product.gia} className="input-input" onChange={(e) => setPro({ ...pro, gia: e.target.value })} />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Loại:
                        </div>
                        <div className="input-form-input">
                            <select name="product type" className="input-input" defaultValue={product.idloai} onChange={(e) => setPro({ ...pro, idloai: e.target.value })}>
                                <option value="mouse" >Chuột</option>
                                <option value="laptop">Laptop</option>
                                <option value="screen" >Màn hình</option>
                                <option value="headphone" >Tai nghe</option>
                                <option value="keyboard" >Bàn phím</option>
                                <option value="pc" >Máy tính để bàn</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Thương hiệu:
                        </div>
                        <div className="input-form-input">
                            <input type="text" defaultValue={product.thuonghieu} className="input-input" onChange={(e) => setPro({ ...pro, id: e.target.value })} />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Năm sản xuất
                        </div>
                        <div className="input-form-input">
                            <input type="text" defaultValue={product.namsx} className="input-input" onChange={(e) => setPro({ ...pro, id: e.target.value })} />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Bảo hành
                        </div>
                        <div className="input-form-input">
                            <input type="text" defaultValue={product.baohanh} className="input-input" onChange={(e) => setPro({ ...pro, baohanh: e.target.value })} />
                        </div>
                    </div>
                    <div className="input-form-item">
                        <div className="input-form-label">
                            Ưu đãi
                        </div>
                        <div className="input-form-input">
                            <input type="text" defaultValue={product.uudai} className="input-input" onChange={(e) => setPro({ ...pro, uudai: e.target.value })} />
                        </div>
                    </div>
                </div>
                <div className="product-button">
                    <button className=" product-button-page1" onClick={() => handleClick()}>Xác nhận</button>
                    <button className=" product-button-page1" onClick={() => setisReadonly(!isReadonly)}>Hủy</button>
                </div>
            </div>
        )
    }
    const handleClick = () => {
        axios.put(`https://localhost:44343/data/product/`, pro)
            .then((res) => {
                console.log(res);
                alert("Thay đổi thông tin thành công!");
                setisReadonly(true);
            })
            .catch((err) => {
                alert("Thay đổi thông tin thất bại!")
            })
    }
    return (
        <div className="product-add">
            <div className={flag === false ? "product-edit-page" : "page-hide"}>
                <h2 className="product-edit-title"> Thông tin chung </h2>
                {showFormInfo()}
            </div>

        </div>
    )
}
