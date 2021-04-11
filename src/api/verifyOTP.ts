export const verifyOTPService = (otp: string[]) => {
  return new Promise<{ data: string }>((resolve, reject) => {
    const YOUR_OTP = ['1', '2', '3', '4'];
    setTimeout(() => {
      const valid =
        otp.length === YOUR_OTP.length &&
        otp.every((value, index) => value === YOUR_OTP[index]);

      if (valid) {
        resolve({ data: 'success' });
      } else {
        reject('Invalid OTP');
      }
    }, 2000);
  });
};
