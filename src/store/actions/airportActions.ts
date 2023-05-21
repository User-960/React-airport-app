import { AppDispatch } from "..";
import axios from "../../axios";
import { IAirport, ServerResponse } from "../../models/models";
import { fetchError, fetching, fetchSuccess } from "../slices/airportSlice";

export const fetchAirports = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetching());
      const response = await axios.get<ServerResponse<IAirport>>('airports');
      dispatch(fetchSuccess(response.data.results));
    } catch (e) {
      dispatch(fetchError(e as Error));
    }
  }
};
