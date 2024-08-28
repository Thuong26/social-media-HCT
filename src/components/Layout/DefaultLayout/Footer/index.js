import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("site-footer")}>
        <div className={cx('logo')}>
          <a href="#">
            <img
              width="384"
              height="138"
              src="./Pic/logo.png"
              className={cx('custom-logo')}
              alt="Logo T-Booking"
              decoding="async"
              fetchpriority="high"
            />
          </a>
        </div>
        <div className={cx("footer-text-container")}>
          <div className={cx("footer-intro")}>
            Trang thông tin điện tử – cập nhật tin tức mới nhất
          </div>
          <div className={cx('footer-copyright')}>
            ©Bản quyền thuộc Công Ty Truyền Thông T-Booking
          </div>
        </div>
        <div>
          <div className={cx('menu-contact')}>
            <p title="House">
              <FontAwesomeIcon icon={faHouse} className={cx('icon-spacing')} />
              109 Phan Bội Châu, Tam Kỳ, Quảng Nam
            </p>
            <p title="Phone">
              <FontAwesomeIcon icon={faPhone} className={cx('icon-spacing')} />
              0379.444.000
            </p>
            <p title="Mail">
            <FontAwesomeIcon icon={faEnvelope} className={cx('icon-spacing')} />
              Tbookingkols@gmail.com
            </p>
            <p id={cx('contact-with')}>Liên hệ với chúng tôi</p>
          </div>
          <div className={cx('social-menu-container')} >
            <ul className={cx('list-social')}>
              <li className={cx('icon')}>
                <a href="https://www.facebook.com/tbooking.vn" title="Facebook" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="https://www.facebook.com/tbooking.vn" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="https://www.facebook.com/tbooking.vn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="https://www.youtube.com/c/C%C3%B4ngTyTruy%E1%BB%81nTh%C3%B4ngTBooking" title="Youtube" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;