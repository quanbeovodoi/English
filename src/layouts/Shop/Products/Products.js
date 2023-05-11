import Card from '~/components/Card';
import style from './Products.module.scss';
import classNames from 'classnames/bind';
import data from '~/config/data';
import { useContext, useEffect, useRef, useState } from 'react';
import { ShopContext } from '~/context';
import SweetPagination from 'sweetpagination';

import './pagination.scss';
import CardLoading from '~/components/Card/Cardloading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const dataPrds = data.products;
function Products({ dataPerPage = 10, isSlide = false }) {
  const [currentPageData, setCurrentPageData] = useState(dataPrds);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(ShopContext);
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (isSlide) {
    return (
      <>
        <div className={cx('container')}>
          <div className={cx('navigation')}>
            <div className={cx('item', 'prev')} ref={navigationPrevRef}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className={cx('item', 'next')} ref={navigationNextRef}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            spaceBetween={10}
            slidesPerView={4}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            speed={1000}
          >
            {currentPageData.map((item, index) => (
              <SwiperSlide key={`data_${index}`}>
                <div className={cx('item')}>
                  {loading ? (
                      <CardLoading />
                  ) : (
                      <Card data={item} onClick={() => addToCart(item.id)} />
                  )}
                </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  } else
    return (
      <div>
        <div className={cx('wrapper')}>
          {currentPageData.map((item, index) => (
            <div key={`data_${index}`} className={cx('item')}>
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
          />
        </div>
      </div>
    );
}

export default Products;
