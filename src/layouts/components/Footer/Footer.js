// import outside library
import classNames from 'classnames/bind';

// import css
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer-area')}>
      <div className='grid wide'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <div className='row'>
              <div className={cx('col col-sm-12 col-md-6 col-lg-3')}>
                <div className={cx('single-item')}>
                  <h2>About Us</h2>
                  <p>
                    Heaven fruitful doesn't over for these theheaven fruitful
                    doe over days appear creeping seasons sad behold beari ath
                    of it fly signs bearing be one blessed after
                  </p>
                </div>
              </div>
              <div className={cx('col col-sm-12 col-md-6 col-lg-3')}>
                <div className={cx('single-item')}>
                  <h2>Important Link</h2>
                  <ul className={cx('list')}>
                    <li>
                      <Link> WHMCS-bridge </Link>
                    </li>
                    <li>
                      <Link>Search Domain</Link>
                    </li>
                    <li>
                      <Link>My Account</Link>
                    </li>
                    <li>
                      <Link>Shopping Cart</Link>
                    </li>
                    <li>
                      <Link>Our Shop</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={cx('col col-sm-12 col-md-6 col-lg-3')}>
                <div className={cx('single-item')}>
                  <h2>Contact us</h2>
                  <ul className={cx('list')}>
                    <li>
                      Address :Hath of it fly signs bear be one blessed after
                    </li>
                    <li>
                      Phone : <Link>+2 36 265 (8060)</Link>
                    </li>
                    <li>
                      Email : <Link>info@colorlib.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx('col col-sm-12 col-md-6 col-lg-3')}>
                <div className={cx('single-item')}>
                  <h2>Newsletter</h2>
                  <ul className={cx('list')}>
                    <li>
                      Heaven fruitful doesn't over lesser in days. Appear
                      creeping seas
                    </li>
                  </ul>
                  <form action=''>
                    <div className={cx('form-group')}>
                      <div className={cx('input-group')}>
                        <input
                          type='text'
                          className={cx('form-control')}
                          placeholder='Email Address'
                        />
                        <div className={cx('input-group-append')}>
                          <Button primary>Send</Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 col-md-12 col-lg-12'>
            <p className={cx('copy-right')}>
              Copyright ©2022 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
