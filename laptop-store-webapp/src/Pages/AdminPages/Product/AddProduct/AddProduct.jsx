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
        idloai: "",
        thuonghieu: "",
        namsx: "",
        baohanh: "",
        hienthi: 0,
        nameimage: "",
        uudai: "",
        giacu: "",
        headphoneDetail: null,
        keyboardDetail: null,
        laptopDescription: null,
        laptopDetail: null,
        mouseDetail: null,
        pcdetail: null,
        screenDetail: null
    });
    const [pro, setPro] = useState(null);
    console.log(product);
    const hanndleClickNext = () => {
        setproduct({ ...product, idloai: key });
        setflag(true);
        console.log(product);
    }
    const handleClickSend = () => {
        console.log(mouseDetail);
        console.log(key === "mouse");
        if (key === "mouse") { setproduct({ ...product, mouseDetail: mouseDetail }) }
        else if (key === "pc") { setproduct({ ...product, pcdetail: pcdetail }) }
        else if (key === "laptop") { setproduct({ ...product, laptopDetail: laptopDetail, laptopDescription: laptopDescription }) }
        else if (key === "headphone") { setproduct({ ...product, headphoneDetail: headphoneDetail }) }
        else if (key === "keyboard") { setproduct({ ...product, keyboardDetail: keyboardDetail }) }
        else { setproduct({ ...product, screenDetail: screenDetail }) }
        setKey("");
    }

    const createProduct = () => {
        axios.post(`https://localhost:44343/data/product/`, product)
            .then((res) => {
                console.log(res);
                alert("Tha??nh c??ng");
                setflag(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleClickPost = () => {
        createProduct();
    }
    function showform() {
        if (key === "mouse")
            return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Th??ng tin chu????t</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lo??ng nh????p th??ng tin chi ti????t:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki????u k????t n????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, kieuketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, led: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    K????t n????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, ketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    DPI:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, dophangiai: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th????i gian pha??n h????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, thoigianphanhoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Da??ng ca??m bi????n:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, dangcambien: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki??ch th??????c:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, kichthuoc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kh????i l??????ng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, khoiluong: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    S???? nu??t b????m:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, sonutbam: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    T??n ca??m bi????n:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, tencambien: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loa??i chu????t:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setMouseDetail({ ...mouseDetail, loaichuot: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Ti????p theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Tr???? la??i</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "pc") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Th??ng tin PC</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lo??ng nh????p th??ng tin chi ti????t:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loa??i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, typepc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Bo ma??ch chu??:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, mainboard: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loa??i CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, cputype: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    T??n CPU
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, cpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th??ng tin CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, detailcpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, ram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th??ng tin RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, detailram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Card ma??n hi??nh:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, vgatype: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th??ng tin card ma??n hi??nh:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, vganame: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ngu????n:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, psu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Case:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, casepc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ta??n nhi????t
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setPcdetail({ ...pcdetail, cool: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Ti????p theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Tr???? la??i</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "headphone") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Th??ng tin tai nghe</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lo??ng nh????p th??ng tin chi ti????t:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki????u tai nghe:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kieutainghe: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    K????t n????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, ketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki????u k????t n????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kieuketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Microphone:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, microphone: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki????u pin:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kieupin: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki??ch th??????c driver:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, kichthuocdriver: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, led: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kh????i l??????ng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setheadphoneDetail({ ...headphoneDetail, khoiluong: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Ti????p theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Tr???? la??i</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "keyboard") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Th??ng tin ba??n phi??m</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lo??ng nh????p th??ng tin chi ti????t:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    K????t n????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, ketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loa??i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, loai: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, den: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    M?? ta?? LED:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, motaden: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Brand Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, brandswitch: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loa??i Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, typeswitch: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    M?? ta?? Switch:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, motaswitch: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Layout:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, layout: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki??ch th??????c:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setKeyboardDetail({ ...keyboardDetail, size: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Ti????p theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Tr???? la??i</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "screen") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Th??ng tin ma??n hi??nh</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lo??ng nh????p th??ng tin chi ti????t:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki??ch th??????c:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, kichthuoc: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    ?????? ph??n gia??i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, dophangiai: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    ?????? ph??n gia??i pixel:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, dophangiaipixel: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    T????m n????n:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, tamnen: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    T????n s????:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, tanso: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki????u ma??n hi??nh:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, kieumanhinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th????i gian pha??n h????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, thoigianphanhoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    ?????? sa??ng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, dosang: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Go??c nhi??n:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, gocnhin: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ma??u hi????n thi??:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, mauhienthi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    B???? m????t:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, bemat: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    HDR:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, hdr: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    C????ng xu????t:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, congxuat: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Kh????i l??????ng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, khoiluong: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ti?? l????:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" className="input-input" onChange={(e) => setScreenDetail({ ...screenDetail, tile: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Ti????p theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Tr???? la??i</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "laptop") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Th??ng tin Laptop</h2>
                    <div className="product-input-form">
                        <div className="product-input-subtitle"> Vui lo??ng nh????p th??ng tin chi ti????t:</div>
                        <div className="product-input-form">
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, cpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th??ng tin CPU:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailcpu: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, ram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th??ng tin RAM:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailram: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    VGA:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, vga: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th??ng tin VGA:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailvga: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ma??n hi??nh
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setLaptopDetail({ ...laptopDetail, manhinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Th??ng tin ma??n hi??nh
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, detailmanhinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    ???? c????ng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, ocung: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Ki????u khe:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, kieukhe: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    C????ng xu????t hi??nh:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, congxuathinh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    C????ng k????t n????i:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, congketnoi: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    K????t n????i kh??ng d??y:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, ketnoikhongday: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    H???? ??i????u ha??nh
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, hdh: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Size:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, size: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Tro??ng l??????ng:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, khoiluong: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Pin:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, pin: e.target.value })} />
                                </div>
                            </div>
                            <div className="input-form-item">
                                <div className="input-form-label">
                                    Loa??i laptop:
                                </div>
                                <div className="input-form-input">
                                    <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setlaptopDescription({ ...laptopDescription, typelaptop: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="product-button">
                            <button className=" product-button-page1" onClick={() => handleClickSend()}>Ti????p theo</button>
                            <button className="product-button-page1" onClick={() => setflag(false)}>Tr???? la??i</button>
                        </div>
                    </div>
                </div>
            ); else if (key === "") return (
                <div className={flag === true ? "product-edit-page" : "page-hide"}>
                    <h2 className="product-edit-title">Xa??c nh????n</h2>
                    <div className="product-button">
                        <button className=" product-button-page1" onClick={() => handleClickPost()}>Xa??c nh????n</button>
                        <button className="product-button-page1" onClick={() => setflag(false)}>Hu??y</button>
                    </div>
                </div>
            )
    }


    return (
        <div className="product-add">
            <div className={flag === false ? "product-edit-page" : "page-hide"}>
                <h2 className="product-edit-title"> Th??ng tin chung </h2>
                <div className="product-input-form">
                    <div className="product-input-subtitle"> Vui lo??ng nh????p th??ng tin chung cho sa??n ph????m:</div>
                    <div className="input-form">
                        <div className="input-form-item">
                            <div className="input-form-label">
                                ID:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setproduct({ ...product, id: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                T??n sa??n ph????m:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setproduct({ ...product, ten: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Gia??:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setproduct({ ...product, gia: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Loa??i:
                            </div>
                            <div className="input-form-input">
                                <select name="product type" className="input-input" onChange={(e) => { setKey(e.target.value); setproduct({ ...product, idloai: e.target.value }) }}>
                                    <option value="mouse" >Chu????t</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="screen" >Ma??n hi??nh</option>
                                    <option value="headphone" >Tai nghe</option>
                                    <option value="keyboard" >Ba??n phi??m</option>
                                    <option value="pc" >Ma??y ti??nh ?????? ba??n</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Th????ng hi????u:
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setproduct({ ...product, thuonghieu: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                N??m sa??n xu????t
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setproduct({ ...product, namsx: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                Ba??o ha??nh
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setproduct({ ...product, baohanh: e.target.value })} />
                            </div>
                        </div>
                        <div className="input-form-item">
                            <div className="input-form-label">
                                ??u ??a??i
                            </div>
                            <div className="input-form-input">
                                <input type="text" placeholder="Nh????p va??o ????y" size="large" className="input-input" onChange={(e) => setproduct({ ...product, uudai: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-button">
                    <button className=" product-button-page1" onClick={() => hanndleClickNext()}>Ti????p theo</button>
                </div>
            </div>
            {showform()}
        </div>
    )
}