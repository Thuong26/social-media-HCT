import React from 'react';
import classNames from 'classnames/bind';
import styles from './CarouselOverlay.module.scss';

const cx = classNames.bind(styles);

const CarouselOverlay = ({ title, postDate, link, tagLink, tag, customTitle, customOverlay, customePostDay }) => (
    <div className={cx('carousel-overlay', customOverlay)}> 
        <a href={link} className={cx('item-title', customTitle)}>
            {title}
        </a>
        <p className={cx('item-post-day', customePostDay)}>
            Ngày đăng <a href={link} className={cx('daypost')}>{postDate}</a> 
        </p>
    </div>
);

export default CarouselOverlay;
