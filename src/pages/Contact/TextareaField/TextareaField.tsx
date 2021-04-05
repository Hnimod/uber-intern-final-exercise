import { Field } from 'formik';

import styles from './TextareaField.module.scss';

const TextareaField = () => {
  return (
    <div className={styles.container}>
      <label htmlFor="message">Message:</label>
      <Field
        as="textarea"
        rows={4}
        id="message"
        name="message"
        placeholder="Enter your message"
      />
    </div>
  );
};

export default TextareaField;
