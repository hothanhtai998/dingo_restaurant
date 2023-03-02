/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Banner.module.scss';
import Heading from '../Heading';
import BackgroundImage from '~/components/BackgroundImage';
import data from '~/data';
import { Link } from 'react-router-dom';
import { LeftOne, LeftTwo, Play } from '~/components/Icons';


const cx = classNames.bind(styles);

function Banner() {
  const bannerHeading = data.bannerHeading;

  return (
    <BackgroundImage
      image={
        window.matchMedia('(min-width: 768px)').matches &&
        bannerHeading.backgroundImage
      }
      className={cx('banner-area')}
    >
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col col-sm-12 col-md-8 col-lg-6')}>
            <div className={cx('banner-text')}>
              <Heading className={cx('text-center')} data={bannerHeading} />
              <div className={cx('banner-btn')}>
                <div className={cx('banner-btn-inner')}>
                  <Link className={cx('btn-2')}>
                    Reservation
                    <LeftOne />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}

export default Banner;
