import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet1.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet1() {
  return (
    <div>
      <Helmet>
        <title>Hồ Công Thắng và con đường trở thành CEO T-Booking </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Hồ Công Thắng và con đường trở thành CEO T-Booking"
            postDate="15/1/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/01/0ea86aa9c604375a6e15.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>
              sinh năm 1993, sinh ra từ làng quê nghèo thuộc huyện Tiên Phước,
              tỉnh Quảng Nam. Anh luôn ước mơ giúp những người dân một nắng hai
              sương thoát nghèo, có cuộc sống ấm no…Sau khi học xong bậc đại
              học, anh rẽ hướng sang kinh doanh, rồi từ niềm đam mê cháy bỏng,
              anh quyết định sang kinh doanh giải trí, quản lý trực tiếp
              facebook các ca sĩ, hot face, người nổi tiếng.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/01/7735cd9339a6c9f890b7.jpg"
              alt="CEO Hồ Công Thắng – Người sáng lập Công ty Truyền thông T-Booking"
            />
            <p className={cx("note-pic")}>
              CEO Hồ Công Thắng – Người sáng lập Công ty Truyền thông T-Booking
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Từ những khát vọng ngày đêm nung nấu, cộng với ý chí quyết tâm và
              tầm nhìn nhạy bén đã giúp anh thành lập một Công ty uy tín hàng
              đầu tại Việt Nam – Công ty Truyền thông T-Booking nằm tại 109 Phan
              Bội Châu, thành Phố Tam Kỳ. Từ đây, anh luôn được các anh chị
              người nổi tiếng biết đến anh để truyền thông báo chí hay truyền
              thông youtube.
            </p>
            <strong
              style={{ display: "block", textAlign: "left", width: "100%" }}
            >
              Ước mơ và khát vọng khởi nghiệp:
            </strong>
            <p>
              Vừa qua khỏi thời kỳ khó khăn của gia đình, nhìn những bức ảnh về
              nơi thành phố lúc ấy, anh ao ước có một căn nhà tầng như vậy ở
              quê, để có thể trèo lên tầng mà phóng tầm mắt ra tận bờ sông hay
              tới chân đê đầu làng… Tuổi ấu thơ gắn liền với các công việc cực
              khổ của mọi người nơi đây, bản thân cũng thấm thía nỗi khó nhọc,
              vất vả của bà con nông dân một nắng hai sương. Vì vậy, từ sớm
              trong anh đã hình thành ý thức phải làm gì đó cho mọi người bớt
              khổ.
            </p>
            <p>
              Năm 18 tuổi, anh rời quê hương Quảng Nam ra thành phố Đà Nẵng để
              học đại học. Vừa bước chân ráo chân ướt, ngày đi học, ban đêm tôi
              phải lăn lộn đi kiếm tiền làm thêm để phụ giúp gia đình. Từ làm
              nhân viên phục vụ nhà hàng, khách sạn cho đến sau này sau khi ra
              trường anh đã chọn đủ nghề để làm việc. Lúc đầu, anh vẫn mông lung
              khi ra trường sẽ không biết đi về đâu. Anh phải đi làm nhân viên
              bán hàng, rồi đến nhân viên kinh doanh chạy thị trường, những ngày
              nắng gió thực sự rất khó khăn.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/01/80263941_2600500733401824_2805105435223261184_n.jpg"
              alt="Anh Hồ Công Thắng lúc trước khởi nghiệp."
            />
            <p className={cx("note-pic")}>
              Anh Hồ Công Thắng lúc trước khởi nghiệp.
            </p>
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

export default BaiViet1;
