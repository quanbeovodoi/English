import classNames from "classnames/bind";
import styles from "./SidebarV2.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function SidebarV2() {
    return ( <div className={cx('sidebar')}>
    <div className={cx('item-sidebar')}>
      <h4 className={cx('title')}>Search</h4>
      <div className={cx('input-group')}>
        <input
          type="text"
          className={cx('form-control')}
          placeholder="Search You Wants. . ."
        />
        <span className={cx('input-group-btn')}>
          <button
            className={cx('btn', 'btn-search')}
            title="Search"
            type="button"
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </span>
      </div>
    </div>
    <div className={cx('item-sidebar')}>
      <h4 className={cx('title')}>Categories</h4>
      <ul>
        <li>
          <Link to="/" title="Beautiful Chairs">
            Beautiful Chairs <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/" title="Creative Designs">
            Creative Designs <span>(6)</span>
          </Link>
        </li>
        <li>
          <Link to="/" title="Trendy Products">
            Trendy Products <span>(4)</span>
          </Link>
        </li>
        <li>
          <Link to="/" title="Interior Products">
            Interior Products <span>(2)</span>
          </Link>
        </li>
        <li>
          <Link to="/" title="Popular Products">
            Popular Products <span>(8)</span>
          </Link>
        </li>
        <li>
          <Link to="/" title="Casual Shirts">
            Casual Shirts <span>(7)</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className={cx('item-sidebar')}>
      <h4 className={cx('title')}>recent posts</h4>
    </div>
    <div className={cx('item-sidebar')}>
      <h4 className={cx('title')}>popular tags</h4>
      <div className={cx('tags-box')}>
        <Link to="/" title="Chairs">Chairs</Link>
        <Link to="/" title="Modern Designs">Modern Designs</Link>
        <Link to="/" title="Watches">Watches</Link>
        <Link to="/" title="Future">Future</Link>
        <Link to="/" title="Popular Products">Popular Products</Link>
        <Link to="/" title="Trendy">Trendy</Link>
        <Link to="/" title="Interier">Interier</Link>
        <Link to="/" title="Modern">Modern</Link>
      </div>
    </div>
  </div> );
}

export default SidebarV2;