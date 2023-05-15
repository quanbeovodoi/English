import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Post() {
    return ( <div className={cx('post')}>
    <div className={cx('image')}>
        <img src={require('~/assets/Images/blogs/blog-1.jpg')}/>
    </div>
    <div className={cx('description')}>
        <h3 className={cx('entry-title')}><Link to={'/'}>new Collectios are imported In Our shop.</Link></h3>
        <div className={cx('entry-meta')}>
            <span className={cx('post-like')}><Link to={'/'} title="224 Likes"><i className="fa fa-heart-o"></i>224 Likes</Link></span>
            <span className={cx('post-admin')}><i class="fa fa-user"></i>Posted By<a href="#" title="Max">Max</a></span>
        </div>
        <div className={cx('entry-content')}>
            <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
            <Button secondary>Read More</Button>
        </div>
    </div>
</div> );
}

export default Post;