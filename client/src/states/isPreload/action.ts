import { AnyAction } from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import { auth } from "@/utils/api";
import { receiveAuthUserActionCreator } from "../authUser/action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

export enum ActionType {
  SET_IS_PRELOAD = "SET_IS_PRELOAD",
}

export interface SetIsPreloadAction {
  type: ActionType.SET_IS_PRELOAD;
  payload: {
    isPreload: null | boolean;
  };
}

export type IsPreloadAction = SetIsPreloadAction | AnyAction;

function setIsPreloadActionCreator(
  isPreload: null | boolean,
): SetIsPreloadAction {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncSetIsPreload(): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const authUser = await auth.getMe();
      dispatch(receiveAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setIsPreloadActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { asyncSetIsPreload };
