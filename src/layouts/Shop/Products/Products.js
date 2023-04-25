import Card from '~/components/Card';
import style from './Products.module.scss';
import classNames from 'classnames/bind';
import data from '~/config/data';
import { useContext } from 'react';
import { ShopContext } from '~/context';
const cx = classNames.bind(style);
const dataPrds = data.products;
function Products() {
  const { addToCart} = useContext(ShopContext);
  return (
    <div className={cx('wrapper')}>
      {dataPrds.map((item,index)=><div key={index} className={cx('item')}>
        <Card data={item} onClick={()=>addToCart(item.id)}/>
      </div>)}
    </div>
  );
}

export default Products;
