import React from 'react'
import Bill from "../CSS/Bill.css"
import bill from "../Images/bill.png"
export default function DonHang() {
    return (
        <div className="wrapper bill">
            <div className="container-bill">
                <div className="Bill">
                    <div className="title-bill">
                        <img src={bill} />
                        <p>Quản lý đơn hàng</p>
                    </div>
                    <div className="center-bill">
                        <div className="idorder">
                            <div className="title-donhang">Mã sản phẩm</div>
                            <p>abc123</p>
                        </div>
                        <div className="productOrder">
                            <div className="title-donhang">Sản phẩm</div>
                        </div>
                        <div className="Totalprice">
                            <div className="title-donhang">Tổng tiền</div>
                            <p>123567000</p>
                        </div>
                        <div className="note">
                            <div className="title-donhang">Ghi chú</div>
                            <p>Giao cho nhanh á</p>
                        </div>
                        <div className="status">
                            <div className="title-donhang">Trạng thái</div>
                            <p>Đang xử lý</p>
                        </div>
                        {/* <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="col row-idOrder">Mã đơn hàng</th>
                                    <th className="col row-pro">Sản phẩm</th>
                                    <th className="col row-sltt">Số lượng</th>
                                    <th className="col row-sltt">Tổng tiền</th>
                                    <th className="col row-note">Ghi chú</th>
                                    <th className="col row-bill">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="info-bill">
                                    <th className="row ">1</th>
                                    <td>
                                        <td >
                                            Laptop
                                        </td>
                                        <td>
                                            Bàn phím
                                        </td>
                                    </td>
                                    <td>2</td>
                                    <td>80990000</td>
                                    <td></td>
                                    <td>Đang xử lý</td>
                                </tr>
                                <tr className="info-bill">
                                    <th className="row">2</th>
                                    <td>Tai nghe</td>
                                    <td>1</td>
                                    <td>126000</td>
                                    <td></td>
                                    <td>Đang xử lý</td>
                                </tr>
                                <tr className="info-bill">
                                    <th className="row">3</th>
                                    <td>Điện thoại</td>
                                    <td>3</td>
                                    <td>123050000</td>
                                    <td></td>
                                    <td>Đang xử lý</td>
                                </tr>
                                
                            </tbody>
                        </table> */}
                    </div>
                    <div className="bottom-bill"></div>
                </div>
            </div>
        </div>
    )
}
