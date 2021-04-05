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
    [phoneNumber.name]: Yup.string().required(),
    [agree.name]: Yup.boolean().oneOf([true]),
  }),
  Yup.object().shape({
    [code1.name]: Yup.string()
      .required()
      .matches(/^[0-9]$/, 'number only'),
    [code2.name]: Yup.string()
      .required()
      .matches(/^[0-9]$/, 'number only'),
    [code3.name]: Yup.string()
      .required()
      .matches(/^[0-9]$/, 'number only'),
    [code4.name]: Yup.string()
      .required()
      .matches(/^[0-9]$/, 'number only'),
  }),
  Yup.object().shape({
    [fullName.name]: Yup.string().required(),
    [gender.name]: Yup.string().oneOf(['male', 'female'], 'Invalid gender'),
  }),
];

export default registryFormValidation;
