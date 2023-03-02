/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import data from '~/data';
import styles from './About.module.scss';
import Image from '~/components/Image';
import SectionHeading from './../Heading/SectionHeading';
const cx = classNames.bind(styles);

function About() {
  const aboutHeading = data.aboutHeading;

  return (
    <section className={cx('about-area')}>
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col-sm-12 col-lg-12')}>
            <div className={cx('row')}>
              <div className={cx('col-sm-12 col-md-6 col-lg-6')}>
                <Image src={aboutHeading.backgroundImage} />
              </div>
              <div className={cx('col-sm-12 col-md-6 col-lg-6')}>
                <div className={cx('about-text')}>
                  <SectionHeading readBtn={true} data={aboutHeading} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
