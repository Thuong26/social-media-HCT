import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet10.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet10() {
  return (
    <div>
      <Helmet>
        <title>Lòng tin của khách hàng làm nên sức mạnh của T- Booking</title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Lòng tin của khách hàng làm nên sức mạnh của T- Booking"
            postDate="2/12/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <div className={cx("entry-summary")}>
            <p>
              <strong>Hiện nay có rất nhiều công ty truyền thông quảng cáo được thành lập, có cả những công ty từ các tập đoàn lớn nước ngoài, và cả những công ty trong nước. Chắc chắn doanh nghiệp nào cũng muốn lựa chọn một công ty có thể đưa thương hiệu ra ngoài thị trường một cách hiệu quả, đem thông điệp của doanh nghiệp tới người tiêu dùng và phải tạo được sự khác biệt, để lại dấu ấn. Chính vì lẽ đó, T-Booking ra đời và có mặt tại Việt Nam nhằm mang lại sự uy tín và chuyên nghiệp nhất cho các đối tác doanh nghiệp.</strong>
            </p>
            <p>
              Công ty TNHH Truyền thông T-Booking hoạt động theo giấy phép đăng ký kinh doanh số 4001216538 do Sở Kế Hoạch Đầu Tư Quảng Nam. Hoạt động trong lĩnh vực tổ chức giới thiệu và xúc tiến thương mại, chuyên phục vụ anh chị người nổi tiếng tại Việt Nam. Địa chỉ trụ sở công ty đặt tại 109 Phan Bội Châu, Phường Tân Thạnh, Thành phố Tam Kỳ, Quảng Nam.
            </p>
            <p>
              Khi môi trường trải qua nhiều thay đổi lớn, các phương thức truyền thông ngày càng trở nên quan trọng. Niềm tin cốt lõi của T-Booking là trở thành cầu nối giữa thương hiệu và người tiêu dùng. Sứ mệnh của T-Booking là tạo ra các thông tin liên lạc có giá trị với thương hiệu và doanh nghiệp bằng cách kết nối trực tiếp với trái tim và tâm trí của người tiêu dùng.
            </p>
              Uy tín và chất lượng là yếu tố hàng đầu tạo nên và giữ vững chỗ đứng của T-Booking trên thị trường truyền thông.
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/12/image.png"
            />
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/12/image-1.png"
            />
            <p className={cx("note-pic")}>
              CEO Hồ Công Thắng – Người sáng lập Công ty Truyền thông T-Booking – Người có kinh nghiệm nhiều năm trong việc hỗ trợ cho các anh chị người nổi tiếng.
            </p>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/12/image-2.png"
            />
            <p className={cx("note-pic")}>
              CEO Hồ Công Thuận – Người đồng sáng lập Công ty Truyền thông T-Booking – Chuyên gia tư vấn về các giải pháp truyền thông hiệu quả.
            </p>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/12/image-5.png"
            />
            <p className={cx("note-pic")}>
              Phó Giám Đốc Kinh Doanh Vũ Trường Giang – Người thiết kế và đưa ra những ý tưởng để phục vụ 5 sao.
            </p>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/12/image-3.png"
            />
            <p className={cx("note-pic")}>
              Quản lý – Trợ lý Giám đốc Bùi Nguyên Trung – Chăm sóc và hỗ trợ khách hàng một cách tỉ mỉ nhất, hướng đến sự chỉn chu và hoàn hảo nhất cho khách hàng.
            </p>
            <img
              style={{ width: "100%" }}
              src="https://s3-ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/12/image-4.png"
            />
            <p className={cx("note-pic")}>
              Quản lý – Trợ lý Giám đốc Nguyễn Văn Nhựt – Luôn mang đến cho khách hàng sự yên tâm nhất khi làm việc.
            </p>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/12/image-6.png"
            />
            <p className={cx("note-pic")}>
              Quản lý Ngô Văn Hoàng Khải – Chuyên gia sáng tạo, mang đến những giải pháp hiệu quả.
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Thế mạnh của T-Booking nằm ở đội ngũ nhân viên trẻ nhiệt huyết, năng động, sáng tạo cùng đội ngũ CTV giàu kinh nghiệm, có chuyên môn cao về lĩnh vực truyền thông, luôn đem đến cho khách hàng những sản phẩm chất lượng. Với khẩu hiệu: “Sáng tạo không ngừng”, T-Booking sẽ nỗ lực nghiên cứu các ý tưởng, giải pháp và cách thức thực hiện nhằm giúp khách hàng nâng cao hiệu quả trong hoạt động, tiến lên mạnh mẽ về phía trước…
            </p>
            <p>Với những thế mạnh sẵn có, T-Booking hứa hẹn sẽ thật sự bùng nổ trong tương lai!</p>
          </div>
          <EntryFooter leaveCommentHref="/features/" />
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default BaiViet10;
