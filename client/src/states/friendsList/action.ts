import { TFriendList } from "@/types";
import { AnyAction } from "@reduxjs/toolkit";

export enum ActionType {
  RECEIVE_FRIENDS_LIST = "RECEIVE_FRIENDS_LIST",
  DELETE_FRIEND = "DELETE_FRIEND",
}

export interface receiveFriendsListAction {
  type: ActionType.RECEIVE_FRIENDS_LIST;
  payload: {
    friendsList: TFriendList[];
  };
}

export interface deleteFriendAction {
  type: ActionType.DELETE_FRIEND;
  payload: {
    friendId: number;
  };
}

export type FriendListAction =
  | receiveFriendsListAction
  | deleteFriendAction
  | AnyAction;

function receiveFriendsList(
  friendsList: TFriendList[],
): receiveFriendsListAction {
  return {
    type: ActionType.RECEIVE_FRIENDS_LIST,
    payload: {
      friendsList,
    },
  };
}

function deleteFriend(friendId: number): deleteFriendAction {
  return {
    type: ActionType.DELETE_FRIEND,
    payload: {
      friendId,
    },
  };
}

export { receiveFriendsList, deleteFriend };
