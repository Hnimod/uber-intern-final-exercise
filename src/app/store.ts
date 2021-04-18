import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registryReducer from '../features/registry/registrySlice';
import bookingReducer from '../features/booking/bookingSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    registry: registryReducer,
    booking: bookingReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
