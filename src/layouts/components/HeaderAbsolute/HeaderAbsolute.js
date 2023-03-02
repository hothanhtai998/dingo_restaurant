/* Outside Source Library */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
/* Inside Source */
import styles from './HeaderAbsolute.module.scss';
import { NavBar } from './NavBar';
import config from '~/config';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeaderAbsolute() {
  const [scrolled, setScrolled] = useState(false);
  const [navButton, setNavButton] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handlerNavButton = () => {
    setNavButton((pre) => !pre);
  };

  let navbarClasses;
  if (scrolled) {
    navbarClasses = 'scrolled';
  }
  return (
    <header className={cx('main-menu', navbarClasses)}>
      <div className={cx('grid wide')}>
        <div className={cx('row')}>
          <div className={cx('col col-lg-12')}>
            <div className={cx('nav-wrap')}>
              <Link className={cx('logo-img')} to={config.routes.home}>
                <Image src={images.logo} alt='logo_png' />
              </Link>

              <Button onClick={handlerNavButton} className={cx('nav-button')}>
                Menu
              </Button>
              {window.matchMedia('(min-width: 768px)').matches ? (
                <>
                  <NavBar />
                  <Button rounded>Book a table</Button>
                </>
              ) : (
                navButton && <NavBar className='menu' />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderAbsolute;
