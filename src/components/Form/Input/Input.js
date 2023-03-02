/* Outside Source Library */
import PropTypes from 'prop-types';

function Input({ inputData, className }) {
  const { type, placeHolder = '' } = inputData;
  return <input className={className} type={type} placeholder={placeHolder} />;
}

Input.propTypes = {
  inputData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Input;
