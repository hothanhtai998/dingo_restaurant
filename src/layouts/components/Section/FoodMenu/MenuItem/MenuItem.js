/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */

function MenuItem({ children }) {
  return <nav>{children}</nav>;
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuItem;
