import classNames from 'classnames/bind';
import style from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function Card({data,onClick}) {
    return (
    <div className={cx('card')}>
        <div>
            <Link to="/"><img className={cx('image')} src={data.urlImage}/></Link>
        </div>
        <div className={cx('event')}>
            <span className={cx('quickView')}><FontAwesomeIcon icon={faEye} /></span>
            <span className={cx('addToWish')}><FontAwesomeIcon icon={faHeart} /></span>
        </div>
        <div className={cx('description')}>
            <h4 className={cx('title')}>{data.title}</h4>
            <div className={cx('rating')}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={cx('price')}>${data.price}</div>
            <Button primary className={cx('add')} onClick={onClick}>Add To Cart</Button>
        </div>
    </div> );
}

export default Card;