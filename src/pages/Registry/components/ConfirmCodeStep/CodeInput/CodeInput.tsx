import { RefObject, ChangeEvent } from 'react';
import { useField } from 'formik';

import styles from './CodeInput.module.scss';

type Props = {
  name: string;
  onInputChange?: () => void;
  refInput?: RefObject<HTMLInputElement>;
};

const CodeInput = ({ name, refInput, onInputChange }: Props) => {
  const [field, meta, helpers] = useField(name);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const valid = field.value.length <= 1 && value.match(/^(\s*|\d+)$/);
    if (valid) {
      helpers.setValue(value);
      onInputChange?.();
    }
  };

  return (
    <input
      {...field}
      className={!!meta.error && meta.touched ? styles.error : ''}
      type="number"
      id={name}
      ref={refInput}
      onChange={(e) => handleInputChange(e)}
      onBlur={() => helpers.setTouched(false)}
      onFocus={(e) => {
        helpers.setValue('');
        e.target.value = '';
      }}
    />
  );
};

export default CodeInput;
