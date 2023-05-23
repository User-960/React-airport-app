import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAirport } from '../../models/models';

interface AirportState {
  loading: boolean
  error: string
  count: number
  airports: IAirport[]
};

const initialState: AirportState = {
  loading: false,
  count: 0,
  error: '',
  airports: []
};

// interface AirportPayload {
//   airports: IAirport[]
// };

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
      state.count = 25;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export const { fetching, fetchSuccess, fetchError } = airportSlice.actions;
export default airportSlice.reducer;
