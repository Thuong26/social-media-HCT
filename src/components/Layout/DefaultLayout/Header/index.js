import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '~/components/Search/index';

const cx = classNames.bind(styles);

function Header({ 
  ceoClassName,
  aboutClassName, customcontactClassName,
  photographyClassName,
  fashionClassName
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchButtonRef = useRef(null);
  const tippyRef = useRef(null);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleClickOutsideSearch = (event) => {
    if (
      isSearchOpen &&
      tippyRef.current &&
      !tippyRef.current.querySelector('.sub-search').contains(event.target) &&
      !searchButtonRef.current.contains(event.target)
    ) {
      setIsSearchOpen(false);
    }
  };

  const handleOutsideClick = (instance, event) => {
    if (searchButtonRef.current && !searchButtonRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideSearch);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSearch);
    };
  }, []);

  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(true);
  };

  const handleHide = () => {
    setVisible(false);
  };

  const handleClick = () => {
    window.location.href = "/";
  };

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('social-menu-container')}>
            <ul className={cx('list-social')}>
              <li className={cx('icon')}>
                <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="#" title="Pinterest" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </li>
            </ul>
          </div>
          <div className={cx('primary-menu-container')}>
            <ul className={cx('primary-menu')}>
              <li className={cx('primary-menu-fashion', { 'current-page': currentPath === '/ceo-ho-cong-thang' })}>
              <a href="/ceo-ho-cong-thang">CEO Hồ Công Thắng</a>
              </li>
              <li className={cx('primary-menu-photography', { 'current-page': currentPath === '/cong-ty-t-booking' })}>
                <a href="/cong-ty-t-booking">Công Ty T-Booking</a>
              </li>
              <li className={cx('primary-menu-contact', { 'current-page': currentPath === '/contact' })}>
                <a href="/contact">Liên Hệ</a>
              </li>
            </ul>
          </div>
          <div className={cx('extra-menu-container')}>
            <ul className={cx('list-extra-menu')}>
              <Tippy
                interactive={true}
                content={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} // Use Search component
                placement="bottom"
                visible={isSearchOpen}
                delay={[0, 0]}
                duration={[0, 0]}
                onClickOutside={handleOutsideClick}
              >
                <li>
                  <button ref={searchButtonRef} className={cx('search-btn')} onClick={handleSearchToggle}>
                    <FontAwesomeIcon icon={isSearchOpen ? faTimes : faMagnifyingGlass} />
                  </button>
                </li>
              </Tippy>
              <li>
                <button className={cx('list-menu-btn')} onClick={handleShow}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </li>
              {visible && (
                <>
                  <div className={cx('overlay', { show: visible })} onClick={handleHide} />
                  <div className={cx('sub-list-menu')}>
                    <PopperWrapper />
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
