import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import data from '~/config/data';

const cx = classNames.bind(styles);
const sideBarMenu = data.sideBarMenu;
function Sidebar() {
  return (
    <>
      <div className={cx('wrapper')}>
        <ul className={cx('menu')}>
          {sideBarMenu.map((item,index) => (
            <li key={index}className={cx('item')}>
              <Button
                className={cx('btn_sidebar')}
                effect
                to={item.url}
                data_hover={item.title}
              >
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
