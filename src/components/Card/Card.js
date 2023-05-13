import classNames from 'classnames/bind';
import style from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function Card({data,onClick}) {
    const linkUrl = `/detail/${data.id}`
    return (
    <div className={cx('card')}>
            <Link to={linkUrl}><img className={cx('image')} src={data.urlImage}/></Link>
        <div className={cx('event')}>
            <span className={cx('quickView')}><FontAwesomeIcon icon={faEye} /></span>
            <span className={cx('addToWish')}><FontAwesomeIcon icon={faHeart} /></span>
            <Button primary className={cx('add')} onClick={onClick}>Add To Cart</Button>
        </div>
        <div className={cx('description')}>
            <h4 className={cx('title')}>{data.title}</h4>
            <div className={cx('price')}>${data.price}</div>
        </div>
    </div> );
}

export default Card;