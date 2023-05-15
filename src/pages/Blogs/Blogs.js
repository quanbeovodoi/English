import classNames from 'classnames/bind';
import style from './Blogs.module.scss';
import Post from '~/components/Post';
import SidebarV2 from '~/layouts/SidebarV2';
const cx = classNames.bind(style);
function Blogs() {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('row')}>
            <div className={cx('col')}>
                <ul><li><Post /></li><li><Post /></li></ul>
            </div>
            <div className={cx('col')}>
                <SidebarV2 />
            </div>
        </div>
    </div>
  );
}

export default Blogs;
