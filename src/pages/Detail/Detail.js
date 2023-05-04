import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { ShopContext } from '~/context';
import { useContext, useLayoutEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ListImgView from '~/components/ListImgView';
const cx = classNames.bind(styles);
function Detail() {
  const [top,setTop] = useState(0)
  const params = useParams();
  const { addToCart } = useContext(ShopContext);
  const [posImg,setPosImg] = useState({top: (window.scrollY - 120)>0?(window.scrollY - 120):0})
  useLayoutEffect(()=>{
    const handleScroll = ()=>{
        if(window.scrollY<120)
        setPosImg({top: 0});
        else if(window.scrollY>=330)
        setPosImg({top: 209});
        else
        setPosImg({top: window.scrollY - 120});
    }
    // if(window.scrollY>120 && window.scrollY<330)
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])
  console.log(posImg)
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('item')}>
            <div className={cx('stickprcol')} style={posImg}>
              <ListImgView />
            </div>
          </div>
          <div className={cx('item', 'right')}>
            <div className={cx('add-info')}>
              <div className={cx('availability')}>
                <span className={cx('addInfo-title')}>Availability:</span>
                <span className={cx('stock_quantity')}>12</span>
                <span className={cx('in_stock')}>in stock</span>
              </div>
            </div>
            <h6 className={cx('sm-title')}>CATEGORIES</h6>
            <h1 className={cx('title')}>COLLEGE ESSENTIALS</h1>
            <div className={cx('price')}>
              <span className={cx('sale-price')}>
                <span
                  className={cx('money')}
                  data-currency-usd="$400.00"
                  data-currency="USD"
                >
                  $400.00
                </span>
              </span>
              <span className={cx('old-price')}>
                <span
                  className={cx('money')}
                  data-currency-usd="$460.00"
                  data-currency="USD"
                >
                  $460.00
                </span>
              </span>
            </div>
            <div className={cx('rating')}>
              <FontAwesomeIcon icon={faStar} className={cx('star', 'active')} />
              <FontAwesomeIcon icon={faStar} className={cx('star')} />
              <FontAwesomeIcon icon={faStar} className={cx('star')} />
              <FontAwesomeIcon icon={faStar} className={cx('star')} />
              <FontAwesomeIcon icon={faStar} className={cx('star')} />
            </div>
            <div className={cx('color')}>
              COLOR: <span className={cx('current_option_name')}>Blue</span>
              <ul className={cx('options-swatch')}>
                <li>
                  <div
                    className={cx('opt-item', 'active')}
                    style={{
                      backgroundImage: `url('https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_4_100x.jpg?v=1626292276')`,
                    }}
                  ></div>
                </li>
                <li>
                  <div
                    className={cx('opt-item')}
                    style={{
                      backgroundImage: `url('https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_4_100x.jpg?v=1626292276')`,
                    }}
                  ></div>
                </li>
              </ul>
            </div>
            <div className={cx('row')}>
              <Button
                primary
                className={cx('add')}
                onClick={() => addToCart(params.detailId)}
              >
                Add To Cart
              </Button>
            </div>
            <div className={cx('row')}>
              <ul className={cx('add-info')}>
                <li>
                  <span itemProp="brand">Vendor:</span>{' '}
                  <Link to="/collections//Zara">zara</Link>
                </li>
                <li>
                  <span>Product Type:</span>{' '}
                  <Link to="/collections//Polo">polo</Link>
                </li>
                <li>
                  <span>Barcode:</span> <span className={cx("barcode")}>123456789</span>
                </li>
                <li>
                  <span>Tags:</span>&nbsp;
                  <Link to="/collections/all/sunglasses">Sunglasses</Link>,&nbsp;
                  <Link to="/collections/all/winter">Winter</Link>,&nbsp;
                  <Link to="/collections/all/shorts">Shorts</Link>,&nbsp;
                  <Link to="/collections/all/cool">Cool</Link>,&nbsp;
                  <Link to="/collections/all/nice">Nice</Link>
                </li>
              </ul>
            </div>
            <div className={cx('row')}>
              <div className={cx('des')}>
                <div className={cx('desHead')}>Description:</div>
                <div className={cx('desContent')}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus quis magna vel nulla dictum pellentesque. Cras
                    lacinia arcu in diam maximus lacinia. Suspendisse nec sem at
                    dui
                  </p>
                  <p>
                    condimentum scelerisque. Integer id risus scelerisque,
                    tincidunt est faucibus, ultrices nulla. Nullam turpis enim,
                  </p>
                  <p>
                    porta pretium mauris luctus, viverra sodales elit. Phasellus
                    maximus egestas porttitor. Ut fermentum porttitor lacus at
                    aliquet. Morbi lacus nulla, blandit eget commodo eu,
                    faucibus ac magna.
                  </p>
                  <p>
                    Duis a ultricies neque. Proin quis velit at nibh sodales
                    congue sed eget magna. Vivamus tempor commodo vestibulum.
                  </p>
                  <p>
                    Suspendisse rutrum accumsan lectus. In rutrum sem vitae
                    magna iaculis, eu euismod leo luctus. Donec eget volutpat
                    lectus, id volutpat tellus. Curabitur laoreet magna eleifend
                    ornare auctor. Duis et turpis vel justo pellentesque
                    vestibulum at aliquet sem.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
