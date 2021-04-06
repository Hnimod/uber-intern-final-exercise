import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';

import ConfirmCodeStep from './components/ConfirmCodeStep';
import PhoneNumberStep from './components/PhoneNumberStep';
import InfoStep from './components/InfoStep';
import BackgroundImage from '../../layouts/BackgroundImage';
import registryFormModel, { FormValues } from './models/registryFormModel';
import validationSchema from './models/validationSchema';

import styles from './Registry.module.scss';

const Registry = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Enter Phone Number', 'Confirm Code', 'Personal Info'];
  const currentValidationSchema = validationSchema[activeStep];
  const initialValues: FormValues = {
    phoneNumber: '',
    agree: false,
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    fullName: '',
    gender: 'male',
    picture: '',
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PhoneNumberStep formModel={registryFormModel} />;
      case 1:
        return <ConfirmCodeStep formModel={registryFormModel} />;
      case 2:
        return <InfoStep formModel={registryFormModel} />;
      default:
        return <Redirect to="/registry" />;
    }
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const submitForm = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep((currStep) => currStep + 1);
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const isLastStep = activeStep === steps.length - 1;

    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep((currStep) => currStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <BackgroundImage>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={currentValidationSchema}
      >
        <Form className={styles.form}>{renderStepContent(activeStep)}</Form>
      </Formik>
    </BackgroundImage>
  );
};

export default Registry;
