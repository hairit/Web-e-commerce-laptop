import React from 'react';
import { useEffect, useState } from 'react';
import Customer from './Customer/Customer';
import Order from './Order/Order';
import Product from './Product/Product';
import User from './User/User';
import Sidebar from './Sidebar/Sidebar';
import { Route, BrowserRouter as Router, NavLink, useHistory } from 'react-router-dom';
import "./Admin.css"
import { FaUser, FaHome, FaMoneyBillWave, FaUserFriends } from 'react-icons/fa'
import { RiBillLine } from 'react-icons/ri'
import { GrProductHunt } from 'react-icons/gr'
import { FcStatistics } from 'react-icons/fc'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import call from '../../API/API';
import URL from '../../DATA/URL';
import AddProduct from './Product/AddProduct/AddProduct';
export default function Admin({ changeAdminMode, match, logout }) {
    const history = useHistory();
    const [user, setUser] = useState(null);
    useEffect(() => {
        changeAdminMode('on');
        console.log(match.match.params.idUser);
        call('GET', `data/user/${match.match.params.idUser}`, null)
            .then(res => setUser(res.data))
            .catch(() => setUser(null))
    }, [])
    return (
        <Router>
            <div className="admin">
                <div className="admin-tabs">
                    <div className="admin-page-logo">
                    </div>
                    <NavLink className="admin-tab" to="/admin"><FaHome className="admin-tab-icon" /><p>Trang chủ</p></NavLink>
                    <NavLink className="admin-tab" to="/admin/customer"><FaUserFriends className="admin-tab-icon" /><p>Khách hàng</p></NavLink>
                    {user === null ? <div></div>
                        :
                        user.mode === "STAFF" ? <NavLink className="admin-tab" to="/sell">
                            <RiBillLine className="admin-tab-icon" />
                            <p>Sell</p>
                        </NavLink> : <>
                            <NavLink className="admin-tab" to="/admin/product"><GrProductHunt className="admin-tab-icon" /><p>Sản phẩm</p></NavLink>
                            <NavLink className="admin-tab" to="/admin/user"><FaUser className="admin-tab-icon" /><p>Người dùng</p></NavLink>
                            <NavLink className="admin-tab" to="/admin/report"><FcStatistics className="admin-tab-icon" /><p>Thống kê</p></NavLink>
                        </>
                    }
                </div>
                <div className="admin-pages">
                    <div className="admin-pages-header">
                        <div className="user-logout admin-header-item" onClick={() => {
                            history.push("/");
                            logout();
                        }}>
                            <BiLogOut className="admin-logout-icon" />
                        </div>
                        {user !== null ? <div className="user-header admin-header-item">
                            <img className="user-header-img" src={URL + `/Images/UserAvatar/${user.nameimage}`} />
                            <p>{user.lastname + " " + user.firstname}</p>
                        </div> : <div></div>}
                    </div>
                    <div className="admin-pages-main">
                        <Route path="/admin/customer" component={() => <Customer />}></Route>
                        <Route path="/admin/order" component={() => <Order />}></Route>
                        <Route path="/admin/product" component={() => <Product />}></Route>
                        <Route path="/admin/user" component={() => <User />}></Route>
                        <Route path="/product/addproduct" component={() => <AddProduct />}> </Route>
                    </div>
                </div>
            </div>
        </Router>
    )
}
