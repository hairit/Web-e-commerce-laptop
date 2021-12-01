import React from 'react';
import './AddProduct.css'
import { useState } from 'react';

export default function AddProduct({ }) {
    const [product, setproduct] = useState(null);
    const [flag, setflag] = useState(false);
    const [key, setkey] = useState("mouse");
    function showform() {
        if (key === "mouse")
            return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Thông tin chuột</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lòng nhập thông tin chi tiết:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    DPI:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thời gian phản hồi:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Dạng cảm biến:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kích thước:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Khối lượng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Số nút bấm:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tên cảm biến:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại chuột:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1">Tiếp theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Trở lại</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "pc") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Thông tin PC</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lòng nhập thông tin chi tiết:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Bo mạch chủ:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tên CPU
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Card màn hình:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin card màn hình:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Nguồn:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Case:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tản nhiệt
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1">Tiếp theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Trở lại</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "headphone") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Thông tin tai nghe</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lòng nhập thông tin chi tiết:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu tai nghe:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Microphone:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu pin:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kích thước driver:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Khối lượng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1">Tiếp theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Trở lại</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "keyboard") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Thông tin bàn phím</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lòng nhập thông tin chi tiết:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Mô tả LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Brand Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Mô tả Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Layout:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kích thước:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1">Tiếp theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Trở lại</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "screen") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Thông tin màn hình</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lòng nhập thông tin chi tiết:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kích thước:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Độ phân giải:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Độ phân giải pixel:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tấm nền:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tần số:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu màn hình:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thời gian phản hồi:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Độ sáng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Góc nhìn:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Màu hiển thị:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Bề mặt:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    HDR:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Công suất:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Khối lượng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tile:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1">Tiếp theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Trở lại</button>
                        </div>
                    </div>
                </div>
            )
    }
    return (
        <div className="product-add">
            <div className="produt-add-title"> Thêm sản phẩm</div>
            <div className={flag === false ? "product-edit-page" : "page-hide"}>
                <h2 className="product-edit-title"> Thông tin chung </h2>
                <div className="product-input-form">
                    <div className="product-input-subtitle"> Vui lòng nhập thông tin chung cho sản phẩm:</div>
                    <div className="input-form">
                        <div className="input-form-item">
                            <div className="input-form-label">
                                ID:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Tên sản phẩm:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Giá:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Loại:
                            </div>
                            <div className="input-form-input">
                                <select name="product type" className="input-input" onChange={(e) => setkey(e.target.value)}>
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
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Năm sản xuất
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Bảo hành
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-button">
                    <button className=" product-button-page1" onClick={() => setflag(true)}>Tiếp theo</button>
                </div>
            </div>
            {showform()}
        </div>
    )
}