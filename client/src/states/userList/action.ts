import { TUser } from "@/types";
import { AnyAction } from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { user } from "@/utils/api";
import myToast from "@/components/MyToast";

export enum ActionType {
  RECEIVER_USER_LIST = "RECEIVER_USER_LIST",
}

export interface ReceiverUserListAction {
  type: ActionType.RECEIVER_USER_LIST;
  payload: {
    userList: TUser[];
  };
}

export type UserListAction = ReceiverUserListAction | AnyAction;

function receiverUserListActionCreator(
  userList: TUser[],
): ReceiverUserListAction {
  return {
    type: ActionType.RECEIVER_USER_LIST,
    payload: {
      userList,
    },
  };
}

function asyncGetUserList() {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const userList = await user.getUserList();
      dispatch(receiverUserListActionCreator(userList));
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Error getting user list",
      });
    }
    dispatch(hideLoading());
  };
}

export { asyncGetUserList };
