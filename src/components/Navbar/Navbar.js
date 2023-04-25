import classNames from 'classnames/bind';
import style from './Navbar.module.scss';
import Button from "../Button";
import CartIcon from "../CartIcon";
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
const cx = classNames.bind(style);

function Navbar() {
    return ( <div className={cx('navbar')}>
        <NavigationMobile/>
        <Navigation />
    </div> );
}

export default Navbar;