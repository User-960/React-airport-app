import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAirportType, TAirportRegion, TAirportCountry } from '../../models/models';

interface HandbookState {
  loading: boolean
  types: TAirportType[]
  countries: TAirportCountry[]
  regions: TAirportRegion[]
};

const initialState: HandbookState = {
  loading: false,
  types: [],
  countries: [],
  regions: []
};

interface HandbookPayload {
  types: TAirportType[]
  regions: TAirportRegion[]
  countries: TAirportCountry[]
};

const handbookSlice = createSlice({
  name: 'handbook',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<HandbookPayload>) {
      state.loading = false;
      state.types = action.payload.types
      state.regions = action.payload.regions
      state.countries = action.payload.countries
    },
  }
});

export const { fetching, fetchSuccess } = handbookSlice.actions;
export default handbookSlice.reducer;