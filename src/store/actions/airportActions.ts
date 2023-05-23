import { AppDispatch } from "..";
import axios from "../../axios";
import { IAirport } from "../../models/models";
import { fetchError, fetching, fetchSuccess } from "../slices/airportSlice";

export const fetchAirports = (_page: number, _limit: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetching());
      const response = await axios.get<IAirport[]>('airports', { params: { _page, _limit } });
      dispatch(fetchSuccess(response.data));
    } catch (e) {
      dispatch(fetchError(e as Error));
    }
  }
};
