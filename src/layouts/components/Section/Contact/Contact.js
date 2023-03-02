/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Contact.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Contact() {
  return (
    <section className={cx('contact-area')}>
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col col-sm-12 col-md-12 col-lg-12')}>
            <h2 className={cx('contact-title')}>get in touch</h2>
            <div className={cx('row')}>
              <div className={cx('col-lg-8')}>
                <form className={cx('contact-form')} action=''>
                  <div className={cx('form-group')}>
                    <textarea
                      name=''
                      id=''
                      rows='10'
                      className={cx('form-control')}
                      placeholder='enter message'
                    ></textarea>
                  </div>
                  <div className={cx('form-group', 'half')}>
                    <input
                      type='text'
                      className={cx('form-control')}
                      placeholder='enter your name'
                    />
                  </div>
                  <div className={cx('form-group', 'half')}>
                    <input
                      type='text'
                      s
                      className={cx('form-control')}
                      placeholder='enter your e-mail'
                    />
                  </div>
                  <div className={cx('form-group')}>
                    <input
                      type='text'
                      className={cx('form-control')}
                      placeholder='enter subject'
                    />
                  </div>
                </form>
              </div>
              <div className={cx('col col-sm-12 col-md-4 col-lg-4')}>
                <div className={cx('contact-info')}>
                  <div className={cx('contact-info-icon')}>
                    <i className={cx('ti-home')}></i>
                  </div>
                  <div className={cx('contact-info-body')}>
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className={cx('contact-info')}>
                  <div className={cx('contact-info-icon')}>
                    <i className={cx('ti-tablet')}></i>
                  </div>
                  <div className={cx('contact-info-body')}>
                    <h3>00 (440) 9865 562</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className={cx('contact-info')}>
                  <div className={cx('contact-info-icon')}>
                    <i className={cx('ti-email')}></i>
                  </div>
                  <div className={cx('contact-info-body')}>
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
            <Button primary>send message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  contactData: PropTypes.array.isRequired,
};

export default Contact;
