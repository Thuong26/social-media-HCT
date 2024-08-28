import classNames from "classnames/bind";
import styles from "./Logo.module.scss";



const cx = classNames.bind(styles);
function Logo() {
    const handleClick = () => {
        window.location.href = "/";
      };
    return ( 
        <div>
             <img 
            width="384" 
            height="138" 
            src="./Pic/logo.png" 
            className={cx('custom-logo')} 
            alt="Logo T-Booking" 
            decoding="async" 
            fetchpriority="high" 
            onClick={handleClick}
      />
        </div>
     );
}

export default Logo;