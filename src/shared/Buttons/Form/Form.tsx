import { RefObject } from 'react';
import { Field, FieldProps } from 'formik';

import { HiOutlineArrowRight } from 'react-icons/hi';
import Spinner from '../../Spinner';

import styles from './Form.module.scss';

type Props = {
  className?: string;
  buttonRef?: RefObject<HTMLButtonElement>;
};

const FormButton = ({ className, buttonRef }: Props) => {
  return (
    <Field>
      {({ form }: FieldProps) => (
        <button
          className={styles.formButton + ' ' + className}
          type="submit"
          disabled={!form.dirty || form.isSubmitting}
          ref={buttonRef}
        >
          {form.isSubmitting ? <Spinner /> : <HiOutlineArrowRight />}
        </button>
      )}
    </Field>
  );
};

export default FormButton;
