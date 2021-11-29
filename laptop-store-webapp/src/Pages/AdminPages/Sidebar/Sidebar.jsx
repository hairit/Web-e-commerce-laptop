import "./Sidebar.css"

import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillHome } from "react-icons/ai";
import { FaBox,FaClipboardList } from "react-icons/fa";
import { useHistory } from "react-router";
export default function Sidebar() {
    let history = useHistory();
    return (
        <div className="sidebar">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Admin Dashboard</h3>
                <div className="sidebarList">
                    <ul>
                    <li className="slidebarListItem" onclick={()=>history.push("/admin")}>
                        <AiFillHome className="slidebarIcon" />
                        Trang chủ
                    </li>
                    <li className="slidebarListItem" >
                        <AiOutlineUser className="slidebarICon" onclick={()=>history.push("/admin/customer")}/>
                        Khách hàng  
                    </li>
                    <li className="slidebarListItem" onclick={()=>history.push("/admin/order")}>
                        <FaClipboardList className="slidebarICon" />
                        Đơn hàng
                    </li>
                    <li className="slidebarListItem" onclick={()=>history.push("/admin/product")}>
                        <FaBox className="slidebarICon" />Sản phẩm
                    </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}


