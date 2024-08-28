import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Sidebar({ className, classNameBusiness, classNameFashion, classNameFeatured, classNamePhotography, classNameTravel, classNameUncategorized }) {
    return (
        <div className={cx("sidebar-container", className)}>
            <div className={cx("side-bar-right")}>
                <div className={cx('widget-title')}> Giới thiệu </div>
                <img
                    width="240"
                    height="240"
                    src="./Pic/sep1.jpg"
                    className={cx('portrait-author')}
                    alt="Felix"
                    decoding="async"
                    fetchpriority="high"
                />
                <p className={cx('inf-author')}>Hồ Công Thắng sinh năm 1993, sinh ra từ làng quê nghèo thuộc huyện Tiên Phước, tỉnh Quảng Nam.
                    <br /> Là cố vấn thương hiệu - báo chí - youtube làm việc trực tiếp tại 2 văn phòng công ty hoặc facebook tick xanh tránh giả mạo.

                </p>
                <div className={cx("image-list-container")}>
                    <ul className={cx("image-list")}>
                        <li><a href='#' target='_blank'><img src="./Pic/sep2.png" /></a></li>
                        <li><a href='#' target='_blank'><img src="./Pic/congty3.jpg" /></a></li>
                    </ul>
                </div>
                <div className={cx('widget-title')}> Liên hệ </div>
                <div className={cx('social-menu-container')} >
                    <ul className={cx('list-social')}>
                        <li className={cx('icon')}>
                            <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info" title="Facebook" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className={cx('icon')}>
                            <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info" title="Twitter" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className={cx('icon')}>
                            <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li className={cx('icon')}>
                            <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info" title="Pinterest" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faPinterestP} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('widget-title')}> Trang web </div>
                <p className={cx('inf-author')}>
                    <li className={cx('icon')}>
                        <a href="https://www.facebook.com/tbooking.vn" title="Facebook" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} /> Fanpage chính của công ty T-Booking.
                        </a>
                    </li>
                </p>
                <a href='#'>
                    <img
                        style={{ marginBottom: "30px", width: "100%" }}
                        src='./Pic/sep2.png'
                        alt=''
                    />
                </a>
                <div className={cx('widget-title')}> Bài viết khác </div>
                <div className={cx('entry-recent-posts')}>
                    <a href='#'>
                        <img
                            src='./Pic/sep1.jpg'
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='https://gocgiaitri.com.vn/bai-viet/ho-cong-thang-va-con-duong-tro-thanh-ceo-t-booking' className={cx("entry-title")}>Hồ Công Thắng và con đường trở thành CEO T-Booking</a>
                        <a href="#" className={cx("entry-post-on")}>15 Tháng Một, 2021</a>
                    </div>
                </div>
                <div className={cx('entry-recent-posts')}>
                    <a href='#'>
                        <img
                            src='./Pic/sep4.jpg'
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='https://showbiz24h.com.vn/bai-viet/cung-tim-hieu-ve-phuong-thuc-truyen-thong-tren-youtube-co-hieu-qua-nhu-the-nao-voi-ceo-t-booking-ho-cong-thang' className={cx("entry-title")}>Cùng tìm hiểu về phương thức truyền thông trên YouTube có hiệu quả như thế nào với CEO T-Booking Hồ Công Thắng</a>
                        <a href="#" className={cx("entry-post-on")}>15 Tháng Một, 2021</a>
                    </div>
                </div>
                <div className={cx('entry-recent-posts')} style={{ borderBottom: 'none' }}>
                    <a href='#'>
                        <img
                            src='./Pic/sep3.jpg'
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='https://kenh24h.net/bai-viet/doanh-nhan-ho-cong-thang-nguoi-nam-giu-bi-quyet-khoi-nghiep-thanh-cong' className={cx("entry-title")}>Doanh nhân Hồ Công Thắng- Người nắm giữ “bí quyết” khởi nghiệp thành công.</a>
                        <a href="#" className={cx("entry-post-on")}>3 Tháng Mười Hai, 2021</a>
                    </div>
                </div>
                <div className={cx('entry-recent-posts')} style={{ borderBottom: 'none' }}>
                    <a href='#'>
                        <img
                            src='./Pic/congty1.png'
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='https://kenh24h.net/bai-viet/doanh-nhan-ho-cong-thang-nguoi-nam-giu-bi-quyet-khoi-nghiep-thanh-cong' className={cx("entry-title")}>Doanh nhân Hồ Công Thắng- Người nắm giữ “bí quyết” khởi nghiệp thành công.</a>
                        <a href="#" className={cx("entry-post-on")}>3 Tháng Mười Hai, 2021</a>
                    </div>
                </div>
                <div className={cx('entry-recent-posts')} style={{ borderBottom: 'none' }}>
                    <a href='#'>
                        <img
                            src='./Pic/congty2.jpg'
                            alt='Straw hat'
                        />
                    </a>
                    <div className={cx("entry-content")}>
                        <a href='https://new24h.com.vn/bai-viet/cong-ty-truyen-thong-t-booking-va-su-menh-phuc-vu-5-sao-cho-cac-kol-tai-viet-nam' className={cx("entry-title")}>Công Ty Truyền Thông T-Booking Và Sứ Mệnh Phục Vụ 5 Sao Cho Các Kol Tại Việt Nam</a>
                        <a href="#" className={cx("entry-post-on")}>30 Tháng Một, 2021</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;