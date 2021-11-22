import "./user.css"
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://br-art.vn/wp-content/uploads/2017/11/bo-anh-chan-dung-thu-hut-long-nguoi-1.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Vân Mộng</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">vanmong99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">0902535128</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">vanmong10121999@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">TPHCM | Vietnam</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"
                                    placeholder="vanmong99"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text"
                                    placeholder="Vân Mộng"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"
                                    placeholder="vanmong10121999@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text"
                                    placeholder="0902535128"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"
                                    placeholder="TPHCM | Vietnam"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUplod">
                                <img className="userUpdateImg" src="https://br-art.vn/wp-content/uploads/2017/11/bo-anh-chan-dung-thu-hut-long-nguoi-1.jpg" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
