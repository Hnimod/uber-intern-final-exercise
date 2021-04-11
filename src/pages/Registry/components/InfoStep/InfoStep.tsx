import { useField } from 'formik';

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
  const [nameField, nameMeta] = useField(fullName.name);
  const [genderField] = useField(gender.name);

  return (
    <>
      <h1 className={styles.title}>Enter your info</h1>
      <div
        className={`${styles.nameInput} ${
          nameMeta.error && nameMeta.touched ? styles.error : ''
        }`}
      >
        <input
          {...nameField}
          id={fullName.name}
          placeholder={fullName.placeholder}
          autoComplete="off"
        />
      </div>

      <p className={styles.genderHead}>Select gender</p>
      <div className={styles.gender}>
        <div className={styles.maleRadio}>
          <label
            htmlFor="male"
            className={genderField.value === 'male' ? styles.choseGender : ''}
          >
            <img src={MaleIcon} alt="male icon" />
          </label>
          <input
            {...genderField}
            type="radio"
            id="male"
            value="male"
            checked={genderField.value === 'male'}
          />
        </div>
        <div className={styles.femaleRadio}>
          <label
            htmlFor="female"
            className={genderField.value === 'male' ? '' : styles.choseGender}
          >
            <img src={FemaleIcon} alt="female icon" />
          </label>
          <input
            {...genderField}
            type="radio"
            id="female"
            value="female"
            checked={genderField.value === 'female'}
          />
        </div>
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
