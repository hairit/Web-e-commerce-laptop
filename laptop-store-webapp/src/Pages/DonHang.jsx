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
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="col row-bill">Mã đơn hàng</th>
                                    <th className="col row-bill">Tên đơn hàng</th>
                                    <th className="col row-bill">Số lượng</th>
                                    <th className="col row-bill">Tổng tiền</th>
                                    <th className="col row-bill">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="info-bill">
                                    <th className="row ">1</th>
                                    <td>Laptop</td>
                                    <td>2</td>
                                    <td>80990000</td>
                                    <td>Đang xử lý</td>
                                </tr>
                                <tr className="info-bill">
                                    <th className="row">2</th>
                                    <td>Tai nghe</td>
                                    <td>1</td>
                                    <td>126000</td>
                                    <td>Đang xử lý</td>
                                </tr>
                                <tr className="info-bill">
                                    <th className="row">3</th>
                                    <td>Điện thoại</td>
                                    <td>3</td>
                                    <td>123050000</td>
                                    <td>Đang xử lý</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="bottom-bill"></div>
                </div>
            </div>
        </div>
    )
}
