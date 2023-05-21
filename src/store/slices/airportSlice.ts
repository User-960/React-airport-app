import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAirport } from '../../models/models';

interface AirportState {
  loading: boolean
  error: string
  airports: IAirport[]
};

const initialState: AirportState = {
  loading: false,
  error: '',
  airports: []
};

const airportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers: {
    fetching(state) {
      state.error = '';
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IAirport[]>) {
      state.error = '';
      state.loading = false;
      state.airports = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export const { fetching, fetchSuccess, fetchError } = airportSlice.actions;
export default airportSlice.reducer;
