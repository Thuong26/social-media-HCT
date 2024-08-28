import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet8.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet8() {
    return (
        <div>
            <Helmet>
                <title>công ty truyền thông t-booking – nâng tầm thương hiệu việt</title>
            </Helmet>
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <CarouselOverlay
                        title="công ty truyền thông t-booking – nâng tầm thương hiệu việt"
                        postDate="2/11/2021"
                        customOverlay={cx(styles.customoverlay)}
                    />
                    <img
                        width="100%"
                        src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/11/neh-768x872.jpg"
                    ></img>
                    <div className={cx("entry-summary")}>
                        <b>
                            Công ty truyền thông T- Booking được thành lập vào tháng 9 năm 2020 bởi CEO Hồ Công Thắng và CEO Hồ Công Thuận tại thành phố Tam Kỳ, Quảng Nam. Với những mục tiêu, phương thức hoạt động rõ ràng, công ty đang không ngừng phát triển và khẳng định vị thế trong lĩnh vực truyền thông.
                        </b>
                        <p>
                            Trong thời đại bùng nổ công nghệ thông tin hiện nay, công ty truyền thông T- Booking đã tận dụng internet trở thành công cụ cho hoạt động truyền thông, quảng bá sản phẩm, thương hiệu cho các doanh nghiệp, tổ chức và nâng tầm sức ảnh hưởng cho nhiều nhân vật nổi tiếng.
                        </p>
                        <p>
                            Dịch vụ chính được công ty truyền thông T-Booking kinh doanh trong giai đoạn hiện nay đó là phục vụ cho các nhân vật nổi tiếng và các doanh nghiệp trong lĩnh vực truyền thông báo chí. Nhờ sự phục vụ, các anh chị người nổi tiếng ngày càng được biết đến rộng rãi và được người hâm mộ yêu mến hơn, các doanh nghiệp từ đây cũng xây dựng nên thương hiệu có tiếng trong lĩnh vực của mình.
                        </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/11/a.jpg"
                        />
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/11/ss.png"
                        />
                    </div>
                    <div className={cx("entry-summary")}>
                        Những nhân vật nổi tiếng từng hợp tác với T- Booking có thể kể đến như diễn viên Huỳnh Anh, ca sĩ Y Thanh,  nhà sản xuất – đạo diễn phim Hoàng Duy, người mẫu – diễn viên Nguyễn Trang Nhung, youtuber Ngô Hải Yến, diễn viên hài Lê Uy Khâm, đạo diễn Phạm Nguyên Bắc, Lâm Gia Khang, Đinh Y Nhung, Kim Ny Ngọc, Tracy Thư Lương, Tu-Anh Nguyen, Võ Ngọc Hạnh (Vi Nhạn Ngọc), ca sĩ Triệu Khắc Vinh, … Trong thời gian qua, công ty truyền thông T- Booking không ngừng nâng cao chất lượng dịch vụ, chăm sóc khách hàng, đem lại sự hài lòng đến cho mỗi khách hàng. Chính vì sự tận tâm, tận lực ấy mà công ty đã nhận về không ít sự khen ngợi từ khách hàng.
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/11/z2898953740686_65bc8461de4ecaa24d9e3135a8ab8cbc.jpg"
                            alt="Công ty Truyền Thông T Booking được Nhà văn Đặng Thiên Phong ưu ái tặng sách"
                        />
                        <p className={cx("note-pic")}>
                            Công ty Truyền Thông T Booking được Nhà văn Đặng Thiên Phong ưu ái tặng sách
                        </p>
                    </div>
                    <div className={cx("entry-summary")}>
                        <p className={cx("entry-summary-heading")}>
                            Mục tiêu trong thời gian tới của công ty đó là:
                        </p>
                        <ul>
                            <li>Thâm nhập sâu vào thị trường quảng cáo và truyền thông cho các cá nhân và doanh nghiệp.</li>
                            <li>Mở rộng thị phần và nâng cao khả năng đáp ứng thị trường ngày càng cao như hiện nay.</li>
                            <li>Nâng cao khả năng chuyên môn và phong cách phục vụ càng chuyên nghiệp hơn cho mỗi nhân viên.</li>
                            <li>Mở rộng đối tác hợp tác.</li>
                            <li>Hướng đến trở thành một trong những công ty truyền thông hàng đầu trong thị trường này.</li>
                        </ul>
                        <p>
                            Luôn đặt sự hài lòng của khách hàng lên hàng đầu là định hướng quan trọng nhất đối với công ty. Trong mỗi mối quan hệ hợp tác, công ty đều chú trọng quan tâm đến nhu cầu của từng khách hàng, từ đó tư vấn và thực hiện những yêu cầu ấy cho đến khi khách hàng hài lòng về sản phẩm mà công ty tạo ra. Thái độ phục vụ chuyên nghiệp, hiệu quả là điều mà CEO Hồ Công Thắng yêu cầu đối với mỗi nhân viên.
                            <br></br>
                            Chính nhờ tính chuyện nghiệp, uy tín, chất lượng mà công ty truyền thông T- Booking ngày càng phát triển bùng nổ, đem đến sự thành công mỹ mãn cho khách hàng.
                            <br></br>
                            Đến với T- Booking, bạn sẽ đạt được mục đích truyền thông của mình và có sự phục vụ tốt nhất!
                        </p>
                    </div>

                    <EntryFooter leaveCommentHref="/features/" />
                    <FormPost />
                </div>
            </div>
        </div>
    );
}

export default BaiViet8;
