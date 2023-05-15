import classNames from 'classnames/bind';
import style from './Banner.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function Banner({title}) {
  return (
    <div className={cx('bg')}>
      <div className={cx('container', 'heading')}>
        <h1>{title}</h1>
        <ul className={cx('breadcrumb')}>
          <li>
            <Link to={'/'}>HOME</Link>
          </li>
          <li className={cx('active')}>{title}</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
