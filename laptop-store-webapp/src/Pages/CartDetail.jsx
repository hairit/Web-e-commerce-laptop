import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react';
export default function CartDetail({item,checktien,index,handleViewDetails,checked,idUser,addQuantityProduct,deleteCartItem,deleteProductFromCart,solver}) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`https://localhost:44343/data/product/${item.idProduct}`,null)
                .then(res => setProduct(res.data))
                .catch(()=>setProduct(null));
    }, [])
    console.log(product);
    return (
        <div className="info-cart" key={index}>
                    <div className="info-donhang">
                      <div className="info-chitiet">
                      <div className="info-check">
                        <input class="check-item" type="checkbox"   name="hobby"  id="check-item" defaultChecked={item.selected === 1 ? checked : ""}
                        onChange={(e)=> { checktien(e, product.gia,item.soluong,item.idProduct,idUser, item.selected); }}   /> 
                        </div>
                        <div className="info-image">
                          <div className="img-name">
                            <a>
                              <div className="imag" onClick={() => handleViewDetails(item)}>
                                <img
                                  src={product !== null ? `https://localhost:44343/Images/Products/${product.nameimage}` 
                                                        : ""}
                                alt="img laptop"/>
                              </div>
                            </a>
                            <div className="name" onClick={() => handleViewDetails(item)}>
                              <a>{product !== null ? product.ten : ""}</a>
                              <div className="">ID: {item.idProduct}</div>
                              <div className="">Loại: {product !== null ? product.idloaiNavigation.ten : ""}</div>
                            </div>
                          </div>
                        </div>
                        <div className="info-editquantity">
                          <div className="btn-quantity">
                          <button type="button"class="btn-tru" name="btn-giam" onClick={() => deleteProductFromCart(idUser,item.idProduct,product.gia,item.soluong)}>
                             -
                          </button>
                          <input type="text" class="finput-edit" placeholder={item.soluong} disabled />
                          <button type="button" name="btn-tang" className="btn-cong"
                          onClick={() => addQuantityProduct(item.idProduct,product.gia)}> + </button>
                          </div>
                          <div className="delet">
                            <button type="button" className="btn-del" onClick={() => deleteCartItem(idUser,item.idProduct)}>Xóa</button>
                          </div>
                        </div>
                        <div className="info-price">
                          <strong className="tongtien-price">
                            {solver.formatCurrency("vi-VN","currency","VND",item.tongtien)}
                          </strong>
                          <strong className="giagoc">
                            {product !== null ? solver.formatCurrency("vi-VN","currency","VND", product.gia) : ""}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
    )
}
