/* Outside Source Library */
import PropTypes from 'prop-types';

/* Inside Source */
import HeaderAbsolute from '~/layouts/components/HeaderAbsolute';
import Footer from '~/layouts/components/Footer';

function AbsoluteLayout({ children }) {
  return (
    <>
      <HeaderAbsolute />
      {children}
      <Footer />
    </>
  );
}

AbsoluteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AbsoluteLayout;
