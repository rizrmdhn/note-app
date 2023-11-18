import { TFriendList } from "@/types";
import { ActionType, FriendListAction } from "./action";

export type TFriendListState = TFriendList[] | [];

const initialState: TFriendListState = [];

function friendListReducer(
  state: TFriendListState = initialState,
  action: FriendListAction,
): TFriendListState {
  switch (action.type) {
    case ActionType.RECEIVE_FRIENDS_LIST:
      return action.payload.friendsList;
    case ActionType.DELETE_FRIEND:
      return state.filter(
        (friend) => friend.friend_id !== action.payload.friendId,
      );
    default:
      return state;
  }
}

export default friendListReducer;
