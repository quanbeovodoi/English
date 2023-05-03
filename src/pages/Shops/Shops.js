import Products from '~/layouts/Shop/Products';
import styles from './Shops.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Shops() {
  return (
    <>
    <div className={cx('bg')}>
        <div className={cx('container', 'heading')}>
          <h1>Products</h1>
        </div>
      </div>
      <div className={cx('wrapper')}><Products dataPerPage={20}/></div>
    </>
  );
}

export default Shops;
