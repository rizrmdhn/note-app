import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "./isLoading/reducer";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isLoading: isLoadingReducer,
    isPreload: isPreloadReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type AppGetState = typeof store.getState;
