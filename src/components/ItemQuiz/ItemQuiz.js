import classNames from 'classnames/bind';
import styles from './ItemQuiz.module.scss';

const cx = classNames.bind(styles);
function ItemQuiz({ data, onClick, checked = false }) {
  
  const itemChecked = () => {
    if (checked)
      return (
        <span className={cx('checkBox', 'checked')} ></span>
      );
    else {
      return <span className={cx('checkBox')} ></span>;
    }
  };
  return (
    <div className={cx('boxQuiz')} onClick={onClick}>
      {itemChecked()}
      <span className={cx('content')}>{data}</span>
    </div>
  );
}

export default ItemQuiz;
