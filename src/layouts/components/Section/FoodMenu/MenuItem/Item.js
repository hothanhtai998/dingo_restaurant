/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './MenuItem.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item({ to, title }) {
  return (
    <NavLink
      className={(menu) => cx('menu-item', { active: menu.isActive })}
      to={to}
    >
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

Item.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
