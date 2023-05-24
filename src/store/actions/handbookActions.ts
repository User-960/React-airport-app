import { AppDispatch } from "..";
import axios from "../../axios";
import { TAirportCountry, TAirportRegion, TAirportType } from "../../models/models";
import { fetching, fetchSuccess } from "../slices/handbookSlice";

export const fetchHandbooks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetching());
      const response = await Promise.all([
        axios.get<TAirportType[]>('airports-types'),
        axios.get<TAirportRegion[]>('regions'),
        axios.get<TAirportCountry[]>('countries')
      ])
      dispatch(fetchSuccess({
        types: response[0].data,
        regions: response[1].data,
        countries: response[2].data
      }));
    } catch (e) {
      console.log("error");
    }
  }
};
