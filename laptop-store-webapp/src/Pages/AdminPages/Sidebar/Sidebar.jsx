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
                    <div className="slidebarListItem" onclick={()=>history.push("/admin")}>
                        <AiFillHome className="slidebarIcon" />
                        Trang chủ
                    </div>
                    <div className="slidebarListItem" onclick={()=>history.push("/admin/customer")}>
                        <AiOutlineUser className="slidebarICon" />
                        Khách hàng  
                    </div>
                    <div className="slidebarListItem" onclick={()=>history.push("/admin/order")}>
                        <FaClipboardList className="slidebarICon" />
                        Đơn hàng
                    </div>
                    <div className="slidebarListItem" onclick={()=>history.push("/admin/product")}>
                        <FaBox className="slidebarICon" />Sản phẩm
                    </div>
                </div>
            </div>
        </div >
    )
}


