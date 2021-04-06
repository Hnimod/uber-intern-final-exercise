import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import { IoMailSharp } from 'react-icons/io5';

import BackgroundImage from '../../layouts/BackgroundImage';
import { FormButton } from '../../shared/Buttons';
import InputField from './components/InputField';
import SelectField from './components/SelectField';
import TextareaField from './components/TextareaField';

import ContactFormModel, {
  IContact,
  UserType,
} from './models/contactFormModel';
import ContactFormValidation from './models/validationShema';

import styles from './Contact.module.scss';

const Contact = () => {
  const initialValues: IContact = {
    name: '',
    type: UserType.select,
    message: '',
  };
  const { type, name, message } = ContactFormModel;

  return (
    <BackgroundImage>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactFormValidation}
        onSubmit={(
          values: IContact,
          { setSubmitting }: FormikHelpers<IContact>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ isSubmitting, isValid }: FormikProps<IContact>) => (
          <Form className={styles.form}>
            <div className={styles.title}>
              <IoMailSharp />
              <h1>Contact us</h1>
            </div>
            <div className={styles.detail}>
              <div className={styles.info}>
                <InputField
                  name={name.name}
                  label={name.label}
                  placeholder={name.placeholder}
                />
                <SelectField
                  name={type.name}
                  label={type.label}
                  options={[UserType.select, UserType.rider, UserType.driver]}
                />
              </div>
              <div className={styles.message}>
                <TextareaField
                  name={message.name}
                  label={message.label}
                  placeholder={message.placeholder}
                />
              </div>
            </div>
            <div className={styles.button}>
              <FormButton isSpinning={isSubmitting} disabled={!isValid} />
            </div>
          </Form>
        )}
      </Formik>
    </BackgroundImage>
  );
};

export default Contact;
