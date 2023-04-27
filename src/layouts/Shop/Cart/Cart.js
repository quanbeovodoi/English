import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShopContext } from '~/context';
import data from '~/config/data';
const cx = classNames.bind(style);
const dataPrds = data.products;
function Cart() {
  const { cartItems,getTotalCartAmount,addToCart,removeFromCart,updateCartItemCount } = useContext(ShopContext);
  const cartItemCount = Object.entries(cartItems).length;
  const prdInCart = ()=>{
    return Object.keys(cartItems).map((item,index)=>{
      const NewElement = data.products.find((prd)=>
        Number(prd.id) === Number(item)
      )
      NewElement.quantity = cartItems[item]
      return NewElement
    })
  };
  console.log(prdInCart())
  const cartBox = (item,index)=> (<tr key={index}>
  <td>
    <button className={cx('prdct-delete')} onClick={()=>removeFromCart(item.id)}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </td>
  <td>
    <div className={cx('product-img')}>
      <img
        src={item.urlImage}
        alt=""
      />
    </div>
  </td>
  <td>
    <div className={cx('product-name')}>
      <p>{item.title}</p>
    </div>
  </td>
  <td>${item.price}</td>
  <td>
    <div className={cx('prdct-qty-container')}>
      <button className={cx('prdct-qty-btn')} type="button" onClick={()=>updateCartItemCount(item.id,(item.quantity-1)?(item.quantity-1):1)}>
      <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        type="text"
        name="qty"
        className={cx('qty-input-box')}
        disabled
        value={item.quantity}
      />
      <button className={cx('prdct-qty-btn')} type="button" onClick={()=>updateCartItemCount(item.id,item.quantity+1)}>
        <FontAwesomeIcon icon={faPlus} /> 
      </button>
    </div>
  </td>
  <td className={cx('text-right')}>${item.price * item.quantity}</td>
</tr>)
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <div className={cx('cart')}>Cart</div>
          <div className={cx('emptyCart')}></div>
        </div>
        <div className={cx('body')}>
          <table className={cx('table', 'cart-table')}>
            <thead>
              <tr>
                <th>Action</th>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th className={cx('text-right')}>
                  <span id="amount" className={cx('amount')}>
                    Amount
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {prdInCart().map((item,index)=>{
                return cartBox(item,index)
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>&nbsp;</th>
                <th colSpan={3}>&nbsp;</th>
                <th>
                  Items in Cart<span>:</span>
                  <span className={cx('text-danger')}>{cartItemCount}</span>
                </th>
                <th className={cx('text-right')}>
                  Total Price<span className={cx('ml-2 mr-2')}>:</span>
                  <span className={cx('text-danger')}>$ {getTotalCartAmount()}</span>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
