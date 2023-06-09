import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './ListImgView.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
const cx = classNames.bind(styles);
function preventDefault(e) {
  e.preventDefault();
};
var wheelOpt = {
  passive: false,
}
function ListImgView({ data }) {
  const imgData = [
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_4_2048x2048.jpg?v=1626292276',
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_5_2048x2048.jpg?v=1626292276',
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_6_2048x2048.jpg?v=1626292276',
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_7_2048x2048.jpg?v=1626292276',
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_2048x2048.jpg?v=1626292276',
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_1_2048x2048.jpg?v=1626292276',
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_1_2048x2048.jpg?v=1626292276',
    'https://cdn.shopify.com/s/files/1/0031/6604/4224/products/TailoredFitMesh-PanelPolo_3_2048x2048.jpg?v=1626292276',
  ];
  const [imgCurrent, setImgCurrent] = useState(0);
  const singleImage = useRef();
  const [state, setState] = useState({
    backgroundImage: `url(${imgData[imgCurrent]})`,
    backgroundPosition: '0% 0%',
  });
  const [zoom,setZoom] = useState(400)
  useEffect(()=>setState(prev=>{return{
    ...prev,
    backgroundImage: `url(${imgData[imgCurrent]})`,
    backgroundSize: `${zoom}%`
  }}),[zoom])
  const handleZoom = (e) => {
    setZoom(prev=>(-e.deltaY + prev)<1500&&(-e.deltaY + prev)>100?(-e.deltaY + prev):prev)
  };
  const resetZoom = (e)=>{
    setZoom(400)
  }
  const disableScroll = () => {
    window.addEventListener('wheel', preventDefault, wheelOpt);
  };
  const enableScroll = () => {
    window.removeEventListener('wheel', preventDefault, wheelOpt);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    if (y < 100)
      setState({
        backgroundImage: `url(${imgData[imgCurrent]})`,
        backgroundPosition: `${x}% ${y}%`,
        backgroundSize: `${zoom}%`
      });
    else
      setState({
        backgroundImage: `url(${imgData[imgCurrent]})`,
        backgroundPosition: `${x}% 100%`,
        backgroundSize: `${zoom}%`
      });
  };
  useEffect(() => {
    var supportsPassive = false;
    try {
      window.addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', {
          get: function () {
            supportsPassive = true;
          },
        }),
      );
    } catch (e) {}
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('listImage')}>
        <Swiper
          direction={'vertical'}
          slidesPerView={4}
          spaceBetween={5}
          className="mySwiper"
        >
          {imgData.map((item, index) => {
            let imgClass;
            if (index === imgCurrent) {
              imgClass = cx('imageItem', 'active');
            } else {
              imgClass = cx('imageItem');
            }
            return (
              <SwiperSlide key={`sw_${index}`}>
                <div className={imgClass} onClick={() => {resetZoom();setImgCurrent(index)}}>
                  <img className={cx('image')} src={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className={cx('singleImage')}
        onMouseOver={disableScroll}
        onMouseMove={handleMouseMove}
        onWheel={handleZoom}
        onMouseOut={enableScroll}
        style={state}
        ref={singleImage}
      >
        <img className={cx('image')} src={imgData[imgCurrent]} />
      </div>
    </div>
  );
}

export default ListImgView;
