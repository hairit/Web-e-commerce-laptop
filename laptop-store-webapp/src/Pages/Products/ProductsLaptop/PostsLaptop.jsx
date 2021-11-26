import React from "react";
import bnphmc from "../../../Images/bnphmc.png";
import bnphmc1 from "../../../Images/bnphmc1.png";
import bnphmc2 from "../../../Images/bnphmc2.png";
import bnphmc3 from "../../../Images/bnphmc3.png";
import checked_32px from "../../../Images/checked_32px.png";
import laptoppost from "../../../Images/laptoppost.png";
import laptopLappe from "../../../Images/laptopLappe.png";
import laptop from "../../../Images/laptop.png";
import { NavLink } from "react-router-dom";
import details from "../../../CSS/ProductsCss/details.css";

export default function PostsLaptop() {
  return (
    <div className="posts">
      <div className="panel-Posts">
        <h2 className="h2-mota">NHỮNG ĐIỀU CẦN LƯU Ý KHI CHỌN MUA LAPTOP</h2>
        <p>
          Để có thể sở hữu được một sản phẩm chất lượng và ưng ý nhất thì bạn
          cần xem xét các yếu tố như sau khi mua laptop:
        </p>
        <span className="span-inf">
          <strong>Sản phẩm chính hãng: </strong>
          Tốt nhất là bạn nên lựa chọn những laptop có thương hiệu nổi tiếng.
          Điều này phần nào đã chứng minh được chất lượng của laptop. Những
          thương hiệu được nhiều người ưa chuộng trong thời gian dài thì chắc
          chắn là sản phẩm có các ưu điểm nổi bật, mang đến nhiều giá trị tối ưu
          cho người dùng khi sử dụng sản phẩm. Khi đã chọn các thương hiệu nổi
          tiếng thì hàng chính hãng cũng là điều bạn nên đặc biệt quan tâm bởi
          vì hàng giả, hàng nhái hiện nay trên thị trường có rất nhiều.
        </span>
        <br/>
        <br/>
        <span className="span-inf">
          <strong>Cấu hình sản phẩm: </strong>
          Đây là vấn đề mà bạn cần nghiên cứu trước, đặc biệt là đối với những 
          người không có kiến thức chuyên môn trong lĩnh vực công nghệ. Nắm được 
          một số đặc điểm cấu hình cơ bản của laptop không chỉ giúp bạn lựa chọn 
          được laptop dễ dàng hơn mà bạn còn có thể biết được loại nào đáp ứng được 
          các yêu cầu sử dụng của mình. Tùy vào mục đích để học tập, làm việc, chơi 
          game hay giải trí đơn thuần mà sẽ có những dòng máy chuyên dụng mang đến cho 
          bạn những trải nghiệm mượt mà hơn.
        </span>
        <br/>
        <br/>
        <span className="span-inf">
          <strong>Giá cả hợp lý: </strong>
          Tất nhiên giá cả luôn là vấn đề khiến nhiều người đắn đo suy nghĩ mỗi khi muốn 
          mua một thứ gì đó và đối với laptop cũng vậy. Tìm được các cửa hàng có mức giá 
          phù hợp thì sẽ giúp bạn tiết kiệm được chi phí hơn. Do đó, bạn có thể tham khảo 
          tình hình giá cả chung trước rồi so sánh giá ở một vài nơi thì chắc chắn sẽ chọn 
          được chỗ bán sản phẩm mà bạn muốn mua với mức giá tốt nhất.
        </span>
        <br/>
        <br/>
        <h2 className="h2-mota">NÊN MUA LAPTOP Ở ĐÂU ? </h2>
        <p>
        Trong cuộc sống hiện đại bây giờ, một chiếc laptop hay PC sẽ giúp ích cho chúng ta 
        trong rất nhiều việc như học tập, giải trí, làm việc..Tuy nhiên trên thị trường 
        lại có rất nhiều các thương hiệu laptop kèm theo rất nhiều kiểu dáng, cấu hình khiến 
        bạn khó lựa chọn. Không chỉ vậy, ngay cả khi lựa chọn được mẫu ưng ý, việc mua laptop ở
         đâu uy tín cũng là câu hỏi mà nhiều bạn đang tự đặt ra !
        </p>
        <div className="img-Posts">
          <img src={laptop} />
        </div>
        <p>
        TP Hồ Chí Minh là một trong những thành phố lớn nhất cả nước, đi kèm với đó là sự phát triển vô 
        cùng mạnh mẽ. Sự phát triển đó kéo theo vô vàn các thương hiệu, cửa hàng, siêu thị điện 
        máy phân phối laptop. Trong đó,{" "}
        <NavLink to="/" className="nav-kb">
             LAPPEE
        </NavLink>{" "} 
        là một trong những doanh nghiệp hàng đầu tại TP Hồ Chí Minh về phân phối bán lẻ các sản phẩm công 
        nghệ, linh kiện máy tính, laptop. Tuy mới được thành lập nhưng với sự uy tín về chất lượng sản phẩm cũng như 
        về dịch vụ khách hàng trong lĩnh vực bán lẻ công nghệ, {" "}
        <NavLink to="/" className="nav-kb">
             LAPPEE
        </NavLink>{" "} đã tạo dựng được danh tiếng của mình trên thị trường và 
        trong lòng khách hàng ! Đây cũng chính là địa chỉ mà bạn có thể chọn cho mình một chiếc laptop 
        ưng ý với cấu hình tốt với chi phí phù hợp nhất ! 
        </p>
        <br/>
        <br/>
        <div className="xemthemlaptop">
        <p>Xem thêm:</p>
        <ul className="posts-menu">
          <li>
            <img src={checked_32px} />
            <span>
            <NavLink to="/laptop/typelaptop/Laptop đồ họa">
              Laptop Gaming - đồ họa đáng mua nhất hiện nay
            </NavLink>
            </span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>
            <NavLink to="/laptop/typelaptop/Laptop đồ họa">
              Laptop chuyên dành cho Sinh viên
            </NavLink>
            </span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>
            <NavLink to="/laptop/typelaptop/Laptop đồ họa">
              Laptop dành cho dân văn phòng
            </NavLink>
            </span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>
            <NavLink to="/laptop/typelaptop/Laptop đồ họa">
              Laptop mỏng nhẹ
            </NavLink>
            </span>
          </li>
        </ul>
        </div>
        <div className="img-Posts banner-laptop">
          <img src={laptopLappe} />
        </div>
      </div>
    </div>
  );
}
