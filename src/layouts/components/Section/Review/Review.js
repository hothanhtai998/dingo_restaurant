/* Outside Source Library */
import classNames from 'classnames/bind';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/* Inside Source */
import styles from './Review.module.scss';
import SectionHeading from './../Heading/SectionHeading';
import Image from '~/components/Image';
import data from '~/data';

const cx = classNames.bind(styles);

function Review() {
  const reviewHeading = data.reviewHeading;
  const reviewData = data.reviewData;
  return (
    <section className={cx('review-area')}>
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
            <SectionHeading data={reviewHeading} />
            <Carousel
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1200,
                  },
                  items: 1,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1200,
                    min: 600,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={3000}
              centerMode={false}
              draggable
              focusOnSelect={false}
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              slidesToSlide={1}
              swipeable
              showDots
            >
              {reviewData.map((data, key) => {
                return (
                  <div
                    key={key}
                    className={cx('col col-sm-11 col-md-11 col-lg-11')}
                  >
                    <div className={cx('client-review')}>
                      <div className={cx('client-img')}>
                        <Image src={data.image} />
                      </div>
                      <div className={cx('client-review-text')}>
                        <p>{data.reviewMessage}</p>
                        <h4>{data.name}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
