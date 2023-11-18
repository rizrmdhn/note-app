import { TFriendRequestOrSent } from "@/types";
import { ActionType, FriendSentAction } from "./action";

export type TFriendSentState = TFriendRequestOrSent[] | [];

const initialState: TFriendSentState = [];

function friendSentReducer(
  state: TFriendSentState = initialState,
  action: FriendSentAction,
): TFriendSentState {
  switch (action.type) {
    case ActionType.RECEIVE_FRIEND_SENT_LIST:
      return action.payload.friendSentList;
    case ActionType.ADD_FRIEND_SENT:
      return [...state, action.payload.friendSent];
    case ActionType.DELETE_FRIEND_SENT:
      return state.filter(
        (friend) => friend.id !== action.payload.friendSentId,
      );
    default:
      return state;
  }
}

export default friendSentReducer;
