import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';
import NavItem from './NavItem';
import config from '~/config';

const cx = classNames.bind(styles);
function NavBar({ className }) {
  const [click, setClick] = useState(true);

  const handlerClick = () => {
    setClick((pre) => !pre);
    console.log(click);
  };

  useEffect(() => {
    window.addEventListener('click', handlerClick);

    return () => {
      window.removeEventListener('click', handlerClick);
    };
  });

  return (
    <nav className={cx('nav', className)}>
      <NavItem to={config.routes.home} title='home'></NavItem>
      <NavItem to={config.routes.about} title='about'></NavItem>
      <NavItem to={config.routes.menu} title='menu'></NavItem>
      <NavItem to={config.routes.chefs} title='chefs'></NavItem>
      {/* <NavItem to={config.routes.blog} title='blog'></NavItem> */}
      <NavItem to={config.routes.contact} title='contact'></NavItem>
    </nav>
  );
}

export default NavBar;
