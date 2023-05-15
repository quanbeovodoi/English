import classNames from 'classnames/bind';
import style from './Contact.module.scss';
import Banner from '~/components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
const cx = classNames.bind(style);
function Contact() {
  return (
    <>
      <Banner title={'contact'} />
      <div className={cx('wrapper')}>
        <div className={cx('item')}>
          <div className={cx('section-header')}>
            <h3>Get In Touch</h3>
            <p>Also Connect With Social Media To Anytime</p>
          </div>
          <div className={cx('contact-info')}>
            <div className={cx('icon')}>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </div>
            <p>QShop, 6 PhuDo Street HaNoi,</p>
            <p> VietNam.</p>
          </div>
          <div className={cx('contact-info')}>
            <div className={cx('icon')}>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
            </div>
            <Link to={'tel:(+84)0915327755'}>(+84)0915327755</Link>
          </div>
          <div className={cx('contact-info')}>
            <div className={cx('icon')}>
              <FontAwesomeIcon icon="fa-solid fa-envelopes-bulk" />
            </div>
            <Link to={'mailto:quanbeovodoi@gmail.com'}>
              quanbeovodoi@gmail.com
            </Link>
          </div>
        </div>
        <div className={cx('item', 'form-detail')}>
          <div className={cx('section-header')}>
            <h3>Send a message</h3>
            <p>Feel Free To Say Everything And Ask Questions</p>
          </div>
          <form>
            <div className={cx('row')}>
              <div className={cx('col')}>
                <input
                  type="text"
                  name="contact-name"
                  className={cx('form-control')}
                  id="input_name"
                  placeholder="Full Name *"
                  required=""
                />
              </div>
              <div className={cx('col')}>
                <input
                  type="text"
                  name="contact-email"
                  className={cx('form-control')}
                  id="input_email"
                  placeholder="Email Address *"
                  required=""
                />
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('col')}>
                <input
                  type="text"
                  name="contact-subject"
                  className={cx('form-control')}
                  id="input_subject"
                  placeholder="Subject *"
                  required=""
                />
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('col')}>
                <textarea
                  placeholder="Type Your Message . . ."
                  id="textarea_message"
                  name="contact-message"
                  rows="5"
                  className={cx('form-control')}
                ></textarea>
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('col')}>
                <Button secondary className={cx('send')}>SEND MESSAGE</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
