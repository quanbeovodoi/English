import Products from '~/layouts/Shop/Products';
import styles from './Shops.module.scss';
import classNames from 'classnames/bind';
import Banner from '~/components/Banner';
import SidebarV2 from '~/layouts/SidebarV2';
const cx = classNames.bind(styles);
function Shops() {
  return (
    <>
      <Banner title={'shop'}/>
      <div className={cx('wrapper')}>
        <div className={cx('sidebar')}><SidebarV2 /></div>
        <div className={cx('product')}>
          <Products dataPerPage={20} />
        </div>
      </div>
    </>
  );
}

export default Shops;
