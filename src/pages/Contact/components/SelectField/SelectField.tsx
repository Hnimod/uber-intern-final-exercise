import { Field, FieldProps, ErrorMessage } from 'formik';

import { UserType } from '../../models/contactFormModel';
import ErrorText from '../ErrorText';

import styles from './SelectField.module.scss';

interface Props {
  name: string;
  label: string;
  options: UserType[];
}

const SelectField = ({ name, label, options }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const error = meta.touched && !!meta.error;
        const errorStyle = error ? styles.error : '';
        return (
          <section className={styles.typeSelect}>
            <div className={`${styles.select} ${errorStyle}`}>
              <label htmlFor={name}>{label}</label>
              <select {...field} id={name}>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <ErrorMessage
              name={name}
              render={(message) => <ErrorText message={message} />}
            />
          </section>
        );
      }}
    </Field>
  );
};

export default SelectField;
