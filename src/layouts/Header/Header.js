import classNames from 'classnames/bind';
import style from './Header.module.scss';
import Button from '~/components/Button';
import data from '~/config/data';
import CartIcon from '~/components/CartIcon';
const cx = classNames.bind(style);
const HeaderMenu = data.menuHeading;
function Header() {
  
  return (
    <div className={cx('heading')}>
      <div className={cx('wrapper')}>
        <div className={cx('image')}>
          <img src={require("../../assets/Images/kingback-website-favicon-black.png")}></img>
          <h1 className={cx('title')}>KingBack</h1>
        </div>
        <ul className={cx('menu')}>
          {HeaderMenu.map((item,index)=><li key={index}>
            <Button className={cx('item')} transparent effect to={item.url} data_hover={item.title}>{item.title}</Button>
          </li>)}
          <li>
          <CartIcon className={cx('item')}/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
