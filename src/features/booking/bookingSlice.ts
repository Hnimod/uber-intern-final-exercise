import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ICoordinate {
  lng: number;
  lat: number;
}

export interface ILocation {
  id: number;
  coordinate: ICoordinate;
  name: string;
  address: string;
}

interface BookingState {
  pickup: string | null;
  pickupMarker: ICoordinate | null;
  pickupLocations: ILocation[];
  destination: string;
  destinationMarker: ICoordinate | null;
}

const initialState: BookingState = {
  pickup: '',
  pickupMarker: null,
  pickupLocations: [],
  destination: '',
  destinationMarker: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    changePickup: (state, action: PayloadAction<string>) => {
      state.pickup = action.payload;
    },
    changePickupMarker: (state, action: PayloadAction<ICoordinate>) => {
      state.pickupMarker = action.payload;
    },
  },
});

export const { changePickup, changePickupMarker } = bookingSlice.actions;

export const selectBookingPickup = (state: RootState) => state.booking.pickup;
export const selectBookingPickupMarker = (state: RootState) =>
  state.booking.pickupMarker;

export default bookingSlice.reducer;
