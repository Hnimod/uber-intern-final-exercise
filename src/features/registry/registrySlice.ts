import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { verifyPhoneNumberService } from '../../api/verifyPhoneNumber';
import { verifyOTPService } from '../../api/verifyOTP';
import { RootState } from '../../app/store';

export enum RegistryStep {
  PhoneNumber = 0,
  ConfirmCode = 1,
  Info = 2,
}

interface RegistryState {
  phoneNumber: string;
  verify: boolean;
  error: string | null;
  activeStep: RegistryStep;
}

const initialState: RegistryState = {
  phoneNumber: '',
  verify: false,
  error: null,
  activeStep: RegistryStep.PhoneNumber,
};

export const verifyPhoneNumber = createAsyncThunk(
  'registry/verifyPhoneNumber',
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      const response = await verifyPhoneNumberService(phoneNumber);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  'registry/verifyOTP',
  async (otp: string[], { rejectWithValue }) => {
    try {
      const response = await verifyOTPService(otp);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyPhoneNumber.pending, (state) => {
        state.error = null;
      })
      .addCase(verifyPhoneNumber.fulfilled, (state, action) => {
        state.phoneNumber = action.payload;
        state.activeStep = RegistryStep.ConfirmCode;
      })
      .addCase(verifyPhoneNumber.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state) => {
        state.verify = true;
        state.activeStep = RegistryStep.Info;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const selectRegistry = (state: RootState) => state.registry;

export default registrySlice.reducer;
