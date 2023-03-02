/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './FoodMenu.module.scss';
import SectionHeading from './../Heading/SectionHeading/SectionHeading';
import Image from '~/components/Image';
import data from '~/data';
import MenuItem from './MenuItem/MenuItem';
import Item from './MenuItem/Item';

const cx = classNames.bind(styles);

function FoodMenu() {
  const foodHeading = data.foodHeading;
  const foodMenuData = data.foodMenuData;
  return (
    <section className={cx('food-menu-area')}>
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
            <div className={cx('row')}>
              <SectionHeading data={foodHeading} />
              {/* <div className={cx('col col-sm-12 col-md-6 col-lg-6')}>
                <MenuItem>
                  <Item title='special' />
                  <Item title='breakfast' />
                  <Item title='lunch' />
                  <Item title='dinner' />
                  <Item title='sneak' />
                </MenuItem>
              </div> */}
            </div>
            <div className={cx('row')}>
              {foodMenuData.map((data, key) => {
                return (
                  <div
                    key={key}
                    className={cx('col col-sm-12 col-md-6 col-lg-6')}
                  >
                    <div className={cx('single-food')}>
                      <Image src={data.images} />
                      <div className={cx('food-text')}>
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <h5>${data.price}</h5>
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

export default FoodMenu;
