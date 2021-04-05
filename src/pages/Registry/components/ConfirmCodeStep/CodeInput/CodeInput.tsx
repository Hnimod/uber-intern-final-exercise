import { RefObject } from 'react';
import { Field, FieldProps } from 'formik';

import styles from './CodeInput.module.scss';

type Props = {
  name: string;
  onInputChange?: () => void;
  refInput?: RefObject<HTMLInputElement>;
};

const CodeInput = ({ name, refInput, onInputChange }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => (
        <input
          {...field}
          className={!!meta.error && meta.touched ? styles.error : ''}
          type="text"
          maxLength={1}
          id={name}
          ref={refInput}
          onChange={(e) => {
            if (e.target.value.match(/^[0-9]$/)) {
              form.setFieldValue(name, e.target.value);
              onInputChange?.();
              return;
            }
            form.setFieldValue(name, '');
          }}
        />
      )}
    </Field>
  );
};

export default CodeInput;
