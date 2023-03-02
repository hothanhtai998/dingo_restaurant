import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/images';

const Image = forwardRef(
  (
    { src, alt, fallback: customFallback = images.noImage, className, ...prop },
    ref,
    to
  ) => {
    const [fallback, setFallback] = useState('');

    const handlerError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        ref={ref}
        src={fallback || src}
        alt={alt}
        className={className}
        {...prop}
        onError={handlerError}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
