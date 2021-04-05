import { Field, FieldProps } from 'formik';

import { FormModel } from '../../models/registryFormModel';
import { FormButton } from '../../../../shared/Buttons';
import CameraIcon from '../../../../images/compact-camera.png';
import MaleIcon from '../../../../images/male-icon.png';
import FemaleIcon from '../../../../images/female-icon.png';

import styles from './InfoStep.module.scss';

type Props = {
  formModel: FormModel;
};

const Info = ({ formModel }: Props) => {
  const { fullName, gender } = formModel;

  return (
    <>
      <h1 className={styles.title}>Enter your info</h1>
      <Field name={fullName.name}>
        {({ field, meta }: FieldProps) => (
          <div
            className={`${styles.nameInput} ${
              meta.error && meta.touched ? styles.error : ''
            }`}
          >
            <input
              {...field}
              id={fullName.name}
              placeholder={fullName.placeholder}
              autoComplete="off"
            />
          </div>
        )}
      </Field>

      <p className={styles.genderHead}>Select gender</p>
      <div className={styles.gender}>
        <Field name={gender.name}>
          {({ field, meta, form }: FieldProps) => (
            <>
              {console.log(field, meta, form)}
              <div className={styles.maleRadio}>
                <label
                  htmlFor="male"
                  className={field.value === 'male' ? styles.choseGender : ''}
                >
                  <img src={MaleIcon} alt="male icon" />
                </label>
                <input
                  {...field}
                  type="radio"
                  id="male"
                  value="male"
                  checked={field.value === 'male'}
                />
              </div>
              <div className={styles.femaleRadio}>
                <label
                  htmlFor="female"
                  className={field.value === 'male' ? '' : styles.choseGender}
                >
                  <img src={FemaleIcon} alt="female icon" />
                </label>
                <input
                  {...field}
                  type="radio"
                  id="female"
                  value="female"
                  checked={field.value === 'female'}
                />
              </div>
            </>
          )}
        </Field>
      </div>
      <div className={styles.upload}>
        <div className={styles.imagePreview}>
          <img src={CameraIcon} alt="camera icon" />
        </div>
        <p>Upload profile picture</p>
      </div>
      <div className={styles.button}>
        <FormButton />
      </div>
    </>
  );
};

export default Info;
