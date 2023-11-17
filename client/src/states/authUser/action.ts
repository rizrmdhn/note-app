import { TUser } from "@/types";
import { AnyAction } from "redux";
import myToast from "@/components/MyToast";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { AppDispatch } from "..";
import { auth } from "@/utils/api";

export enum ActionType {
  SET_AUTH_USER = "SET_AUTH_USER",
  UNSET_AUTH_USER = "UNSET_AUTH_USER",
}

export interface SetAuthUserAction {
  type: ActionType.SET_AUTH_USER;
  payload: {
    authUser: TUser;
  };
}

export interface UnsetAuthUserAction {
  type: ActionType.UNSET_AUTH_USER;
  payload: null;
}

export type AuthUserAction =
  | SetAuthUserAction
  | UnsetAuthUserAction
  | AnyAction;

function receiveAuthUserActionCreator(authUser: TUser): SetAuthUserAction {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator(): UnsetAuthUserAction {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: null,
  };
}

function asyncSetAuthUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      await auth.login({ email, password });
      const authUser = await auth.getMe();

      dispatch(receiveAuthUserActionCreator(authUser));
      myToast.fire({
        icon: "success",
        title: "Login success",
      });
    } catch (error: unknown) {
      myToast.fire({
        icon: "error",
        title: "Login failed",
      });
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch: AppDispatch) => {
    dispatch(unsetAuthUserActionCreator());
    await auth.logout();
  };
}

export { asyncSetAuthUser, asyncUnsetAuthUser };
