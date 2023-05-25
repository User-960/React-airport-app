import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAirport, IFilter } from '../../models/models';

interface AirportState {
  loading: boolean
  error: string
  count: number
  airports: IAirport[]
  airportsContainer: IAirport[]
};

const initialState: AirportState = {
  loading: false,
  count: 0,
  error: '',
  airports: [],
  airportsContainer: []
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
      state.airportsContainer = action.payload;
      state.count = 27;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    filterAirports(state, action: PayloadAction<IFilter>) {
      state.airports = state.airportsContainer
        .filter(a => a.type.includes(action.payload.type))
        .filter(a => a.country.includes(action.payload.country))
        .filter(a => a.region.includes(action.payload.region))
    }
  }
});

export const { fetching, fetchSuccess, fetchError, filterAirports } = airportSlice.actions;
export default airportSlice.reducer;
