import { ErrorMessage, useField } from 'formik';

import ErrorText from '../ErrorText';
import { FormModel } from '../../models/registryFormModel';
import { FormButton } from '../../../../shared/Buttons';

import styles from './PhoneNumberStep.module.scss';

type Props = {
  formModel: FormModel;
};

const PhoneNumberStep = ({ formModel }: Props) => {
  const { phoneNumber, agree } = formModel;
  const [phoneField, phoneMeta, phoneHelpers] = useField(phoneNumber.name);
  const [agreeField, agreeMeta] = useField(agree.name);

  return (
    <>
      <h1 className={styles.title}>Get moving with Uber</h1>
      <div
        className={`${styles.input} ${
          !!phoneMeta.error && phoneMeta.touched && styles.errorPhone
        }`}
      >
        <label htmlFor={phoneNumber.name}>+84</label>
        <input
          {...phoneField}
          id={phoneNumber.name}
          placeholder={phoneNumber.placeholder}
          autoComplete="off"
          onChange={(e) => {
            if (e.target.value.match(/^(\s*|\d+)$/)) {
              phoneHelpers.setValue(e.target.value);
              return;
            }
          }}
        />
      </div>
      <ErrorMessage
        name={phoneNumber.name}
        render={(message) => (
          <ErrorText message={message} className={styles.errorPhoneText} />
        )}
      />

      <div
        className={`${styles.checkBox} ${
          !!agreeMeta.error && agreeMeta.touched && styles.errorAgree
        }`}
      >
        <input {...agreeField} id={agree.name} type="checkbox" />
        <label htmlFor={agree.name}>{agree.label}</label>
      </div>

      <div className={styles.button}>
        <FormButton />
      </div>
    </>
  );
};

export default PhoneNumberStep;
