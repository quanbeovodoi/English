import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Navbar from '~/components/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCircleInfo, faEarthAsia } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function Header() {
  
  return (
    <div className={cx('heading')}>
      <div className={cx('wrapper','top-heading')}>
        <div className={cx('container')}>
          <ul className={cx('navbar-links')}>
            <li><h5 className={cx('heading')}>Welcome to QSHOP</h5></li>
            <li><div className={cx('icon')}><FontAwesomeIcon icon={faFacebook}/></div></li>
            <li><div className={cx('icon')}><FontAwesomeIcon icon={faTwitter}/></div></li>
            <li><div className={cx('icon')}><FontAwesomeIcon icon={faYoutube}/></div></li>
          </ul>
          <ul className={cx('navbar-links')}>
            <li className={cx('item')}>
              <Link to={'/'}><span><FontAwesomeIcon icon={faBell} /></span>Notification</Link>
            </li>
            <li className={cx('item')}>
              <Link to={'/'}><span><FontAwesomeIcon icon={faCircleInfo} /></span>Support</Link>
            </li>
            <li className={cx('item')}>
              <Link to={'/'}><span><FontAwesomeIcon icon={faEarthAsia} /></span>English</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('image')}>
            <img src={require("../../assets/Images/kingback-website-favicon-black.png")}></img>
            <h1 className={cx('title')}><span>Q</span>SHOP</h1>
          </div>
          <Navbar/>
        </div>
      </div>
    </div>
  );
}

export default Header;
