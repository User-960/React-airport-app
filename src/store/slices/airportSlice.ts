import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAirport } from '../../models/models';

interface AirportState {
  loading: boolean
  error: string
  airport: IAirport[]
};

const initialState: AirportState = {
  loading: false,
  error: '',
  airport: []
};

const airportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IAirport[]>) {
      state.loading = false;
      state.airport = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export const { fetching, fetchSuccess, fetchError } = airportSlice.actions;
export default airportSlice.reducer;
