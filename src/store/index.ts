import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

});

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
};
