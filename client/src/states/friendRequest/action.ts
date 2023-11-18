import { TFriendRequestOrSent } from "@/types";
import { AnyAction } from "@reduxjs/toolkit";

export enum ActionType {
  RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST",
  DELETE_FRIEND_REQUEST = "DELETE_FRIEND_REQUEST",
}

export interface receiveFriendRequestAction {
  type: ActionType.RECEIVE_FRIEND_REQUEST;
  payload: {
    friendRequest: TFriendRequestOrSent[];
  };
}

export interface deleteFriendRequestAction {
  type: ActionType.DELETE_FRIEND_REQUEST;
  payload: {
    friendRequestId: number;
  };
}

export type FriendRequestAction =
  | receiveFriendRequestAction
  | deleteFriendRequestAction
  | AnyAction;

function receiveFriendRequest(
  friendRequest: TFriendRequestOrSent[],
): receiveFriendRequestAction {
  return {
    type: ActionType.RECEIVE_FRIEND_REQUEST,
    payload: {
      friendRequest,
    },
  };
}

function deleteFriendRequest(
  friendRequestId: number,
): deleteFriendRequestAction {
  return {
    type: ActionType.DELETE_FRIEND_REQUEST,
    payload: {
      friendRequestId,
    },
  };
}

export { receiveFriendRequest, deleteFriendRequest };
