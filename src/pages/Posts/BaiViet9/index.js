import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet9.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet9() {
  return (
    <div>
      <Helmet>
        <title>Công ty Truyền thông T- Booking: Khách hàng trao niềm tin, chúng tôi trao chất lượng</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Công ty Truyền thông T- Booking: Khách hàng trao niềm tin, chúng tôi trao chất lượng"
            postDate="2/11/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/11/7fcddb834df385addce2-850x560.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              <strong>Trong thời đại phát triển với sự bùng nổ công nghệ hiện nay thì lĩnh vực truyền thông đã và đang là một yếu tố có sức hút rất ảnh hưởng đến tất cả mọi mặt trong xã hội.</strong>
            </p>
            <p>Nhận thấy được tầm quan trọng của truyền thông, Ceo Hồ Công Thắng – Hồ Công Thuận đã thành lập công ty T-Booking dựa trên nền tảng 5 sao để phục vụ cho khách hàng. Sau một năm thành lập, công ty T-booking đã có nhiều thành tích xuất sắc đáng kể, luôn mang đến sự hài lòng cho khách hàng.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/11/u.jpg"
            />
          </div>
          <div className={cx("entry-summary")}>
            <p>Đỉnh điểm là sau thời gian đại dịch covid -19 gần đây, T-Booking đã trở nên rất nổi bật với nhiều thành tích đáng kể trong lễ tổng kết của công ty. Để đạt được những thành tích đó, công ty và nhân viên không ngừng cố gắng, nỗ lực để mang đến sự hài lòng cho khách hàng. Với T-Booking luôn xem khách hàng là tiêu chí hàng đầu để phục vụ, lấy “tâm” làm gốc, lấy chữ “tín” làm đầu.</p>
            <p>Dựa vào phương thức hoạt động: “Khách hàng trao cho chúng tôi niềm tin thì chúng tôi sẽ trao cho khách hàng chất lượng tốt nhất, xứng đáng nhất. Bên cạnh đó, T-Booking cũng không ngừng học hỏi, nâng cao chuyên môn, bố trí nhân viên một cách hợp lý để phục vụ cho khách hàng ngày càng tốt hơn”, CEO Hồ Công Thắng – Tổng giám đốc công ty T-Booking chia sẻ.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/11/10aae9975a8992d7cb98.jpg"
            />
          </div>
          <div className={cx("entry-summary")}>
            <p><strong>Khách hàng trao niềm tin…</strong></p>
            <p>Công ty T-Booking đã và đang có rất nhiều số lượng khách hàng lớn cùng nhau hợp tác, kết nối, giúp hàng triệu người nổi tiếng, doanh nhân, các tổ chức doanh nghiệp xây dựng thương hiệu “Vip”. Đặt câu hỏi vì sao lại có nhiều khách hàng tin tưởng và đồng hành đến vậy?</p>
            <p>Đầu tiên, chúng tôi là nơi có nguồn nhân viên trẻ với nhiều kinh nghiệm và ngòi bút sắc bén, làm việc bằng tất cả bằng cái tâm, luôn đặt khách hàng trên hàng đầu. Với những ưu thế của mình, chúng tôi đã giúp nhiều khách hàng thực hiện thành công hàng loạt các yêu cầu, để đưa hình ảnh cá nhân của khách hàng trở nên có giá trị và nổi tiếng hơn, giúp họ thành công và thăng tiến hơn trong sự nghiệp nhờ truyền thông báo chí của công ty.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/11/7f863cbcaba55dfb04b4.jpg"
            />
          </div>
          <div className={cx("entry-summary")}>
            <p>Vì thế, để khách hàng trao niềm tin, trước hết công ty phải đảm bảo chữ “Tâm” trong kinh doanh. GĐ Hồ Công Thắng chia sẻ: “quan điểm của tôi còn thể hiện qua sự nỗ lực không ngừng trong việc thực hiện những cam kết của công ty với khách hàng về chất lượng sản phẩm/dịch vụ, sự minh bạch và chính xác về thông tin, giá cả, hợp đồng… Tóm lại, chữ “Tâm” chính là đạo đức kinh doanh được xem như nền tảng mà mỗi công ty đối đãi với khách hàng cũng như đối tác của mình.</p>
            <p>Cuối cùng, trong chữ “Tín”, không chỉ kinh doanh mới cần coi trọng chữ TÍN, mà trong tất cả mọi chuyện, mọi mối quan hệ, chữ TÍN cũng nên được đặt lên hàng đầu cho mọi mục tiêu sống.</p>
            <p><strong>Chúng tôi trao chất lượng…</strong></p>
            <p>Chúng tôi luôn nỗ lực, không ngừng cố gắng đế tạo ra những những sản phẩm có giá trị, những bài viết làm hài lòng khách hàng đảm bảo lợi ích cho đôi bên. Công ty truyền thông báo chí T–Booking đã được khách hàng tín nhiệm, thường xuyên lựa chọn là các đơn vị truyền thông, quảng bá như các MV: Phim ca nhạc Yêu một mình (Mai Trần Lâm, Quang Tèo, Trần Đức, Thu Hà, Ngọc Huyền), Em quá dại khờ (Nguyễn Thạc Bảo Ngọc), Cũ (Đỗ Minh Quân), Thích của lạ (Khưu Huy Vũ), Tao sợ gì mày (Sóc Nâu), Musée d’Art – Tran Hung Pre-Fall 2021 – London Fashion Week (Nhà thiết kế Trần Hùng),… Nhờ vào đó, công ty đã đồng hành cùng rất nhiều doanh nhân, ca sĩ, nổi tiếng và tạo được tiếng vang trong lĩnh vực truyền thông.</p>
            <p>Công ty T-Booking là nơi mà các nhân viên trẻ được thỏa sức bùng cháy hết mình vì công việc với đam mê của mình. Mỗi một nhân viên vẫn luôn giữ trong lòng nhiệt huyết, tài năng, luôn cố gắng, cống hiến hết mình trong công việc và tình yêu đặc biệt với vị trí họ tiếp nhận.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3-ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/11/ksj.jpg"
            />
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/11/f4e891c7f3633a3d6372-scaled.jpg"
            />
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Giám Đốc T-Booking – Hồ Công Thắng chia sẻ:” Tôi thấy tự hào là tạo ra văn hóa làm việc “intelligent teamwork” (làm việc nhóm thông minh), nơi mọi người phải sử dụng “trí não” thay vì “cơ bắp” để giảm tối thiểu áp lực nhưng vẫn đảm bảo tối đa hiệu quả trong tất cả các đầu việc. Ngoài ra, tôi cũng chú trọng phong cách làm việc “winning team”, đề cao sự cố gắng thi đua để hoàn thành tốt hơn kỳ vọng các công việc được giao giữa các đội nhóm. Tất cả mọi người tại T-Booking phải là một tập thể liên kết và ủng hộ nhau, và phương pháp quản trị của tôi cũng xoay quanh hai chữ “teamwork” với hy vọng tạo ra một môi trường làm việc mà ngay cả bản thân người quản lý cũng phải luôn cảm thấy thoải mái khi bước vào.”
            </p>
          </div>
          <EntryFooter leaveCommentHref="/features/" />
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default BaiViet9;
