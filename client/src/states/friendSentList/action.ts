import { TFriendRequestOrSent } from "@/types";
import { AnyAction } from "@reduxjs/toolkit";

export enum ActionType {
  RECEIVE_FRIEND_SENT_LIST = "RECEIVE_FRIEND_SENT_LIST",
  ADD_FRIEND_SENT = "ADD_FRIEND_SENT",
  DELETE_FRIEND_SENT = "DELETE_FRIEND_SENT",
}

export interface receiveFriendSentListAction {
  type: ActionType.RECEIVE_FRIEND_SENT_LIST;
  payload: {
    friendSentList: TFriendRequestOrSent[];
  };
}

export interface addFriendSentAction {
  type: ActionType.ADD_FRIEND_SENT;
  payload: {
    friendSent: TFriendRequestOrSent;
  };
}

export interface deleteFriendSentAction {
  type: ActionType.DELETE_FRIEND_SENT;
  payload: {
    friendSentId: number;
  };
}

export type FriendSentAction =
  | receiveFriendSentListAction
  | deleteFriendSentAction
  | addFriendSentAction
  | AnyAction;

function receiveFriendSentList(
  friendSentList: TFriendRequestOrSent[],
): receiveFriendSentListAction {
  return {
    type: ActionType.RECEIVE_FRIEND_SENT_LIST,
    payload: {
      friendSentList,
    },
  };
}

function addFriendSent(friendSent: TFriendRequestOrSent): addFriendSentAction {
  return {
    type: ActionType.ADD_FRIEND_SENT,
    payload: {
      friendSent,
    },
  };
}

function deleteFriendSent(friendSentId: number): deleteFriendSentAction {
  return {
    type: ActionType.DELETE_FRIEND_SENT,
    payload: {
      friendSentId,
    },
  };
}

export { receiveFriendSentList, addFriendSent, deleteFriendSent };
