import Button from "../Button";
import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShopContext } from "~/context";
const cx = classNames.bind(style);
function CartIcon({className}) {
    const { cartItems } = useContext(ShopContext);

  const cartItemCount = Object.keys(cartItems).length;
  return (
    <div className={cx('wrapper')}>
      <Button className={className} icon transparent to={'/cart'}>
        <FontAwesomeIcon icon={faCartShopping} />
      </Button>
      <span className={cx('count')}>{cartItemCount}</span>
    </div>
  );
}

export default CartIcon;
