import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet11.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet11() {
    return (
        <div>
            <Helmet>
                <title>Công Ty Truyền Thông T-Booking Và Sứ Mệnh Phục Vụ 5 Sao Cho Các Kol Tại Việt Nam</title>
            </Helmet>
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <CarouselOverlay
                        title="Công Ty Truyền Thông T-Booking Và Sứ Mệnh Phục Vụ 5 Sao Cho Các Kol Tại Việt Nam"
                        postDate="30/1/2021"
                        customOverlay={cx(styles.customoverlay)}
                    />
                    <img
                        width="100%"
                        src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/n9706251a5c5559b0cd4.jpg"
                    ></img>
                    <div className={cx("entry-summary")}>
                        <b>
                            Trong thời đại kinh tế thị trường như ngày nay, các công ty truyền thông rất cần thiết trong việc giúp các khách hàng xây dựng thương hiệu cá nhân, giới thiệu sản phẩm của mình đến gần nhất với mọi người. Không nằm ngoài xu thế đó, Công ty TNHH Truyền thông T-Booking được thành lập với tiêu chuẩn phục vụ 5 sao nhằm phục vụ cho khách hàng hiệu quả.
                        </b>
                        <p>
                            Công ty TNHH Truyền thông T-Booking hoạt động theo giấy phép đăng ký kinh doanh số 4001216538 do Sở Kế Hoạch Đầu Tư Quảng Nam. Hoạt động trong lĩnh vực tổ chức giới thiệu và xúc tiến thương mại, chuyên phục vụ anh chị người nổi tiếng tại Việt Nam. Địa chỉ trụ sở công ty đặt tại 109 Phan Bội Châu, Phường Tân Thạnh, Thành phố Tam Kỳ, Quảng Nam.                        </p>
                        <p>
                            Công ty TNHH Truyền thông T-Booking luôn phấn đấu không ngừng nâng cao chất lượng phục vụ 5 sao cho các anh chị người nổi tiếng về mọi mặt trong lĩnh vực đặc biệt truyền thông về báo chí nhằm xây dựng thương hiệu cá nhân, doanh nghiệp… góp phần đạt mục tiêu trở thành công ty uy tín nhất cả nước.
                        </p>
                        <p>
                            Tầm nhìn và sứ mệnh, trong xu hướng hội nhập và môi trường cạnh tranh trên lĩnh vực mạng xã hội như hiện nay, T-Booking luôn không ngừng xây dựng và phát huy hơn nữa mọi thế mạnh của mình để trở thành nhà cung cấp dịch vụ truyền thông chất lượng cao với chi phí hiệu quả đáp ứng một cách tốt nhất nhu cầu của khách hàng. T-Booking định hướng phát triển trở thành nhà cung cấp dịch vụ chăm sóc khách hàng lớn nhất tại Việt Nam về cả quy mô và chất lượng.
                        </p>
                        <p>
                            Để đạt được mục tiêu này, T-Booking cam kết:
                            <ul>
                                <li>Luôn hướng đến và mong muốn phục vụ 5 sao cho các khách hàng, mang đến sự hài lòng cao nhất để khách hàng yên tâm hợp tác làm việc lâu dài.</li>
                                <li>Tập trung đầu tư hệ thống cơ sở hạ tầng vật chất kỹ thuật hiện đại, tiện nghi.</li>
                                <li>Đa dạng hóa các gói truyền thông, dịch vụ bảo hành cao và an toàn nhất nhằm đáp ứng nhu cầu ngày càng cao của khách hàng.</li>
                                <li>Xây dựng và phát triển đội ngũ nhân viên làm việc chuyên nghiệp, thân thiện và hiệu quả.</li>
                            </ul>

                        </p>
                        <p>Những nguyên tắc, chuẩn mực quy định và điều hoà mọi hoạt động kinh doanh của Công ty TNHH Truyền thông T-Booking:</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/Core-value-1.jpg"
                        />
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/7735cd9339a6c9f890b7-768x1024-1.jpg"
                        />
                        <a href="https://www.facebook.com/hocongthang.account" className={cx("note-pic")} style={{ textDecoration: 'none' }}>
                            CEO Hồ Công Thắng – Người sáng lập Công ty Truyền thông T-Booking – Người có kinh nghiệm nhiều năm trong việc hỗ trợ cho các anh chị người nổi tiếng.
                        </a>
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
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/02/12a-scaled.jpg"
                        />
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/a8cc4a9033df363aa2c.jpg"
                        />
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/02/1c-scaled.jpg"
                        />
                        <img
                            style={{ width: "100%" }}
                            src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/ct.jpg"
                        />

                    </div>
                    <div className={cx("entry-summary")}>
                        <p>
                            Giữa hàng trăm công ty truyền thông hiện nay, để giữ vững được chỗ đứng trên thị trường, Công ty TNHH Truyền thông T-Booking lấy uy tín, chất lượng làm yếu tố hàng đầu, mang uy tín 5 sao đến với khách hàng hài lòng nhất.
                        </p>
                    </div>
                    <EntryFooter leaveCommentHref="/features/" />
                    <FormPost />
                </div>
            </div>
        </div>
    );
}

export default BaiViet11;
