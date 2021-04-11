export const verifyPhoneNumberService = (phoneNumber: string) => {
  return new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      const re = /^\d+$/;
      const valid =
        phoneNumber.match(re) &&
        phoneNumber.length >= 9 &&
        phoneNumber.length <= 10;
      if (valid) {
        resolve({ data: phoneNumber });
        alert(`Your OTP for ${phoneNumber} is: 1234`);
      } else {
        reject('Invalid phone number');
      }
    }, 2000);
  });
};
