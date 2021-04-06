import { Field, FieldProps } from 'formik';

import { FormModel } from '../../models/registryFormModel';
import { FormButton } from '../../../../shared/Buttons';

import styles from './PhoneNumberStep.module.scss';

type Props = {
  formModel: FormModel;
};

const PhoneNumberStep = ({ formModel }: Props) => {
  const { phoneNumber, agree } = formModel;
  return (
    <>
      <h1 className={styles.title}>Get moving with Uber</h1>
      <Field name={phoneNumber.name}>
        {({ field, meta }: FieldProps) => (
          <div
            className={`${styles.input} ${
              !!meta.error && meta.touched && styles.errorPhone
            }`}
          >
            <label htmlFor={phoneNumber.name}>+84</label>
            <input
              {...field}
              id={phoneNumber.name}
              placeholder={phoneNumber.placeholder}
              autoComplete="off"
            />
          </div>
        )}
      </Field>
      <Field name={agree.name}>
        {({ field, meta }: FieldProps) => (
          <div
            className={`${styles.checkBox} ${
              !!meta.error && meta.touched && styles.errorAgree
            }`}
          >
            <input {...field} id={agree.name} type="checkbox" />
            <label htmlFor={agree.name}>{agree.label}</label>
          </div>
        )}
      </Field>
      <div className={styles.button}>
        <FormButton submit />
      </div>
    </>
  );
};

export default PhoneNumberStep;
