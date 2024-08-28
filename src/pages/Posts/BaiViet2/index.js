import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet2.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);
const imageData = [
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/01/y1.jpg",
    alt: "Cũ (Đỗ Minh Quân) đạt mốc 1,8 triệu lượt xem và 1,5 N bình luận với lượt thích 7,2 N.",
    note: "Cũ (Đỗ Minh Quân) đạt mốc 1,8 triệu lượt xem và 1,5 N bình luận với lượt thích 7,2 N.",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/01/y2.jpg",
    alt: "Musée d’Art – Tran Hung Pre-Fall 2021 – London Fashion Week (Nhà thiết kế Trần Hùng) với 1 triệu lượt xem và 22 N lượt thích.",
    note: "Musée d’Art – Tran Hung Pre-Fall 2021 – London Fashion Week (Nhà thiết kế Trần Hùng) với 1 triệu lượt xem và 22 N lượt thích.",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/01/y3.jpg",
    alt: "Thích của lạ (Khưu Huy Vũ) với 857 N lượt xem và 3,8N lượt thích cùng với 1,6 N bình luận.",
    note: "Thích của lạ (Khưu Huy Vũ) với 857 N lượt xem và 3,8N lượt thích cùng với 1,6 N bình luận.",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/01/y4.jpg",
    alt: "Tao sợ gì mày (Sóc Nâu) với 796 N lượt xem và 22 N lượt thích cùng với 586 bình luận.",
    note: "Tao sợ gì mày (Sóc Nâu) với 796 N lượt xem và 22 N lượt thích cùng với 586 bình luận.",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/02/de70a5ffe5cc16924fdd.jpg",
    alt: "Nàng thơ (Sailor.D) với 749 N lượt xem và 276 bình luận.",
    note: "Nàng thơ (Sailor.D) với 749 N lượt xem và 276 bình luận.",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/02/a36154e314d0e78ebec1.jpg",
    alt: "Khi nào anh ghé chơi (Phương Trinh Jolie ft Mr White) với 475 N lượt xem và 569 bình luận.",
    note: "Khi nào anh ghé chơi (Phương Trinh Jolie ft Mr White) với 475 N lượt xem và 569 bình luận.",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/02/c422bf9bffa80cf655b9.jpg",
    alt: "Tại sao em buồn? (Sóc Nâu x Dưa Hấu x Quyên) với 398 N lượt xem và 389 bình luận.",
    note: "Tại sao em buồn? (Sóc Nâu x Dưa Hấu x Quyên) với 398 N lượt xem và 389 bình luận.",
  },
];
function BaiViet2() {
  return (
    <div>
      <Helmet>
        <title>
          {" "}
          Cùng tìm hiểu về phương thức truyền thông trên youtube có hiệu quả như
          thế nào với CEO T-Booking Hồ Công Thắng{" "}
        </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Cùng tìm hiểu về phương thức truyền thông trên youtube có hiệu quả như thế nào với CEO T-Booking Hồ Công Thắng"
            postDate="15/1/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/showbiz24h.com.vn/wp-content/uploads/2021/01/youtube_800x450-800x450-1.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>
              – Tổng giám đốc điều hành Công ty truyền thông T-Booking, được
              biết đến là một trong những người chuyên hỗ trợ truyền thông
              Youtube cho nhiều người nổi tiếng. Truyền thông có ảnh hưởng rất
              lớn đến mọi vấn đề của xã hội. Truyền thông tác động đến nhận thức
              của công chúng, từ nhận thức sẽ tác động đến hành động và ứng xử
              của công chúng. Khi mà một ứng xử của công chúng được lặp đi lặp
              lại sẽ thành nề nếp, tập quán cuối cùng trở thành những chuẩn mực
              của xã hội. Nhờ đến truyền thông mà những vấn đề này được xã hội
              chấp nhận và lan truyền nhanh trong công chúng.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/01/7735cd9339a6c9f890b7.jpg"
              alt="Hồ Công Thắng  – Tổng giám đốc điều hành Công ty truyền thông T-Booking"
            />
            <p className={cx("note-pic")}>
              Hồ Công Thắng – Tổng giám đốc điều hành Công ty truyền thông
              T-Booking
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Hiện nay, Youtube là trang mạng xã hội dẫn đầu về số người sử dụng
              nhất nhiều tiện ích, đặc biệt trong việc kết nối thông tin, những
              ứng dụng giải trí. Các hoạt động trên mạng xã hội này xuất hiện
              ngày càng nhiều, trong đó, không thể không kể đến công việc hỗ trợ
              chạy truyền thông cho những nghệ sĩ, gương mặt nổi tiếng.
            </p>
            <p>
              Lĩnh vực âm nhạc lại có những chuyển biến mới với sự phát triển
              của thị trường cũng như sự nhanh nhạy của một số ca sĩ nổi tiếng.
              Trong một vài năm trở lại đây, số lượng MV Việt Nam “chiếm sóng”
              các mạng xã hội như YouTube hay các trang âm nhạc trực tuyến đã
              không còn là điều hiếm gặp.
            </p>
            <p>
              Tính đến hiện tại, anh{" "}
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>{" "}
              đã giúp rất nhiều nghệ sĩ, người nổi tiếng đạt được nhiều kết quả
              đáng mong đợi. Trong đó có thể kể đến thành công của Youtube như
              các MV: Cũ (Đỗ Minh Quân), Thích của lạ (Khưu Huy Vũ), Tao sợ gì
              mày (Sóc Nâu), Musée d’Art – Tran Hung Pre-Fall 2021 – London
              Fashion Week (Nhà thiết kế Trần Hùng)…là minh chứng cho kết luận
              nêu trên.
            </p>
            <p>
              Đặc biệt, “Cũ” của ca sĩ Đỗ Minh Quân khiến nhiều người nghe nhạc
              phải trầm trồ khi video có độ dài gần 8 phút nhưng nội dung câu
              chuyện cho tới bố trí dàn dựng MV rất giống một bộ phim dài tập
              rất hay và ý nghĩa.
            </p>
            <p>
              Nhà thiết kế Trần Hùng cho ra mắt bộ sưu tập Musée d’Art lần đầu
              tiên trình diễn tại Việt Nam với sự kiện Pre-Fall 2021 thuộc khuôn
              khổ London Fashion Week. Với tham gia của rất nhiều người nổi
              tiếng tại Việt Nam như siêu mẫu Thanh Hằng, Hương Ly, Cường Đô La,
              ca sĩ Thủy Tiên, diễn viên Midu…và không thể thiếu sự góp mặt của
              CEO Hồ Công Thắng. Anh không chỉ tham dự tại sự kiện mà còn hỗ trợ
              truyền thông cho nhà thiết kế Trần Hùng.
            </p>
            <p>
              Ngoài ra, ca sĩ Khưu Huy Vũ cũng được anh hỗ trợ truyền thông cho
              MV ca nhạc của mình. Với bài hát “Thích của lạ” khi vừa mới ra mắt
              được hưởng ứng tích cực từ cộng đồng mạng.
            </p>
          </div>
          <div>
            {imageData.map((image, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  style={{ width: "100%" }}
                  src={image.src}
                  alt={image.alt}
                />
                <p className={cx("note-pic")}>{image.note}</p>
              </div>
            ))}
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Anh nghĩ không lẽ cuộc đời cứ mãi như vậy, cuộc sống bấp bênh,
              niềm đam mê thôi thúc anh quyết định sang nước Nga. Dần dần vấp
              ngã hết lần này đến lần khác, học hỏi nhiều kinh nghiệm làm việc
              nhiều năm, vừa tham gia vào các lớp đào tạo, gặp gỡ các doanh nhân
              thành đạt để học hỏi kinh nghiệm. Khi về nước anh gom góp vốn
              liếng để mở công ty, áp dụng những kiến thức đã học hỏi và tạo
              được khối tài sản riêng. Sau đó anh thành lập ra Công ty Truyền
              Thông T-Booking.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/01/12196254_859659140819334_8862152469889879419_n.jpg"
              alt="Anh Hồ Công Thắng tại Khabarovsk, Nga."
            />
            <p className={cx("note-pic")}>
              Anh Hồ Công Thắng tại Khabarovsk, Nga.
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <strong
              style={{ display: "block", textAlign: "left", width: "100%" }}
            >
              Con đường khởi nghiệp thành công:
            </strong>
            <p>
              Khi đã làm chủ và điều hành một công ty và học hỏi nhiều điều mới
              từ các công ty khác, được mở rộng tầm nhìn và tự rút kinh nghiệm
              cho bản thân. Với những người trẻ muốn khởi nghiệp, anh khuyên
              thay vì tự mày mò ra công thức thành công thì học hỏi từ những mô
              hình thành công hoặc người đi trước để học hỏi từ kinh nghiệm của
              họ. Nhờ vậy có thể rút ngắn con đường thành công của bản thân.
            </p>
            <p>
              Việc anh Hồ Công Thắng khởi nghiệp từ ngày đầu cho đến tạo dựng
              công ty uy tín – phục vụ 5 sao cho khách hàng đều nhờ vào ý chí,
              bản lĩnh đứng lên sau những thất bại của mình. Đến thời điểm hiện
              tại, anh đang thực hiện làm thế nào để giúp nhiều người có thể tìm
              được hạnh phúc đích thực là điều anh cảm thấy vui nhất.
            </p>
            <p>
              Dù trong hoàn cảnh nào, anh cũng không quay đầu khi gặp khó khăn,
              chưa bao giờ từ bỏ những ý tưởng ban đầu, tinh thần khởi nghiệp
              của một người trẻ như anh Thắng chính là điểm sáng lớn để nhiều
              người khác học hỏi. Chúc cho anh Thắng thực hiện được ước mơ cuộc
              đời mình.
            </p>
          </div>
          <EntryFooter leaveCommentHref="/features/" />
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default BaiViet2;
