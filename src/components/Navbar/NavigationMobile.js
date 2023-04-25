import classNames from 'classnames/bind';
import style from './Navbar.module.scss';
import data from '~/config/data';
import Button from '../Button';
import CartIcon from '../CartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(style);
const HeaderMenu = data.menuHeading;
function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className={cx('humberger')}>
      <div className={cx('iconHumberger')} onClick={()=>handleOpen()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {isOpen ? (
        <ul className={cx('menu-humberger')}>
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
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavigationMobile;
