export interface FormModel {
  phoneNumber: {
    name: string;
    label: string;
    placeholder: string;
    errorMessage: string;
  };
  agree: {
    name: string;
    label: string;
    errorMessage: string;
  };
  code1: { name: string };
  code2: { name: string };
  code3: { name: string };
  code4: { name: string };
  fullName: {
    name: string;
    placeholder: string;
    errorMessage: string;
  };
  gender: { name: string; errorMessage: string };
  picture: { name: string };
}

export interface FormValues {
  phoneNumber: string;
  agree: boolean;
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  fullName: string;
  gender: string;
  picture: string;
}

const registryModel: FormModel = {
  phoneNumber: {
    name: 'phoneNumber',
    label: '+84',
    placeholder: 'Enter your mobile number',
    errorMessage: 'Phone number is required',
  },
  agree: {
    name: 'agree',
    label: 'Agree terms and conditions',
    errorMessage: 'You have to agree terms and conditions',
  },
  code1: { name: 'code1' },
  code2: { name: 'code2' },
  code3: { name: 'code3' },
  code4: { name: 'code4' },
  fullName: {
    name: 'fullName',
    placeholder: 'Enter your full name',
    errorMessage: 'Your name is required',
  },
  gender: { name: 'gender', errorMessage: 'Please choose your gender' },
  picture: { name: 'picture' },
};

export default registryModel;
