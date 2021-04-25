import { Field, FieldProps, ErrorMessage } from 'formik';

import ErrorText from '../ErrorText';

import styles from './TextareaField.module.scss';

interface Props {
  name: string;
  label: string;
  placeholder: string;
}

const TextareaField = ({ name, label, placeholder }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const error = meta.touched && !!meta.error;
        const errorStyle = error ? styles.error : '';
        return (
          <section className={styles.messageArea}>
            <div className={`${styles.textarea} ${errorStyle}`}>
              <label htmlFor={name}>{label}</label>
              <textarea
                {...field}
                rows={4}
                id={name}
                placeholder={placeholder}
                data-testid="contactTextarea"
              />
            </div>
            <ErrorMessage
              name={name}
              render={(message) => (
                <ErrorText message={message} testId="contactTextareaError" />
              )}
            />
          </section>
        );
      }}
    </Field>
  );
};

export default TextareaField;
