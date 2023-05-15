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
const bestPrds = () => {
  return data.products.filter((prd) => prd.rate === 5);
};
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
                <h2 className={cx('title')}>Up to 70% Off shorts and swim</h2>
                <p className={cx('content')}>
                  The weather started getting rough the tiny ship was tossed. If
                  not for the courage of the fearless crew the Minnow would be
                  lost. our dreams come true for me and you.
                </p>
                <Button className={cx('clicked')} secondary>
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
                <h2 className={cx('title')}>
                  new way to purchase your products
                </h2>
                <p className={cx('content')}>
                  The weather started getting rough the tiny ship was tossed. If
                  not for the courage of the fearless crew the Minnow would be
                  lost. our dreams come true for me and you.
                </p>
                <Button className={cx('clicked')} secondary>
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
            <div className={cx('title')} style={{ top: '70%', left: '15%' }}>
              <p>shop the latest technologies</p>
              <h4 className={cx('text')}>save upto 40%</h4>
              <Button primary>SHOP NOW</Button>
            </div>
            <img
              className={cx('image')}
              src={require('../../assets/Images/categories/category-1.jpg')}
            />
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('container')}>
            <div className={cx('title')} style={{ top: '35%', left: '15%' }}>
              <p>New arrivals</p>
              <h4 className={cx('text')}>15 stylish bags here save upto 25%</h4>
              <Button primary>SHOP NOW</Button>
            </div>
            <img
              className={cx('image')}
              src={require('../../assets/Images/categories/category-2.jpg')}
            />
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('container')}>
            <div className={cx('title')}>
              <p>special offers for men's</p>
              <h4 className={cx('text')}>save upto 60%</h4>
              <Button primary>SHOP NOW</Button>
            </div>
            <img
              className={cx('image')}
              src={require('../../assets/Images/categories/category-3.jpg')}
            />
          </div>
        </div>
      </div>
      <div className={cx('products')}>
        <h2 className={cx('title')}>BEST PRODUCTS</h2>
        <Products dataPerPage={8} />
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
      <div className={cx('deals-area')}>
        <h2 className={cx('title')}>DEALS OF THE DAY</h2>
        <p>our vision is to be Earth's most customer centric company</p>
        <div className={cx('wrapper')}>
          <div className={cx('accessories-block')}>
            <h5>mens accessories</h5>
            <p>
              The weather started getting rough the tossed. If not for the
              courage of the fearless crew the Minnow would be lost. would be
              lost.
            </p>
            <ul>
              <li>
                <a href="#">
                  <img
                    className={cx('image')}
                    src={require('../../assets/Images/deals/deal-3.jpg')}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className={cx('image')}
                    src={require('../../assets/Images/deals/deal-4.jpg')}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className={cx('image')}
                    src={require('../../assets/Images/deals/deal-5.jpg')}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className={cx('image')}
                    src={require('../../assets/Images/deals/deal-6.jpg')}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className={cx('image')}
                    src={require('../../assets/Images/deals/deal-7.jpg')}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className={cx('image')}
                    src={require('../../assets/Images/deals/deal-8.jpg')}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={cx('saleUp-img')}>
            <img
              className={cx('image')}
              src={require('../../assets/Images/deals/deal-9.jpg')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
