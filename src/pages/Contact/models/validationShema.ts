import * as Yup from 'yup';
import ContactFormModel, { UserType } from './contactFormModel';

const { name, type, message } = ContactFormModel;

const ContactFormValidation = Yup.object().shape({
  [name.name]: Yup.string().required(`${name.error}`),
  [message.name]: Yup.string().required(`${message.error}`),
  [type.name]: Yup.string().oneOf(
    [UserType.rider, UserType.driver],
    type.error
  ),
});
export default ContactFormValidation;
