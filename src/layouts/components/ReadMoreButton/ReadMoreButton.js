/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './ReadMoreButton.module.scss';
import { Link } from 'react-router-dom';
import { LeftTwo } from '~/components/Icons';
const cx = classNames.bind(styles);

function ReadMoreButton() {
  return (
    <Link className={cx('read-more-btn')}>
      read more
      <LeftTwo />
    </Link>
  );
}

export default ReadMoreButton;
