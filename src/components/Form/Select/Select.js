/* Outside Source Library */
import PropTypes from 'prop-types';

function Select({ selectData, selectPlaceHolder, className }) {
  return (
    <select className={className}>
      <option>{selectPlaceHolder}</option>
      {selectData.map((data, key) => {
        return (
          <option key={key} value={data}>
            {data}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  selectData: PropTypes.array,
};

export default Select;
