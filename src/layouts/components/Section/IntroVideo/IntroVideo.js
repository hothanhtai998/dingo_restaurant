/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './IntroVideo.module.scss';
import BackgroundImage from '~/components/BackgroundImage';
import Overlay from '~/layouts/components/Overlay';
import SectionHeading from './../Heading/SectionHeading';

const cx = classNames.bind(styles);

function IntroVideo({ introVideoHeading, height, children }) {
  return (
    <BackgroundImage
      height={height}
      image={introVideoHeading.backgroundImage}
      className={cx('intro-video')}
    >
      <Overlay />
      <div className={cx('grid wide', 'text-center')}>
        <SectionHeading className={cx('text-white')} data={introVideoHeading} />
        {children}
      </div>
    </BackgroundImage>
  );
}

export default IntroVideo;
