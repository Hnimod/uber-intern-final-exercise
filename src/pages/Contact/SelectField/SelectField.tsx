import { Field } from 'formik';

import styles from './SelectField.module.scss';

type Props = {
  style?: object;
};

const SelectField = ({ style }: Props) => {
  return (
    <div className={`${styles.container} ${style}`}>
      <label htmlFor="type">Select:</label>
      <Field as="select" id="type" name="type">
        <option value="rider">Rider</option>
        <option value="driver">Driver</option>
      </Field>
    </div>
  );
};

export default SelectField;
