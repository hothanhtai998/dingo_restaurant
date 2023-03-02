/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './SectionHeading.module.scss';
import ReadMoreButton from '~/layouts/components/ReadMoreButton';

const cx = classNames.bind(styles);

function SectionHeading({ data, className, readBtn }) {
  const { smallTitle, largeTitle, subLargeTitle, captions } = data;

  return (
    <div className={cx('col col-sm-12 col-md-12 col-lg-12')}>
      <p className={cx('small-heading', className)}>{smallTitle}</p>
      <h2 className={cx('large-heading', className)}>{largeTitle}</h2>
      {subLargeTitle && (
        <h4 className={cx('sub-large-heading', className)}>{subLargeTitle}</h4>
      )}
      {captions &&
        captions.map((caption, key) => {
          return (
            <p className={cx('caption-heading', className)} key={key}>
              {caption}
            </p>
          );
        })}

      {readBtn && <ReadMoreButton />}
    </div>
  );
}

SectionHeading.propTypes = {
  data: PropTypes.object,
};

export default SectionHeading;
