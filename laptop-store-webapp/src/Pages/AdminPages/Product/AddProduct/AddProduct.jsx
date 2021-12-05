import React from 'react';
import './AddProduct.css'
import { useState } from 'react';
import axios from 'axios';

export default function AddProduct({ }) {
    const [idloaiNavigation, setidloaiNavigation] = useState(null);
    const [headphoneDetail, setheadphoneDetail] = useState(null);
    const [keyboardDetail, setKeyboardDetail] = useState(null);
    const [laptopDescription, setlaptopDescription] = useState(null);
    const [laptopDetail, setLaptopDetail] = useState(null);
    const [mouseDetail, setMouseDetail] = useState(null);
    const [pcdetail, setPcdetail] = useState(null);
    const [screenDetail, setScreenDetail] = useState(null);
    const [flag, setflag] = useState(false);
    const [key, setKey] = useState("mouse");
    const [product, setproduct] = useState({
        id: "",
        ten: "",
        gia: "",
        idloai: key,
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

    const hanndleClickNext = () => {
        setproduct({ ...product, idloai: key });
        setflag(true);
        console.log(product);
    }
    const createProduct = () => {
        axios.post(`https://localhost:44343/data/product/`, product)
            .then((res) => {
                console.log(res);
                alert("Thành công");
            })
            .catch((err) => {
                console.log(err);
            })
    }
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
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, kieuketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, led: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, ketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    DPI:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, dophangiai: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thời gian phản hồi:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, thoigianphanhoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Dạng cảm biến:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, dangcambien: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kích thước:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, kichthuoc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Khối lượng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, khoiluong: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Số nút bấm:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, sonutbam: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tên cảm biến:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, tencambien: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại chuột:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, loaichuot: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Tiếp theo</button>
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
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, typepc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Bo mạch chủ:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, mainboard: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, cputype: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tên CPU
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, cpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, detailcpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, ram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, detailram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Card màn hình:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, vgatype: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin card màn hình:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, vganame: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Nguồn:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, psu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Case:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, casepc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tản nhiệt
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, cool: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Tiếp theo</button>
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
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kieutainghe: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, ketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kieuketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Microphone:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, microphone: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu pin:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kieupin: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kích thước driver:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kichthuocdriver: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, led: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Khối lượng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, khoiluong: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Tiếp theo</button>
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
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, ketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, loai: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, den: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Mô tả LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, motaden: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Brand Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, brandswitch: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, typeswitch: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Mô tả Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, motaswitch: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Layout:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, layout: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kích thước:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, size: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Tiếp theo</button>
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
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, kichthuoc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Độ phân giải:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, dophangiai: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Độ phân giải pixel:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, dophangiaipixel: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tấm nền:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, tamnen: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tần số:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, tanso: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu màn hình:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, kieumanhinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thời gian phản hồi:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, thoigianphanhoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Độ sáng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, dosang: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Góc nhìn:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, gocnhin: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Màu hiển thị:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, mauhienthi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Bề mặt:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, bemat: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    HDR:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, hdr: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Cổng xuất:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, congxuat: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Khối lượng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, khoiluong: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tỉ lệ:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, tile: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Tiếp theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Trở lại</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "laptop") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Thông tin Laptop</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lòng nhập thông tin chi tiết:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, cpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailcpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, ram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    VGA:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, vga: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin VGA:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailvga: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Màn hình
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, manhinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Thông tin màn hình
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailmanhinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ổ cứng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, ocung: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kiểu khe:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, kieukhe: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Cổng xuất hình:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, congxuathinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Cổng kết nối:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, congketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kết nối không dây:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, ketnoikhongday: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Hệ điều hành
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, hdh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Size:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, size: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Trọng lượng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, khoiluong: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Pin:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, pin: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loại laptop:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, typelaptop: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Tiếp theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Trở lại</button>
                        </div>
                    </div>
                </div>
            )
    }
    const handleClickSend = () => {
        if (key === "mouse") { setproduct({ ...product, mouseDetail: mouseDetail }) }
        else if (key === "pc") { setproduct({ ...product, pcdetail: pcdetail }) }
        else if (key === "laptop") { setproduct({ ...product, laptopDetail: laptopDetail, laptopDescription: laptopDescription }) }
        else if (key === "headphone") { setproduct({ ...product, headphoneDetail: headphoneDetail }) }
        else if (key === "keyboard") { setproduct({ ...product, keyboardDetail: keyboardDetail }) }
        else { setproduct({ ...product, screenDetail: screenDetail }) }
        createProduct();
        console.log(product);
    }
    return (
        <div className="product-add">
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
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setproduct({ ...product, id: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Tên sản phẩm:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setproduct({ ...product, ten: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Giá:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setproduct({ ...product, gia: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Loại:
                            </div>
                            <div className="input-form-input">
                                <select name="product type" className="input-input" onChange={(e) => setKey(e.target.value)}>
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
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setproduct({ ...product, thuonghieu: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Năm sản xuất
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setproduct({ ...product, namsx: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Bảo hành
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setproduct({ ...product, baohanh: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Ưu đãi
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nhập vào đây" size="large" className="input-input" onChange={(e) => setproduct({ ...product, uudai: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-button">
                    <button className=" product-button-page1" onClick={() => hanndleClickNext()}>Tiếp theo</button>
                </div>
            </div>
            {showform()}
        </div>
    )
}