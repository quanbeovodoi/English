import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames/bind';
import style from './IncreaseButton.module.scss';
const cx = classNames.bind(style);
function IncreaseButton({quantityCurrent = 0,increaseFunc = ()=>{},discreaseFunc = ()=>{}}) {
    return ( <div className={cx('qty-container')}>
    <button className={cx('qty-btn')} type="button" onClick={()=>increaseFunc()}>
    <FontAwesomeIcon icon={faMinus} />
    </button>
    <input
      type="text"
      name="qty"
      className={cx('qty-input-box')}
      disabled
      value={quantityCurrent}
    />
    <button className={cx('qty-btn')} type="button" onClick={()=>discreaseFunc()}>
      <FontAwesomeIcon icon={faPlus} /> 
    </button>
  </div> );
}

export default IncreaseButton;