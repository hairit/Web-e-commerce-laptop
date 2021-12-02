import React from "react";
import ScreenPost from "../../../Images/ScreenPost.png";
import screencong from "../../../Images/screencong.png";
import chutkhngdy from "../../../Images/chutkhngdy.png";
import chutcdy from "../../../Images/chutcdy.png";
import mnhnhmytnhfullhd from "../../../Images/mnhnhmytnhfullhd.png";
import { NavLink } from "react-router-dom";
import details from "../../../CSS/ProductsCss/details.css";

export default function PostsMouse() {
  return (
    <div className="posts">
      <div className="panel-Posts">
        <p>
       Chọn được <strong>chuột máy tính</strong> máy tính phù hợp với  
       <NavLink to="/pc" className="nav-kb"> máy tính để bàn</NavLink> hay 
       <NavLink to="/laptop" className="nav-kb"> laptop</NavLink> sẽ đem lại sự thoải 
       mái khi trong quá trình làm việc hay giải trí của bạn. Cho dù bạn yêu thích kiểu dáng 
       chuột truyền thống hay tùy chọn không dây Bluetooth, 
       <NavLink to="/" className="nav-kb"> LAPPEE</NavLink> có đầy đủ một loạt các thiết 
       kế xuất sắc từ nhiều thương hiệu hàng đầu. Và đối với các game thủ, hãy tham khảo các 
       dòng chuột chơi game chuyên dụng của chúng tôi với các thiết kế hiện đại, công nghệ tối 
       ưu hóa cho trải nghiệm chơi game tốt hơn. Nhưng mỗi loại chuột đều có một tính năng riêng, 
       vậy nên dùng chuột có dây hay không dây tốt hơn? Nếu bạn còn đang băn khoăn, hãy để chúng 
       tôi giúp bạn tìm ra lựa chọn phù hợp với bản thân nhất nhé!
        </p>
        <h2 className="h2-mota">Chuột có dây và không dây , chuột nào tốt hơn ?</h2>
        <p>
        Như đã nói ở trên, mỗi loại chuột có dây hay không dây đều được nhà sản xuất đưa vào những 
        tính răng đặc biệt riêng. Từ đó công dụng, khả năng tương thích công việc của mỗi loại lại 
        khác nhau. Để tìm ra câu trả lời xem chuột không dây và có dây loại nào tốt hơn chúng ta hãy 
        cùng phân tích ưu điểm của từng loại.
        </p>
        <span className="span-inf">
          <strong>Ưu điểm của chuột có dây so với chuột bluetooth ( không dây) </strong>
          <br/>
          <p>Đây có thể coi là dạng nguyên thủy của 
            <NavLink to="/mouse" className="nav-kb"> chuột máy tính</NavLink>. So với thời kì được phát minh ra 
            cho đến nay, về hình dáng, cấu tạo cơ bản của chuột có dây vẫn giữ nguyên so với những con 
            chuột máy tính đầu tiên. Cùng với sự phát triển không ngừng của các hãng máy tính, những con 
            chuột không dây hiện tại có giá rất rẻ. Thậm chí, có những con chuột chỉ có giá từ vài chục 
            nghìn đồng. Trong khi đó, để sở hữu một con chuột không dây cơ bản nhất, các bạn phải bỏ ra 
            tới 200.000 đồng. Giá thành chính là lợi thế đầu tiên của chuột có dây so với chuột không dây.
          </p>
        </span>
        <br/>
        <br/>
        <div className="img-Posts">
          <img src={chutcdy} />
        </div>
        <p className="p-nghieng">
        Chuột máy tính có dây mang đến sự ổn định, chính xác
        </p>
        <span className="span-inf">
          <br/>
          <p>Thứ 2, với những con 
          <NavLink to="/mouse" className="nav-kb"> chuột máy tính có dây</NavLink>, bạn không cần phải lo đến việc đang sử dụng chúng đột 
            ngột hết pin phải thay pin hay đi sạc. Những con chuột có dây được cắm trực tiếp vào máy tính, dùng 
            chính nguồn điện của máy tính để hoạt động. Chính vì vậy chúng mang tính ổn định hơn các loại chuột 
            không dây. Đó cũng chính là lý do hầu hết những loại chuột gaming đều sử dụng công nghệ có dây. Không 
            những đảm bảo về khả năng sử dụng, chúng còn giúp các game thủ điều chỉnh độ nhạy, chỉ số DPI dễ dàng 
            và chính xác hơn.
          </p>
        </span>
        <br/>
        <br/>
        <span className="span-inf">
          <strong>Ưu điểm của chuột không dây so với chuột có dây </strong>
          <br/>
          <p>Đây có thể coi là dạng nguyên thủy của 
          Bên cạnh những nhược điểm cơ bản, chuột không dây không phải thua kém hoàn toàn so với những con chuột máy tính 
          truyền thống. Sự gọn gàng, không dây dợ lằng nhằng chính là điều đầu tiên khiến khách hàng tìm tới những con chuột 
          không dây. Chuột không dây được sản xuất ra với mục đích tiện dụng. Người sử dụng có thể mang chúng đi học, đi làm, 
          đi du lịch hay đi bất cứ đâu vô cùng dễ dàng. Trong những buổi họp, buổi thuyết trình, những con chuột không dây thực 
          sự tỏ ra lợi thế của chúng. Với khoảng cách nhận tín hiệu có thể lên tới 20m, người sử dụng dễ dàng đứng cách xa máy 
          tính và thao tác thoải mái, không bị giới hạn không gian như những chú chuột có dây. Đây cũng là loại chuột laptop 
          được nhiều người lựa chọn bởi tính thuận tiện của nó.
          </p>
        </span>
        <div className="img-Posts">
          <img src={chutkhngdy} />
        </div>
        <p className="p-nghieng">
        Chuột không dây Logitech
        </p>
        <br/>
        <br/>
        <p>
        Bên cạnh đó, hiện nay có những sản phẩm có chức năng đồng bộ cả chuột không dây cùng bàn phím như các sản phẩm của 
        logitech. Các sản phẩm chuột không dây Logitech trong những năm gần đây được rất nhiều khách hàng tin dùng. Không 
        chỉ những dòng sản phẩm dùng cho văn phòng mà những loại chuột không dây chuyên game như Logitech G403, G903 được 
        rất nhiều game thủ lựa chọn kể cả các game thủ chuyên nghiệp khi đi thi đấu.

        </p>
        <h2 className="h2-mota">Vậy nên chọn loại chuột nào ?</h2>
        <p>
        Quả thực đây là câu hỏi rất khó. Tuy nhiên đây sẽ là lời tư vấn hợp lý dành cho bạn:
        <br/>
        <br/>

        + Nếu bạn là người cổ điển, ưa thích sự ổn định, chính xác trong công việc thì chuột có dây là lựa chọn tốt cho bạn
        <br/>
        <br/>
        + Nếu bạn thường xuyên di chuyển, thường xuyên phải ra ngoài, không muốn vướng víu thì hãy lựa chọn chuột không dây

        <br/>
        <br/>
        </p>
        </div>
    </div>
  );
}
