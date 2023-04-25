import { Bars } from 'react-loader-spinner';
import classNames from 'classnames/bind';
import styles from './Loader.module.scss';
const cx = classNames.bind(styles);
function Loader({opacity = false}) {
  return (
    <div className={cx('wrapper',{opacity})}>
      <div className={cx('loading')}>
        <Bars
          height="80"
          width="80"
          color="#fe2c55"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}

export default Loader;
