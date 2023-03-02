/* Outside Source Library */
import classNames from 'classnames/bind';
import { ForwardedRef } from 'react';
/* Inside Source */
import styles from './Reservation.module.scss';
import SectionHeading from './../Heading/SectionHeading';
import Form from '~/components/Form';
import BackgroundImage from '~/components/BackgroundImage';
import Button from '~/components/Button';
import data from '~/data';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const Reservation = forwardRef((props, ref) => {
  const reservationHeading = data.reservationHeading;
  const reservationForm = data.reservationForm;
  return (
    <BackgroundImage
      image={reservationHeading.backgroundImage}
      className={cx('reservation-area')}
      ref={ref}
    >
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col-sm-12')}>
            <SectionHeading
              className={cx('text-white')}
              data={reservationHeading}
            />
          </div>
          <div className={cx('col col-sm-12 col-md-8 col-lg-6')}>
            <Form formData={reservationForm} />
            <Button primary>take</Button>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
});

export default Reservation;
