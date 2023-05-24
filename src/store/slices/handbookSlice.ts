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

};

const handbookSlice = createSlice({
  name: 'handbook',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction) {
      state.loading = false;
      // state.types = action.payload;
    },
  }
});

export const { fetching } = handbookSlice.actions;
export default handbookSlice.reducer;