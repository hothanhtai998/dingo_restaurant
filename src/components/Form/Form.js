/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from './Form.module.scss';
import Input from '~/components/Form/Input';
import TextArea from '~/components/Form/TextArea';
import Button from '~/components/Button';
import Select from './Select/Select';

const cx = classNames.bind(styles);

function Form({ formData }) {
  return (
    <form className={cx('simple-form')} action=''>
      {formData.map((data, key) => {
        return (
          <div key={key} className={cx('form-group')}>
            {data.formName === 'note' ? (
              <TextArea className={cx('form-control')} data={data} />
            ) : data.type === 'select' ? (
              <Select
                className={cx('form-control')}
                selectPlaceHolder={data.placeHolder}
                selectData={data.selectData}
              />
            ) : (
              <Input className={cx('form-control')} inputData={data} />
            )}
          </div>
        );
      })}
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.array.isRequired,
};

export default Form;
