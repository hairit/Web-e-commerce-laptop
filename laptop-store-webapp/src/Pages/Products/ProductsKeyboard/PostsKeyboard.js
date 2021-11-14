import React from "react";
import bnphmc from "../../../Images/bnphmc.png";
import bnphmc1 from "../../../Images/bnphmc1.png";
import bnphmc2 from "../../../Images/bnphmc2.png";
import bnphmc3 from "../../../Images/bnphmc3.png";
import checked_32px from "../../../Images/checked_32px.png";

import { NavLink } from "react-router-dom";

export default function PostsKeyboard() {
  return (
    <div className="posts">
      <div className="panel-Posts">
        <h2 className="h2-mota">TẠI SAO BẠN NÊN MUA BÀN PHÍM CƠ ?</h2>
        <p>
          Thời đại 4.0 phát triển, hầu hết mọi người chúng ta đều tiếp xúc với
          máy tính hàng ngày. Và để chúng ta có thể làm việc trên máy tính chúng
          ta phải cần tới chuột và bàn phím. Lấy ví dụ như một nhân viên văn
          phòng, ngày đi làm 8 tiếng, 1 tuần làm 6 ngày thì chúng ta đã có ít
          nhất 48 tiếng sử dụng chúng , chưa kể đến thời gian giải trí và chơi
          game. Có bao giờ bạn từng cảm thấy nhàm chán vì những chiếc bàn phím
          cơ bản, cảm giác ấn không đã tay, nút được nút không hay nhìn không
          phù hợp với góc chơi game của mình. Tôi đoán chắc chắn là có rồi. Và
          đó chính là lúc bạn nên nâng cấp cho mình chiếc bàn phím cơ chất lượng
          rồi đấy.
        </p>
        <div className="img-Posts">
          <img src={bnphmc} />
        </div>
        <p className="p-nghieng">
          Đã đến lúc bạn nên đầu tư cho mình bộ bàn phím cơ rồi đấy{" "}
        </p>
        <p>Gợi ý một số lợi ích khi sở hữu bàn phím cơ nhé :</p>
        <ul className="posts-menu">
          <li>
            <img src={checked_32px} />
            <span>
              Tiếng clicky vui tai khi gõ, cảm giác như đang chơi 1 bản piano
              vậy
            </span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>
              Keycap đủ màu, tùy biến theo ý thich. Cẩn thận, ma túy nhựa đấy
              =))
            </span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>Thoải mái gỡ phím ra vệ sinh</span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>Độ bền cao, độ chính xác cao</span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>Có nhiều loại, nhiều kích cỡ</span>
          </li>
          <li>
            <img src={checked_32px} />
            <span>Có LED đủ màu</span>
          </li>
        </ul>
        <p>
          Đảm bảo với bạn khi đã sử dụng phím cơ rồi bạn sẽ muốn ném ngay đi
          chiếc bàn phím cũ của mình.
        </p>
        <h2 className="h2-mota">Cảm giác bấm cực đã</h2>
        <p>
          Đầu tiên và cũng là lý do dễ dàng nhận thấy nhất chính là cảm giác
          bấm. Ở các bàn phím màng cao su tổng hợp Membrane thông thường, người
          dùng phải tốn khá nhiều sức để bấm nút phím xuống toàn bộ hành trình
          thì máy tính mới nhận, dẫn tới việc bạn đánh máy rất chậm. Nhưng ở các
          bàn phím cơ, với thiết kế theo switch như ALPS, Cherry MX, Kailh,
          Gateron, Razer và Topre, bạn hoàn toàn có thể trải nghiệm cảm giác
          “múa phím” khi chỉ cần bấm đủ lực là đủ. Điều này giúp tăng tốc độ bấm
          nhanh hơn gần gấp đôi so sánh với các bàn phím màng cao su.
        </p>
        <div className="img-Posts">
          <img src={bnphmc1} />
        </div>
        <p className="p-nghieng">Cảm giác bấm cực đã</p>
        <p>
          Với bàn phím cơ, switch (công tắc của mỗi phím) của Cherry là được ưa
          chuộng nhất với 4 loại switch thông dụng là blue, brown, red và black.
          Với Cherry MX Blue, bạn sẽ có được phản hồi phím dạng tactile clicky,
          vừa có một khấc để báo hiệu đã nhận phím lại vừa có âm thanh click
          giòn, vui tai. Đây là một trong những dòng switch rất được ưa chuộng
          vì cho cảm giác khác biệt hoàn toàn với bàn phím cao su. Nhược điểm là
          switch này cực kì ồn ào và khả năng cao bạn sẽ nhận được những cái
          nhăn mặt từ những người xung quanh.
        </p>
        <h2 className="h2-mota">
          Thoải mái gỡ phím, tùy biến theo phong cách riêng của bạn
        </h2>
        <p>
          Đây là một trong những lý do cực kỳ quan trọng khiến cho rất nhiều bạn
          trẻ mong muốn sở hữu một chiếc{" "}
          <NavLink to="/keyboard" className="nav-kb">
            bàn phím cơ
          </NavLink>
          . Các bàn phím cơ có các khung phím tương đương nhau, bạn chỉ cần thay
          đổi các nút phím là sẽ có một chiếc bàn phím hoàn toàn mới và cực kỳ
          độc, không đụng hàng. Điều đó sẽ giúp bạn không bao giờ cảm thấy nhàm
          chán khi nhìn chiếc bàn phím của mình. Có rất nhiều cộng đồng trao đổi
          mua bán keycap trên mạng xã hội, vì vậy hãy sắm cho mình vài bộ key
          cap để thay đổi nhé !
        </p>
        <div className="img-Posts">
          <img src={bnphmc2} />
        </div>
        <p className="p-nghieng">
          Bàn phím gaming dễ dàng tùy biến theo phong cách của riêng bạn
        </p>
        <h2 className="h2-mota">Độ bền cao</h2>
        <p>
          Với bàn phím cơ, switch (công tắc của mỗi phím) của Cherry là được ưa
          chuộng nhất với 4 loại switch thông dụng là blue, brown, red và black.
          Với Cherry MX Blue, bạn sẽ có được phản hồi phím dạng tactile clicky,
          vừa có một khấc để báo hiệu đã nhận phím lại vừa có âm thanh click
          giòn, vui tai. Đây là một trong những dòng switch rất được ưa chuộng
          vì cho cảm giác khác biệt hoàn toàn với bàn phím cao su. Nhược điểm là
          switch này cực kì ồn ào và khả năng cao bạn sẽ nhận được những cái
          nhăn mặt từ những người xung quanh.
        </p>
        <br />
        <p>
          Trong khi đó, các bàn phím màng cao su thông thường chỉ chịu tải đc
          tầm 3-5 triệu lần bấm là bắt đầu xuất hiện lỗi “double click” hay mất
          sóng nút. Điều này gây khá nhiều bất cập cho người dùng, đặc biệt là
          những người thường xuyên dùng bàn phím để đánh máy như nhà báo, nhà
          văn hoặc nhân viên văn phòng.
        </p>
        <p>
          Bạn đã bao giờ tự hỏi mình nếu bạn thực sự cần mọi phím trên bàn phím
          hiện tại của bạn? Hãy nghĩ về nó, có thể bạn không thực sự sử dụng bàn
          phím số hoặc chỉ ước rằng bàn phím của bạn nhỏ hơn. Điều tuyệt vời của
          bàn phím cơ là chúng có nhiều kích cỡ và bố cục khác nhau. Chúng
          thường được phân loại là phần trăm của bàn phím kích thước đầy đủ.
        </p>
        <h2 className="h2-mota">Đa dạng kích cỡ, tùy chọn</h2>
        <p>
          Bàn phím có LED cũng là một lý do khiến không ít người dấn thân vào
          con đường chơi bàn phím cơ. Và thực tế, chính tôi cũng là một người
          bắt đầu với bàn phím cơ vì lý do đó. Tuy nhiên, nếu bạn không phải là
          một tín đồ yêu thích màu mè RGB thì bạn hoàn toàn có thể tắt chúng đi.
          Hay nếu đơn giản hơn, lựa chọn bàn phím có LED nhẹ hay LED đơn sắc.
          Thậm chí nếu thích, bạn có thể lựa chọn bàn phím không LED.
        </p>
        <div className="img-Posts">
          <img src={bnphmc3} />
        </div>
        <p className="p-nghieng">Đèn LED đa dạng</p>
        <p>
          Trên đây là một số ưu điểm vượt trội, vậy bạn đã quyết định đầu tư cho
          mình một bộ bàn phím cơ chưa? Nếu còn lăn tăn về giá cả thì cũng đừng
          quá lo lắng, hiện{" "}
          <NavLink to="/" className="nav-kb">
            LAPPEE
          </NavLink>{" "}
          có rất nhiều loại phím cơ giá rẻ, chất lượng tương đối tốt và hoạt
          động ổn định cho trải nghiệm ở mức khá mà lại vừa túi tiền.
          <br />
          <br />
        </p>
        <p>
          Tham khảo các dòng bàn phím cơ :
          <br />
          <br />
          <NavLink to="/keyboard" className="nav-kb">
            Bàn phím cơ
          </NavLink>{" "}
          <br />
          <br />
          Hãy đến và trải nghiệm với chúng tôi nhé
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
