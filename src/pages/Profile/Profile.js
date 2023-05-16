import Button from '~/components/Button';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Profile() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <div className={cx('col', 'left')}>
              <div className={cx('image')}>
                <img
                  src={require('~/assets/Images/profile/pngwing.com.png')}
                />
              </div>
              <h1>Nguyễn Hoàng Quân</h1>
              <p className={cx('sub-heading')}>quanbeovodoi@gmail.com</p>
              <ul>
                <li>
                  <Button className={cx('btn')} secondary>
                    Thông tin người dùng
                  </Button>
                </li>
                <li>
                  <Button className={cx('btn')} secondary>
                    Edit Profile
                  </Button>
                </li>
                <li>
                  <Button className={cx('btn')} secondary>
                    purchased
                  </Button>
                </li>
                <li>
                  <Button className={cx('btn')} secondary>
                    order
                  </Button>
                </li>
                <li>
                  <Button className={cx('btn')} secondary>
                    points
                  </Button>
                </li>
              </ul>
            </div>
            <div className={cx('col', 'right')}>
              <div className={cx('content')}>
                <h1>Thông tin người dùng</h1>
                <div className={cx('content-info')}>
                  <div className={cx('row')}>
                    <div className={cx('col')}>
                      <label htmlFor="name">Họ và tên:</label>
                      <input
                        type="text"
                        name="name"
                        id="username"
                        defaultValue={'Nguyễn Hoàng Quân'}
                      />
                    </div>
                    <div className={cx('col')}>
                      <label htmlFor="gmail">Gmail:</label>
                      <input
                        type="text"
                        name="gmail"
                        id="gmail"
                        defaultValue={'quanbeovodoi@gmail.com'}
                      />
                    </div>
                    <div className={cx('col')}>
                      <label htmlFor="address">Địa chỉ:</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={'Hà Nội'}
                      />
                    </div>
                    <div className={cx('col')}>
                      <label htmlFor="job">Job:</label>
                      <input
                        type="text"
                        name="job"
                        id="address"
                        defaultValue={'Lập trình viên frontend'}
                      />
                    </div>
                  </div>
                  <div className={cx('row')}>
                    <div className={cx('col')}>
                      <label htmlFor="skill">Kỹ năng:</label>
                      <input
                        type="text"
                        name="skill"
                        id="username"
                        defaultValue={'React Js, HTML, CSS, JS'}
                      />
                    </div>
                    <div className={cx('col')}>
                      <label htmlFor="phone">Số điện thoại:</label>
                      <input
                        type="text"
                        name="phone"
                        id="numberphone"
                        defaultValue={'0915327755'}
                      />
                    </div>
                    <div className={cx('col')}>
                      <label htmlFor="gender">Giới tính:</label>
                      <input
                        type="text"
                        name="gender"
                        id="gender"
                        defaultValue={'Nam'}
                      />
                    </div>
                    <div className={cx('col')}>
                      <label htmlFor="datebirth">Ngày sinh:</label>
                      <input
                        type="Date"
                        name="datebirth"
                        id="datebirth"
                        defaultValue="2000-09-02"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('sub-content')}>
                <h2>Giới thiệu</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  elementum metus erat. Nunc a nunc lacinia, tincidunt eros nec,
                  faucibus turpis. Mauris et magna quis quam sollicitudin
                  volutpat non nec sem. Fusce feugiat ante et tincidunt
                  vehicula. Maecenas suscipit pellentesque lectus, at luctus sem
                  fringilla eget. Donec et egestas enim. Mauris sit amet
                  facilisis est. Maecenas facilisis velit quis felis volutpat,
                  sed convallis odio luctus.
                </p>
              </div>
              <div className={cx('sub-content')}>
                <div className={cx('row')}>
                  <div className={cx('box')}>
                    <h5>4</h5>
                    <span>purchased</span>
                  </div>
                  <div className={cx('box')}>
                    <h5>5</h5>
                    <span>points</span>
                  </div>
                  <div className={cx('box','follow')}>
                    <span>Follow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
