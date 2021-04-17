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

export enum BookingSteps {
  PickUp = 0,
  Destination = 1,
  Summary = 2,
}

interface BookingState {
  activeStep: BookingSteps;
  pickup: string | null;
  pickupMarker: ICoordinate | null;
  pickupLocations: ILocation[];
  destination: string;
  destinationMarker: ICoordinate | null;
}

const initialState: BookingState = {
  activeStep: BookingSteps.PickUp,
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
    changePickupMarker: (state, action: PayloadAction<ICoordinate | null>) => {
      state.pickupMarker = action.payload;
    },
    changeStepToDestination: (state) => {
      state.activeStep = BookingSteps.Destination;
    },
    changeStepToPickup: (state) => {
      state.activeStep = BookingSteps.PickUp;
    },
    changeStepToSummary: (state) => {
      state.activeStep = BookingSteps.Summary;
    },
    changeDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    changeDestinationMarker: (
      state,
      action: PayloadAction<ICoordinate | null>
    ) => {
      state.destinationMarker = action.payload;
    },
  },
});

export const {
  changePickup,
  changePickupMarker,
  changeStepToDestination,
  changeStepToPickup,
  changeStepToSummary,
  changeDestination,
  changeDestinationMarker,
} = bookingSlice.actions;

export const selectBookingStep = (state: RootState) => state.booking.activeStep;
export const selectBookingPickup = (state: RootState) => state.booking.pickup;
export const selectBookingPickupMarker = (state: RootState) =>
  state.booking.pickupMarker;
export const selectBookingDestination = (state: RootState) =>
  state.booking.destination;
export const selectBookingDestinationMarker = (state: RootState) =>
  state.booking.destinationMarker;

export default bookingSlice.reducer;
