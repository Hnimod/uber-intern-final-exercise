import { Field } from 'formik';

import styles from './InputField.module.scss';

type Props = {
  style?: object;
};

const InputField = ({ style }: Props) => {
  return (
    <div className={`${styles.container} ${style}`}>
      <label htmlFor="name">Your Name:</label>
      <Field id="name" name="name" placeholder="Enter the issue" />
    </div>
  );
};

export default InputField;
