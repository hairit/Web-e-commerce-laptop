import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings} from '@material-ui/icons'
import {Link} from "react-router-dom"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" className="link">
                    <span className="logo">Admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings/>
                    </div>
                    <img src="https://baominh.tech/wp-content/uploads/2020/09/nhan-dan-facebook.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
