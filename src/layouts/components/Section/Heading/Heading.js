/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

function Heading({ data, className }) {
  const { smallTitle, largeTitle, captions } = data;
  const mBot = captions.length > 0 ? 0 : 60;
  return (
    <div style={{ marginBottom: mBot }} className={className}>
      <span className={cx('small-title')}>{smallTitle}</span>
      <h1 className={cx('large-title')}>{largeTitle}</h1>
      {captions.length > 0 &&
        captions.map((caps, key) => {
          return (
            <p key={key} className={cx('captions')}>
              {caps}
            </p>
          );
        })}
    </div>
  );
}

Heading.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Heading;
