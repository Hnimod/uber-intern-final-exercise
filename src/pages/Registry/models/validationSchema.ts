import * as Yup from 'yup';
import registryFormModel from './registryFormModel';

const {
  phoneNumber,
  agree,
  code1,
  code2,
  code3,
  code4,
  fullName,
  gender,
} = registryFormModel;

const registryFormValidation = [
  Yup.object().shape({
    [phoneNumber.name]: Yup.string().required('Please enter your phone number'),
    // .min(9, 'At least 9 digits')
    // .max(10, 'Maximum 10 digits'),
    [agree.name]: Yup.boolean().oneOf([true]),
  }),
  Yup.object().shape({
    [code1.name]: Yup.string().required(),
    [code2.name]: Yup.string().required(),
    [code3.name]: Yup.string().required(),
    [code4.name]: Yup.string().required(),
  }),
  Yup.object().shape({
    [fullName.name]: Yup.string().required(),
    [gender.name]: Yup.string().oneOf(['male', 'female'], 'Invalid gender'),
  }),
];

export default registryFormValidation;
