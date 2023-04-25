import classNames from "classnames/bind";
import style from "./Footer.module.scss";
const cx = classNames.bind(style)
function Footer() {
    return ( <div className={cx('footer')}>
    <div className={cx('endFooter')}>
    © Quan 2022. All Rights Reserved
    </div>
    </div> );
}

export default Footer;