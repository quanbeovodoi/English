import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Products from '~/layouts/Shop/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRotateLeft,
  faClock,
  faMoneyBill,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import data from '~/config/data';
const cx = classNames.bind(style);
const bestPrds = ()=>{
  return data.products.filter(prd => prd.rate === 5)
}
// console.log(bestPrds())
function Home() {
  return (
    <div>
      <div className={cx('slideContainer')}>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
        >
          <SwiperSlide>
            <div className={cx('content')}>
              <div className={cx('text')}>
                <h2 className={cx('title')}>Sales 70% Off</h2>
                <Button className={cx('clicked')} primary>
                  SHOP NOW
                </Button>
              </div>
              <img
                className={cx('image_slide')}
                src="https://cdn.shopify.com/s/files/1/0031/6604/4224/files/demo18_01_2048x.png?v=1613718823"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx('content')}>
              <div className={cx('text')}>
                <h2 className={cx('title')}>More Products Free</h2>
                <Button className={cx('clicked')} primary>
                  SHOP NOW
                </Button>
              </div>
              <img
                className={cx('image_slide')}
                src="https://cdn.shopify.com/s/files/1/0031/6604/4224/files/demo18_02_2048x.png?v=1613718823"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={cx('cate')}>
        <div className={cx('box')}>
          <div className={cx('container')}>
            <div className={cx('title')}>
              <h4 className={cx('text')}>Shoes</h4>
            </div>
            <img
              className={cx('image')}
              src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst04_640x640.jpg?v=1620125974"
            />
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('container')}>
            <div className={cx('title')}>
              <h4 className={cx('text')}>Women</h4>
            </div>
            <img
              className={cx('image')}
              src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst04_640x640.jpg?v=1620125974"
            />
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('container')}>
            <div className={cx('title')}>
              <h4 className={cx('text')}>Man</h4>
            </div>
            <img
              className={cx('image')}
              src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst04_640x640.jpg?v=1620125974"
            />
          </div>
        </div>
      </div>
      <div className={cx('products')}>
        <h2 className={cx('title')}>BEST PRODUCTS</h2>
        <Products dataPerPage={8}/>
      </div>
      <div className={cx('shipping')}>
        <div className={cx('box')}>
          <div className={cx('icon')}>
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <div className={cx('benefits')}>
            <h6>free shipping</h6>
            <p>Suffered Alteration in Some Form</p>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('icon')}>
            <FontAwesomeIcon icon={faMoneyBill} />
          </div>
          <div className={cx('benefits')}>
            <h6>CACH ON DELIVERY</h6>
            <p>The Internet Tend To Repeat</p>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('icon')}>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
          </div>
          <div className={cx('benefits')}>
            <h6>45 DAYS RETURN</h6>
            <p>Making it Look Like Readable</p>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('icon')}>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className={cx('benefits')}>
            <h6>OPENING ALL WEEK</h6>
            <p>8AM - 09PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
