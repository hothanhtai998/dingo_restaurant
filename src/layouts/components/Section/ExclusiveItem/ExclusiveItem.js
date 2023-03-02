/* Outside Source Library */
import classNames from 'classnames/bind';
/* Inside Source */
import styles from './ExclusiveItem.module.scss';
import SectionHeading from './../Heading/SectionHeading';
import Image from '~/components/Image';
import data from '~/data';

import ReadMoreButton from './../../ReadMoreButton';

const cx = classNames.bind(styles);

function ExclusiveItem() {
  const exclusiveItemHeading = data.exclusiveHeading;
  const foodItemData = data.foodItemData;
  return (
    <section className={cx('exclusive-item-area')}>
      <div className={cx('container grid wide')}>
        <SectionHeading data={exclusiveItemHeading} />
        <div className={cx('row')}>
          <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
            <div className={cx('row')}>
              {foodItemData.slice(0, 3).map((foodItem, key) => {
                return (
                  <div key={key} className='col col-sm-12 col-md-6 col-lg-4'>
                    <div className={cx('single-item')}>
                      <div className={cx('single-item-img')}>
                        <Image src={foodItem.images} />
                      </div>
                      <div className={cx('single-item-text')}>
                        <h3>{foodItem.name}</h3>
                        <p>{foodItem.description}</p>
                        <ReadMoreButton />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExclusiveItem;
