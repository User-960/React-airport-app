import { createSlice } from '@reduxjs/toolkit';

interface AirportState {
  loading: boolean
  error: string
  airport: []
};

const initialState: AirportState = {
  loading: true,
  error: '',
  airport: []
};

const airportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers: {}
});

export default airportSlice.reducer;