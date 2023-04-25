import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Navbar from '~/components/Navbar';
const cx = classNames.bind(style);
function Header() {
  
  return (
    <div className={cx('heading')}>
      <div className={cx('wrapper')}>
        <div className={cx('image')}>
          <img src={require("../../assets/Images/kingback-website-favicon-black.png")}></img>
          <h1 className={cx('title')}>KingBack</h1>
        </div>
        <Navbar/>
      </div>
    </div>
  );
}

export default Header;
