import Banner from '~/components/Banner';
import styles from './AboutUs.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function AboutUs() {
  return (
    <>
      <div className={cx('bg')}>
          <Banner title={'About Us'} />
      </div>
      <div>
        <div className={cx('container', 'flex')}>
          <div className={cx('left-content', 'bg-primary')}>
            <h4 className={cx('display')}>25+</h4>
            <h1 className={cx('title')}>Years Experience</h1>
          </div>
          <div className={cx('right-content')}>
            <h6 className={cx('sm-title')}>Learn About Us</h6>
            <h1 className={cx('section-title')}>
              We Are The Best Interior Designing Firm In Your City
            </h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
          </div>
        </div>
        <div className={cx('container', 'flex')}>
          <div className={cx('right-content')}>
            <h6 className={cx('sm-title')}>Why Choose Us</h6>
            <h1 className={cx('section-title')}>
              25+ Years Experience In The Interior Design Industry
            </h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
          </div>
          <div
            className={cx('left-content', 'bg-primary')}
            style={{
              backgroundImage:
                "url('https://st3.depositphotos.com/1001279/12831/i/950/depositphotos_128312150-stock-photo-shopping-center-e-in-hong.jpg')",
            }}
          >
            <h4 className={cx('display')}>25+</h4>
            <h1 className={cx('title')}>Years Experience</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
