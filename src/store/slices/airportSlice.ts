import { createSlice } from '@reduxjs/toolkit';
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
  reducers: {}
});

export default airportSlice.reducer;