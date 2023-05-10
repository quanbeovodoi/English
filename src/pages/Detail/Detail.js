import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { ShopContext } from '~/context';
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import ListImgView from '~/components/ListImgView';
import IncreaseButton from '~/components/IncreaseButton';
import data from '~/config/data';
const cx = classNames.bind(styles);
function Detail() {
  const params = useParams();
  const { cartItems,addToCart, updateCartItemCount } = useContext(ShopContext);
  const [posImg, setPosImg] = useState({ top: 0 });
  const [qty,setQty]= useState(cartItems[params.detailId]?cartItems[params.detailId]:1)
  const containRef = useRef();
  const innerRef = useRef();
  const dataPrds = (()=>{
    return  data.products.find((prd)=>
        Number(prd.id) === Number(params.detailId)
      )
  })();
  const rateNumber = (rate=0) => {
    const arr = [];
    for(let i = 0;i<5;i++){
      if(i<rate-1)
      {
        arr.push(<FontAwesomeIcon key={i} icon={faStar} className={cx('star', 'active')} />)
      }
      else{
        if(rate-1===i-0.5)
        arr.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} className={cx('star', 'active')} />)
        else
        arr.push(<FontAwesomeIcon key={i} icon={faStar} className={cx('star')} />)
      }
      
    }
    return arr
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  },[])
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < containRef.current.offsetTop) {
        setPosImg({ top: 0 });
      } else if (
        window.pageYOffset >=
        containRef.current.clientHeight -
          innerRef.current.clientHeight +
          containRef.current.offsetTop
      ) {
        setPosImg({
          top: containRef.current.clientHeight - innerRef.current.clientHeight,
        });
      } else {
        setPosImg({ top: window.pageYOffset - containRef.current.offsetTop });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('inner')} ref={containRef}>
          <div className={cx('item')} ref={innerRef}>
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
            <h6 className={cx('sm-title')}>BRAND</h6>
            <h1 className={cx('title')}>{dataPrds.title}</h1>
            <div className={cx('price')}>
              <span className={cx('sale-price')}>
                <span
                  className={cx('money')}
                  data-currency-usd={`$${dataPrds.price}`}
                  data-currency="USD"
                >
                  ${dataPrds.price}
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
              {rateNumber(dataPrds.rate)}
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
            <div className={cx('row', 'flex')}>
              <div className={cx('px-5')}>
                <IncreaseButton quantityCurrent={qty} increaseFunc={()=>setQty(prev => (prev - 1)>0?(prev - 1):1)} discreaseFunc={()=>setQty(prev => prev + 1)}/>
              </div>
              <div className={cx('px-5')}>
                <Button
                  primary
                  className={cx('add')}
                  onClick={() => {
                    addToCart(params.detailId)
                    updateCartItemCount(params.detailId,qty)
                  }}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div className={cx('row')}>
              <ul className={cx('add-info')}>
                <li>
                  <span itemProp="brand">Vendor:</span>{' '}
                  <Link to="/collections/Zara">zara</Link>
                </li>
                <li>
                  <span>Product Type:</span>{' '}
                  <Link to="/collections/Polo">polo</Link>
                </li>
                <li>
                  <span>Barcode:</span>{' '}
                  <span className={cx('barcode')}>123456789</span>
                </li>
                <li>
                  <span>Tags:</span>&nbsp;
                  <Link to="/collections/all/sunglasses">Sunglasses</Link>
                  ,&nbsp;
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
