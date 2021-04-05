import { Formik, Form, FormikHelpers } from 'formik';
import { IoMailSharp } from 'react-icons/io5';

import BackgroundImage from '../../layouts/BackgroundImage';
import { FormButton } from '../../shared/Buttons';
import InputField from './InputField';
import SelectField from './SelectField';
import TextareaField from './TextareaField';

import styles from './Contact.module.scss';

interface Values {
  name: string;
  type: string;
  message: string;
}

const Contact = () => {
  return (
    <BackgroundImage>
      <Formik
        initialValues={{ name: '', type: 'rider', message: '' }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.title}>
            <IoMailSharp />
            <h1>Contact us</h1>
          </div>
          <div className={styles.detail}>
            <div className={styles.info}>
              <InputField />
              <SelectField />
            </div>
            <div className={styles.message}>
              <TextareaField />
            </div>
          </div>
          <div className={styles.button}>
            <FormButton />
          </div>
        </Form>
      </Formik>
    </BackgroundImage>
  );
};

export default Contact;
