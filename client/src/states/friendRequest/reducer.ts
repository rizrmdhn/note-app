import { TFriendRequestOrSent } from "@/types";
import { ActionType, FriendRequestAction } from "./action";

export type TFriendRequestState = TFriendRequestOrSent[] | [];

const initialState: TFriendRequestState = [];

function friendRequestReducer(
  state: TFriendRequestState = initialState,
  action: FriendRequestAction,
): TFriendRequestState {
  switch (action.type) {
    case ActionType.RECEIVE_FRIEND_REQUEST:
      return action.payload.friendRequest;
    case ActionType.DELETE_FRIEND_REQUEST:
      return state.filter(
        (friend) => friend.id !== action.payload.friendRequestId,
      );
    default:
      return state;
  }
}

export default friendRequestReducer;
