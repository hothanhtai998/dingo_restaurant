/* Outside Source Library */
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Chefs.module.scss';
import SectionHeading from './../Heading/SectionHeading';
import Image from '~/components/Image';
import data from '~/data';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Chefs() {
  const chefsHeading = data.chefsHeading;
  const chefsData = data.chefsData;
  return (
    <section className={cx('chefs-area')}>
      <div className={cx('grid wide')}>
        <SectionHeading data={chefsHeading} />
        <div className={cx('row')}>
          <div className={cx('col-sm-12 col-md-12 col-lg-12')}>
            <div className={cx('row')}>
              {chefsData.map((data, key) => {
                return (
                  <div
                    key={key}
                    className={cx('col col-sm-12 col-md-6 col-lg-4')}
                  >
                    <div className={cx('single-item')}>
                      <div className={cx('single-item-img')}>
                        <Image src={data.image} />
                      </div>
                      <div className={cx('single-item-text', 'text-center')}>
                        <h3>{data.name}</h3>
                        <p>{data.position}</p>
                        <div className={cx('social-icon')}>
                          <Link>
                            <i className={cx('ti-facebook')}></i>
                          </Link>
                          <Link>
                            <i className={cx('ti-twitter-alt')}></i>
                          </Link>
                          <Link>
                            <i className={cx('ti-instagram')}></i>
                          </Link>
                          <Link>
                            <i className={cx('ti-skype')}></i>
                          </Link>
                        </div>
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

export default Chefs;
