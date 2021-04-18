import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';

import ConfirmCodeStep from './components/ConfirmCodeStep';
import PhoneNumberStep from './components/PhoneNumberStep';
import InfoStep from './components/InfoStep';
import registryFormModel, { FormValues } from './models/registryFormModel';
import validationSchema from './models/validationSchema';
import BackgroundImage from '../../layouts/BackgroundImage';
import styles from './Registry.module.scss';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectRegistry,
  RegistryStep,
  verifyPhoneNumber,
  verifyOTP,
  resetFormStep,
} from '../../features/registry/registrySlice';
import { authSignup, selectToken } from '../../features/auth/authSlice';

const Registry = () => {
  const registry = useAppSelector(selectRegistry);
  const auth = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const currentValidationSchema = validationSchema[registry.activeStep];
  const history = useHistory();

  useEffect(() => {
    if (registry.error) {
      alert(registry.error);
    }

    if (registry.verify) {
      alert('OTP accepted.');
    }
  }, [registry.error, registry.verify]);

  useEffect(() => {
    if (!!auth) {
      dispatch(resetFormStep());
      history.push('/booking');
    }
    // eslint-disable-next-line
  }, [auth]);

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
      case RegistryStep.PhoneNumber:
        return <PhoneNumberStep formModel={registryFormModel} />;
      case RegistryStep.ConfirmCode:
        return <ConfirmCodeStep formModel={registryFormModel} />;
      case RegistryStep.Info:
        return <InfoStep formModel={registryFormModel} />;
      default:
        return <Redirect to="/" />;
    }
  };

  const submitPhoneNumberStep = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await dispatch(verifyPhoneNumber(values.phoneNumber));
    actions.setSubmitting(false);
    actions.setTouched({});
  };

  const submitConfirmCodeStep = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const { code1, code2, code3, code4 } = values;
    const otp = [code1, code2, code3, code4];
    await dispatch(verifyOTP(otp));
    actions.setSubmitting(false);
    actions.setTouched({});
  };

  const submitInfoStep = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await dispatch(authSignup(values.fullName));
    actions.setSubmitting(false);
    actions.setTouched({});
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    switch (registry.activeStep) {
      case RegistryStep.PhoneNumber:
        submitPhoneNumberStep(values, actions);
        break;
      case RegistryStep.ConfirmCode:
        submitConfirmCodeStep(values, actions);
        break;
      case RegistryStep.Info:
        submitInfoStep(values, actions);
        break;
      default:
        throw new Error('Invalid step');
    }
  };

  return (
    <BackgroundImage>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={currentValidationSchema}
      >
        <Form className={styles.form}>
          {renderStepContent(registry.activeStep)}
        </Form>
      </Formik>
    </BackgroundImage>
  );
};

export default Registry;
