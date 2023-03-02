/* Outside Source Library */
import PropTypes from 'prop-types';

function TextArea({ data, className }) {
  const { colNumber, rowNumber, placeHolder = '' } = data;
  return (
    <textarea
      className={className}
      cols={colNumber}
      rows={rowNumber}
      placeholder={placeHolder}
    ></textarea>
  );
}

TextArea.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default TextArea;
