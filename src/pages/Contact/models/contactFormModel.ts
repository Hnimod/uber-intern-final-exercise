export enum UserType {
  select = 'select',
  driver = 'driver',
  rider = 'rider',
}

export interface IContact {
  type: UserType;
  name: string;
  message: string;
}

const ContactFormModel = {
  name: {
    name: 'name',
    label: 'Your name:',
    placeholder: 'Enter your name',
    error: 'Please enter your name',
  },
  type: {
    name: 'type',
    label: 'Select:',
    error: 'Please select your type',
  },
  message: {
    name: 'message',
    label: 'Message:',
    placeholder: 'Enter your message',
    error: 'Please enter your message',
  },
};

export default ContactFormModel;
