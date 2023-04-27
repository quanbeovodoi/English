import Card from '~/components/Card';
import style from './Products.module.scss';
import classNames from 'classnames/bind';
import data from '~/config/data';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '~/context';
import SweetPagination from 'sweetpagination';

import './pagination.scss';
import CardLoading from '~/components/Card/Cardloading';
const cx = classNames.bind(style);
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const dataPrds = data.products;
function Products({ dataPerPage = 10 }) {
  const [currentPageData, setCurrentPageData] = useState(dataPrds);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(ShopContext);
  useEffect(()=>{
    setTimeout(()=>setLoading(false),1000)
  },[])
  return (
    <div>
      {/* <div className={cx('wrapper')}>
        {dataPrds.map((item, index) => (
          <div key={index} className={cx('item')}>
            <Card data={item} onClick={() => addToCart(item.id)} />
          </div>
        ))}
      </div> */}
      <div className={cx('wrapper')}>
        {currentPageData.map((item, index) => (
          <div key={index} className={cx('item')}>
            {loading ? (
              <CardLoading />
            ) : (
              <Card data={item} onClick={() => addToCart(item.id)} />
            )}
          </div>
        ))}
      </div>
      <div className={cx('pagination')}>
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={dataPerPage}
          getData={dataPrds}
          navigation={true}
          getStyle={'style-custom'}
        />
      </div>
    </div>
  );
}

export default Products;
