import { TUser } from "@/types";
import { AnyAction } from "redux";
import myToast from "@/components/MyToast";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { AppDispatch } from "..";
import { auth, user } from "@/utils/api";

export enum ActionType {
  SET_AUTH_USER = "SET_AUTH_USER",
  UNSET_AUTH_USER = "UNSET_AUTH_USER",
  UPDATE_AUTH_USER = "UPDATE_AUTH_USER",
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

export interface UpdateAuthUserAction {
  type: ActionType.UPDATE_AUTH_USER;
  payload: {
    authUser: TUser;
  };
}

export type AuthUserAction =
  | SetAuthUserAction
  | UnsetAuthUserAction
  | UpdateAuthUserAction
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

function updateAuthUserActionCreator(authUser: TUser): UpdateAuthUserAction {
  return {
    type: ActionType.UPDATE_AUTH_USER,
    payload: {
      authUser,
    },
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
      const authUser = await user.getMe();

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

function asyncUnsetAuthUser(): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unsetAuthUserActionCreator());
      await auth.logout();
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Logout failed",
      });
    }
    dispatch(hideLoading());
  };
}

export {
  receiveAuthUserActionCreator,
  updateAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
