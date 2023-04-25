import classNames from 'classnames/bind';
import style from './Navbar.module.scss';
import data from '~/config/data';
import Button from '../Button';
import CartIcon from '../CartIcon';
const cx = classNames.bind(style);
const HeaderMenu = data.menuHeading;
function Navigation() {
  return (
    <ul className={cx('menu')}>
      {HeaderMenu.map((item, index) => (
        <li key={index}>
          <Button
            className={cx('item')}
            transparent
            effect
            to={item.url}
            data_hover={item.title}
          >
            {item.title}
          </Button>
        </li>
      ))}
      <li>
        <CartIcon className={cx('item')} />
      </li>
    </ul>
  );
}

export default Navigation;
