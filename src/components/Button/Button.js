import { Link, NavLink } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Button({
  to,
  className,
  effect = false,
  transparent = false,
  primary = false,
  text = false,
  icon = false,
  data_hover,
  children,
  ...props
}) {
  let Button = 'button';
  let classes = cx('wrapper', {
    [className]: className,
    text,
    effect,
    primary,
    transparent,
    icon
  });
  if (to) {
    Button = NavLink;
    return (
      <Button
        className={
          ({ isActive }) => {
            if (isActive) return `${classes} ${cx('active')}`;
            else return classes;
          }
        }
        to={to}
        data-hover={data_hover}
        {...props}
      >
        {children}
      </Button>
    );
  } else
    return (
      <Button className={classes} to={to} data-hover={data_hover} {...props}>
        {children}
      </Button>
    );
}

export default Button;
