import classNames from 'classnames/bind';
import style from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const cx = classNames.bind(style);
function CardLoading({data,onClick}) {
    return ( 
    <div className={cx('card')}>
        <div>
            <Link to="/"><img className={cx('image')} src={'https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png'}/></Link>
        </div>
        <div className={cx('event')}>
            <span className={cx('quickView')}><Skeleton/></span>
            <span className={cx('addToWish')}><Skeleton/></span>
        </div>
        <div className={cx('description')}>
            <h4 className={cx('title')}><Skeleton/></h4>
            <div className={cx('rating')}>
                <Skeleton/>
            </div>
            <div className={cx('price')}><Skeleton/></div>
            <Button primary className={cx('add')}><Skeleton/></Button>
        </div>
    </div> );
}

export default CardLoading;