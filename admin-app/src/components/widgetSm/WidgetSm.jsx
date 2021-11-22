import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78fHBoH68eNLOX9x3neRy5awDt1f0axJi6w&usqp=CAU" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Trần Văn Long</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://icdn.dantri.com.vn/thumb_w/640/2019/05/30/thieu-nu-gieo-thuong-nho-chi-voi-nhung-hinh-anh-den-trangdocx-1559198677640.jpeg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Trần Thị Kim Chi</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://br-art.vn/wp-content/uploads/2017/11/bo-anh-chan-dung-thu-hut-long-nguoi-1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Vân Mộng</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://tiemanhsky.com/wp-content/uploads/2020/03/61103071_2361422507447925_6222318223514140672_n_1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Cao Kỳ Duyên</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfI8qSqc-_xtsaExvUYzSGqaWQjg0ds2nbw&usqp=CAU" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Hồ Thị Hà</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
